// app/api/emotion/submit/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import { authOptions } from "../../auth/[...nextauth]/options";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { rating, emotion } = await req.json();

  if (!rating || rating < 1 || rating > 5 || !emotion) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  // Only one rating allowed per user per day
  const today = format(new Date(), "yyyy-MM-dd");
  const existing = await prisma.emotionRating.findFirst({
    where: {
      userId: session.user.id,
      createdAt: {
        gte: new Date(`${today}T00:00:00.000Z`),
        lt: new Date(`${today}T23:59:59.999Z`),
      },
    },
  });

  if (existing) {
    return NextResponse.json(
      { error: "Already submitted today" },
      { status: 409 }
    );
  }

  const newRating = await prisma.emotionRating.create({
    data: {
      userId: session.user.id,
      rating,
      emotion,
    },
  });

  return NextResponse.json(newRating);
}
