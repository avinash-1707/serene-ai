"use client";

import { ChatSessionSchema } from "@/schemas/chatSessionSchema";
import { User } from "next-auth";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { z } from "zod";
import { Menu, PanelRightOpen, Brain } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import NewChatModal from "./NewChatModal";
import Image from "next/image";


export default function SideBar() {
  const { data: session } = useSession();
  const user = session?.user as User | undefined;
  const [chatLogs, setChatLogs] = useState<z.infer<typeof ChatSessionSchema>[]>([]);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleNewChat = async (title: string) => {
    try {
      const res = await axios.post("/api/new-chat", { title });
      const { sessionId } = res.data;
      router.push(`/chat/${sessionId}`);
    } catch (err) {
      console.error("Failed to create new chat session", err);
    }
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

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

  return (
    <aside
      className={`h-screen bg-background border-r border-primary/30 transition-all duration-300 flex flex-col ${
        isCollapsed ? "w-[72px]" : "w-[260px]"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4  bg-primay/30">
        {!isCollapsed && (
          <div
          onClick={() => router.push("/")}
          className="flex items-center gap-2 cursor-pointer"
         >
        <Image src="/serene-logo.png" alt="Logo" width={24} height={24} />
        {!isCollapsed && (
        <h2 className="text-lg font-semibold text-foreground">Serene.AI</h2>
        )}
       </div>

        )}
        <button
          onClick={toggleSidebar}
          className="p-1 hover:bg-primary/10 rounded transition text-foreground "
        >
          {isCollapsed ? <Menu size={20} /> : <PanelRightOpen size={20} />}
        </button>
      </div>

      {/* New Chat Button */}
      <div className="px-3 mt-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center w-full gap-3 px-4 py-2 text-sm text-left text-foreground bg-transparent hover:bg-primary/10  rounded-md transition"
        >
          <Brain size={21} className="text-foreground" />
          {!isCollapsed && <span className="truncate">New Chat</span>}
        </button>
        <NewChatModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onCreate={handleNewChat}
        />
      </div>

      {/* Chat Sessions */}
      <nav className="mt-4 flex-1 overflow-auto px-2">
        {chatLogs.map((item, index) => (
          <div
            key={index}
            onClick={() => router.push(`/chat/${item.id}`)}
            className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md cursor-pointer hover:bg-primary/10 text-muted-foreground transition ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            {!isCollapsed && <span className="truncate">{item.title}</span>}
          </div>
        ))}
      </nav>

      <div className="border-t border-border px-4 py-3 mt-auto">
        {!isCollapsed && (
          <p className="text-xs text-muted-foreground text-center">
            Powered by Serene.AI
          </p>
        )}
      </div>
    </aside>
  );
}
