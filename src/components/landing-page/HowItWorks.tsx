"use client";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import {MessageCircle, Heart, BookOpen  } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
     {
    icon: MessageCircle,
    title: "Start a private chat",
    description: "No pressure, no judgment. Just a safe space to express what's on your mind.",
    color: "text-[#8064F2]"
  },
  {
    icon: Heart,
    title: "Track your mood over time",
    description: "Notice patterns and celebrate progress with gentle mood tracking.",
    color: "text-[#8064F2]"
  },
  {
    icon: BookOpen,
    title: "Explore your personalized tools",
    description: "Discover coping strategies and resources tailored just for you.",
    color: "text-[#8064F2]"
  }
  
  ];

  return (
    <section
      id="how-it-works"
      className="bg-[#fbfaff] relative z-10 px-6 md:px-12 py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-4">
            <span className="text-4xl">Meet Your Calm AI Companion</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Serene.AI: Where You Feel Heard 
          </p>
        </motion.div>
         <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              
                <Card className="bg-gradient-to-b from-white to-violet-50 relative group hover:shadow-lg hover:shadow-violet-100 transition-all duration-300 hover:-translate-y-1 border-violet-200 z-10">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-[#ffffff] rounded-full group-hover:scale-110 transition-transform duration-300 mx-auto shadow-lg hover:shadow-gray-200">
                    <step.icon className={`h-8 w-8 ${step.color}`} />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-[#e8e2ff] rounded-full text-[#8064F2] font-medium text-sm">
                    {index + 1}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
