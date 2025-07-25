"use client";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export const CallToAction = () => {
  const router = useRouter();
  return (
    <section className="relative z-10 px-6 md:px-12 py-16 md:py-24 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <Sparkles className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          </motion.div>

          <h2 className="text-3xl text-white md:text-5xl font-bold mb-6">
            Start talking, suffer less
          </h2>

          <p className="text-xl text-blue-100/50 max-w-2xl mx-auto mb-8 leading-relaxed">
            Feeling overwhelmed? Talk to someone who listens — anonymously,
            anytime.” Start chatting. No signup, no judgment.
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-blue-200 text-sm mt-4"
          >
            ✨ Free to start • No credit card required • Get results in minutes
          </motion.p>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};
