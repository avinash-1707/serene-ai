"use client";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Book, MessageSquare, Sparkles, Video } from "lucide-react";
import { useRouter } from "next/navigation";
import { Typewriter } from "react-simple-typewriter";

export const HeroSection = () => {
  const router = useRouter();
  return (
    <section className="relative z-10 px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Badge className="bg-transparent text-black/70 border-black/80 mb-2">
                🌈 Your Queit space
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              <span className="bg-black bg-clip-text text-transparent">
                Your Safe Space when it's hard to speak to anyone else
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl text-black/60 leading-relaxed max-w-lg"
            >
              Experience anonymous, 24/7 emotional support with our empathetic
              AI companion. Get personalized coping strategies, mood tracking,
              and a safe space to express yourself.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={() => router.push("/chat")}
                size="lg"
                className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg group hover:scale-105 cursor-pointer"
              >
                Talk to the Bot
                <ArrowRight className="ml-1 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => router.push("/collection")}
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg hover:scale-105 cursor-pointer"
              >
                <Book className="ml-2 w-6 h-6 transition-transform" />
                Collection
              </Button>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center space-x-6 pt-2"
            >
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-yellow-500" />
                <span className="text-sm text-gray-600">
                  No technical knowledge required
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-gray-600">Instant feedback</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Chat Preview */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-6 max-w-md mx-auto">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Serene AI</h3>
                  <p className="text-sm text-green-500">● Online</p>
                </div>
              </div>

              <div className="space-y-4">
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="bg-blue-600/70 rounded-2xl rounded-br-none p-4 ml-4"
                >
                  <p className="text-white text-sm">
                    I don’t know... I just feel really overwhelmed today.
                    Everything feels too much.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="bg-gray-300 rounded-2xl rounded-bl-none p-4 mr-10"
                >
                  <p className="text-sm">
                    I'm really sorry you're feeling this way. You're not alone,
                    and I'm here for you. Would you like to talk about what’s
                    been overwhelming you?
                  </p>
                </motion.div>

                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                  className="bg-blue-600/70 rounded-2xl rounded-br-none p-4 ml-4"
                >
                  <p className="text-white text-sm">
                    It’s mostly work and family. No matter what I do, it’s never
                    enough.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 2 }}
                className="flex items-center space-x-2 mt-4 pt-4 border-t border-gray-100"
              >
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500">
                  Serene is typing...
                </span>
              </motion.div>
            </div>

            {/* Floating elements around chat */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 rounded-full flex items-center justify-center shadow-lg"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
