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
    <div className="p-4 border rounded-lg bg-white shadow max-w-2xl mx-auto">
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
              <span className="font-bold">{weeklyAverage}</span> 🌟
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
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-200 via-indigo-100 to-white flex flex-col items-center py-12 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-indigo-900 mb-8"
      >
        Your Dashboard
      </motion.h1>
      <div className="w-full max-w-3xl grid gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white/80 border border-indigo-100 rounded-2xl p-6 shadow flex flex-col md:flex-row gap-6"
        >
          <div className="self-start flex-shrink-0 flex flex-col items-center justify-center">
            <Image
              src={user?.avatarUrl ?? "/default-avatar.png"}
              height={40}
              width={40}
              alt="User Avatar"
              className="w-24 h-24 rounded-full border-2 border-indigo-200 mb-2 bg-indigo-100 object-cover"
            />
            <div className="text-xl font-semibold text-indigo-900">
              {user?.name ?? "Anonymous"}
            </div>
            <div className="text-indigo-900/70">
              {user?.email ?? "No email"}
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-lg font-semibold text-indigo-900 mb-2">
              Emotional Analytics
            </div>
            <EmotionTrendChart />
            <div className="my-8 flex flex-col items-center w-full"></div>
          </div>
          <Button onClick={() => router.push("/daily-emotion")}>
            Submit daily report
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
