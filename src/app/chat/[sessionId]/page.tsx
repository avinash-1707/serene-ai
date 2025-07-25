"use client";

import ChatNavbar from "@/components/ChatNavbar";
import MessageLogs from "@/components/MessageLogs";
import SideBar from "@/components/SideBar";
import { useParams } from "next/navigation";

export default function Chat() {
  const params = useParams();
  const sessionId = params.sessionId as string;
  return (
    <div className="flex h-screen">
      <SideBar />

      <div className="flex-1 h-full flex flex-col items-center bg-gradient-to-br from indigo-200 via-indigo-100 to-white text-white">
        <div className="w-full">
          <ChatNavbar />
        </div>

        <div className="fixed top-16 px-32 pb-12">
          <MessageLogs sessionId={sessionId} />
        </div>
      </div>
    </div>
  );
}
