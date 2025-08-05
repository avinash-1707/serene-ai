"use client";
import { X } from "lucide-react";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import Image from "next/image";

export default function LoginModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.7, opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-white/30 z-50 backdrop-blur"
    >
      <div className="bg-primary/10 py-6 px-10 mx-3.5 rounded-2xl w-full h-1/3 lg:w-1/3 lg:h-1/2 relative flex flex-col items-center">
        <Button
          onClick={onClose}
          className="absolute top-2 right-2 bg-transparent cursor-pointer"
        >
          <X className="text-foreground" />
        </Button>
        <h2 className="text-md lg:text-2xl font-semibold mb-4 text-foreground">
          Sign In to
        </h2>
        <h2 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-br from-violet-600 to-violet-400 bg-clip-text text-transparent">
          Serene.AI
        </h2>
        <div className=" mb-8 flex flex-col items-center justify-evenly w-full h-full">
          <Button
            onClick={() => signIn("google", { callbackUrl: "/chat" })}
            className="w-full bg-violet-600 hover:bg-violet-600 text-white text-lg p-5 rounded-3xl mb-2 cursor-pointer"
          >
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
            </span>
            Sign in with Google
          </Button>
          <Button
            onClick={() => signIn("github", { callbackUrl: "/chat" })}
            className="w-full bg-gray-800 text-lg text-white p-5 rounded-3xl cursor-pointer"
          >
            <Image
              src="/github-mark-white.png"
              alt="github logo"
              height={25}
              width={25}
            />
            Sign in with GitHub
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
