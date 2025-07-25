"use client";

import { motion } from "motion/react";

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
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-200 via-indigo-100 to-white flex flex-col items-center py-12 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-indigo-900 mb-8"
      >
        Self-Help Materials
      </motion.h1>
      <div className="w-full max-w-3xl grid gap-6">
        {selfHelpMaterials.map((item, idx) => (
          <motion.a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className="block bg-white/80 border border-indigo-100 rounded-2xl p-6 shadow hover:shadow-lg hover:bg-indigo-100/60 transition-all"
          >
            <div className="text-2xl font-semibold text-indigo-900 mb-2">
              {item.title}
            </div>
            <div className="text-indigo-900/70">{item.description}</div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
