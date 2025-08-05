"use client";

import { motion } from "motion/react";
import FloatingHearts from "@/components/landing-page/FloatingHearts";


const selfHelpMaterials = [
  {
    title: "Mindfulness Meditation",
    description:
      "A guided meditation to help you stay present and reduce stress.",
    link: "https://www.mindful.org/how-to-meditate/",
  },
  {
    title: "Cognitive Behavioral Therapy Basics",
    description:
      "Learn the fundamentals of CBT and how to apply them in daily life.",
    link: "https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/cognitive-behavioural-therapy-cbt/",
  },
  {
    title: "Building Healthy Habits",
    description:
      "Tips and strategies for creating and maintaining positive habits.",
    link: "https://jamesclear.com/atomic-habits",
  },
  {
    title: "Managing Anxiety",
    description: "Practical exercises and advice for coping with anxiety.",
    link: "https://www.anxietycanada.com/articles/how-to-manage-anxiety/",
  },
  {
    title: "Journaling for Self-Reflection",
    description: "Prompts and techniques to help you reflect and grow.",
    link: "https://positivepsychology.com/benefits-of-journaling/",
  },
];

export default function SelfHelpPage() {
  return (
    <div className=" relative min-h-screen w-full bg-background flex flex-col items-center py-12 px-4">
      <FloatingHearts />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-clip-text text-transparent text-4xl md:text-4xl font-bold mb-8"
        style={{ backgroundImage: "linear-gradient(to right, #9a64f2 , #7564f2)" }} >
        Find Your Calm: Self-Help Resources
      </motion.h1>
      <div className="w-full max-w-3xl grid gap-6">
        {selfHelpMaterials.map((item, idx) => (
          <motion.a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className=" relative block bg-card border border-primary/40 z-100 rounded-2xl p-6 shadow-dreamy  hover:shadow-lg hover:bg-card/50 transition-all"
          >
            <div className="text-2xl font-semibold text-card-foreground mb-2">
              {item.title}
            </div>
            <div className="text-muted-foreground">{item.description}</div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
