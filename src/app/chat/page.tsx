"use client";

import NewChatModal from "@/components/NewChatModal";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChatSessionSchema } from "@/schemas/chatSessionSchema";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { z } from "zod";
import { motion } from "motion/react";
import NewChatNavbar from "@/components/NewChatNavbar";

const parentVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const childVariants = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export default function ChatHome() {
  const { data: session, status } = useSession();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chatLogs, setChatLogs] = useState<z.infer<typeof ChatSessionSchema>[]>(
    []
  );
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (session?.user?.id) {
      const fetchSessions = async () => {
        const res = await fetch(`/api/get-sessions?userId=${session.user.id}`);
        const data = await res.json();
        setChatLogs(data.sessions);
      };

      fetchSessions();
    }
  }, [session]);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/?loginRequired=true");
    }
  }, [status, router]);

  const handleNewChat = async (title: string) => {
    setLoading(true);
    try {
      const res = await axios.post("/api/new-chat", { title });
      const { sessionId } = res.data;
      router.push(`/chat/${sessionId}`);
      setLoading(false);
    } catch (err) {
      console.error("Failed to create new chat session", err);
    }
  };

  if (status === "loading")
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-indigo-200 via-indigo-100 to-white p-8">
        <div className="absolute inset-0 bg-white/60 flex items-center justify-center z-50">
          <div className="w-12 h-12 border-4 border-indigo-300 border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    );

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-indigo-200 via-indigo-100 to-white flex justify-center items-center">
      <NewChatNavbar />
      <NewChatModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleNewChat}
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0.4 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="h-3/4 w-full mx-2 lg:w-1/2 bg-white/70 rounded-2xl lg:px-5 flex flex-col items-center shadow-xl"
      >
        <div className="w-full flex justify-center py-10">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsModalOpen(true)}
            disabled={loading}
            className="px-10 py-3 bg-gradient-to-br from-indigo-300 via-indigo-200 to-white text-indigo-900 rounded-2xl hover:from-indigo-200 hover:via-indigo-100 hover:to-white cursor-pointer border border-indigo-200"
          >
            {loading ? "Creating..." : "➕ New Chat"}
          </motion.button>
        </div>
        <Separator className="bg-indigo-200/80" />
        <motion.div
          variants={parentVariants}
          initial="initial"
          animate="animate"
          className="bg-transparent custom-scrollbar rounded w-7/8 h-7/10 m-6 px-3 overflow-y-auto "
        >
          {chatLogs.length === 0 ? (
            <div className="h-full w-full bg-transparent flex items-center justify-center text-indigo-300 text-3xl">
              No Chat History
            </div>
          ) : (
            chatLogs.map((item, index) => (
              <motion.div
                variants={childVariants}
                key={index}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                onClick={() => router.push(`/chat/${item.id}`)}
                className={`px-4 py-3 mb-2 flex items-center hover:bg-indigo-100 cursor-pointer rounded-2xl bg-white/80 text-indigo-900 justify-center border border-indigo-100`}
              >
                <span className="ml-3">{item.title}</span>
              </motion.div>
            ))
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
