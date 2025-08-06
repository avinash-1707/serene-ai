"use client";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";

export const CallToAction = () => {
  const router = useRouter();
  return (
    <section className=" px-6 md:px-12 py-16 md:py-24 bg-gradient-to-br from-primary/50  to-primary">
      
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
           
          </motion.div>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full bg-violet-50 border-[#8E7AF4] text-sm font-medium text-[#9166ff]">
              <Sparkles className="h-4 w-4 mr-2" />
              Start talking, suffer less
          </Badge>

          <h2 className="text-3xl text-white md:text-5xl font-bold mb-6">
            Feeling overwhelmed? 
           <span>Talk to someone who listens,anytime.</span> 
          </h2>

          <p className="text-xl text-white max-w-2xl mx-auto mb-8 leading-relaxed">
            Start chatting,without any judgment.
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-violet-50 text-sm mt-4"
          >
            ✨ • Get results in minutes • Completely free
          </motion.p>
        </motion.div>
      </div>

    </section>
  );
};
