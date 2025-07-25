// app/api/emotion/weekly/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { subDays, format } from "date-fns";
import { authOptions } from "../../auth/[...nextauth]/options";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const sevenDaysAgo = subDays(new Date(), 7);

  // Get all ratings in the last 7 days
  const ratings = await prisma.emotionRating.findMany({
    where: {
      userId: session.user.id,
      createdAt: { gte: sevenDaysAgo },
    },
    orderBy: { createdAt: "asc" },
  });

  // Group and average by day
  const dailyAverage: Record<string, { sum: number; count: number }> = {};

  ratings.forEach((rating) => {
    const day = format(rating.createdAt, "yyyy-MM-dd");

    if (!dailyAverage[day]) {
      dailyAverage[day] = { sum: 0, count: 0 };
    }

    dailyAverage[day].sum += rating.rating;
    dailyAverage[day].count += 1;
  });

  // Convert to final array format
  const result = Object.entries(dailyAverage).map(([date, { sum, count }]) => ({
    date,
    averageRating: parseFloat((sum / count).toFixed(2)),
  }));
  console.log(result);

  return NextResponse.json(result);
}
