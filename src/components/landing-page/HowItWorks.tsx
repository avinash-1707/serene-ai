"use client";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Pin, Rocket } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "Track Your Feelings",
      description:
        "Reflect on your mood each day and notice patterns that help you grow.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Pin,
      title: "Find What Helps",
      description:
        "Explore calming tools, gentle prompts, and exercises tailored to your emotional needs",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Rocket,
      title: "Keep Going, Gently",
      description:
        "Serene is always here—whether it's midnight thoughts or morning check-ins.",
      color: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative z-10 px-6 md:px-12 py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-2xl">What Serene Offers</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Talk to your own mental health parter... She will listen ❣️
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="h-full bg-black/10 backdrop-blur-sm border-black/20 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold mb-4 text-gray-600 group-hover:text-gray-700 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Step number */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
