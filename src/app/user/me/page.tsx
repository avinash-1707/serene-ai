"use client";

import { useSession } from "next-auth/react";
import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useMemo, useState } from "react";
import FloatingHearts from "@/components/landing-page/FloatingHearts";



// Map moods to numeric values for graph
export function EmotionTrendChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/emotion/weekly")
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error("Error loading emotion data:", err));
  }, []);

  // Memoized weekly average calculation
  const weeklyAverage = useMemo(() => {
    if (!data.length) return null;
    const total = data.reduce(
      (sum: number, item: any) => sum + item.averageRating,
      0
    );
    return (total / data.length).toFixed(2);
  }, [data]);

  return (
    <div className="p-4 border rounded-lg bg-gradient-to-br from-primary/10 to primary/50 shadow max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Your Mood Trend (Last 7 Days)
      </h2>

      {data.length === 0 ? (
        <p className="text-center text-gray-500">No data yet.</p>
      ) : (
        <>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[1, 5]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="averageRating"
                stroke="#8884d8"
                strokeWidth={3}
                dot={{ r: 5 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>

          {weeklyAverage && (
            <p className="text-center mt-4 text-lg font-medium text-purple-700">
              Your Weekly Average Emotion Rating:{" "}
              <span className="font-bold">{weeklyAverage}</span> 
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default function UserDashboard() {
  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="min-h-screen w-full bg-background flex flex-col items-center  py-12 px-4 z-0   ">
      <FloatingHearts />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600  bg-clip-text text-transparent mb-4"
      >
        Your weekly insights
      </motion.h1>
      <div className="w-full max-w-3xl grid gap-8 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="  bg-card border border-primary/40 z-100 rounded-2xl p-6 shadow-dreamy flex flex-col md:flex-row gap-6"
        >
          <div className="self-start flex-shrink-0 flex flex-col items-center justify-center ">
            <Image
              src={user?.avatarUrl ?? "/default-avatar.png"}
              height={40}
              width={40}
              alt="User Avatar"
              className="w-24 h-24 rounded-full border-2 border-white mb-2 bg-indigo-100 object-cover"
            />
            <div className="text-xl font-semibold text-foreground">
              {user?.name ?? "Anonymous"}
            </div>
            <div className="text-foreground">
              {user?.email ?? "No email"}
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-lg font-semibold text-foreground mb-2">
              Emotional Analytics
            </div>
            <EmotionTrendChart />
            <div className="my-8 flex flex-col items-center w-full"></div>
          </div>
          <Button onClick={() => router.push("/daily-emotion")}
            className="self-end bg-gradient-to-r from-violet-400 to-violet-500 text-white hover:from-violet-500 hover:to-violet-600 transition-colors">
            Submit daily report
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
