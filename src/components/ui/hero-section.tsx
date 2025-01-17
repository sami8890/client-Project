"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Search, BarChart, TrendingUp, ArrowRight } from "lucide-react";
import { TypingText } from "./typing-text";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HeroSection() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/painting.png"
          alt="SEO Background"
          fill
          priority
          className="object-cover brightness-90"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/80 to-cyan-600/80 mix-blend-multiply" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen flex-col items-center justify-center py-20 pt-32">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left Column - Text Content */}
            <motion.div
              className="flex flex-col justify-center text-left"
              initial="initial"
              animate="animate"
              variants={staggerChildren}
            >
              <motion.h1
                className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
                variants={fadeInUp}
              >
                Boost Your Online Visibility with Expert SEO
              </motion.h1>

              <motion.p
                className="mb-8 max-w-2xl text-lg text-white/90"
                variants={fadeInUp}
              >
                <TypingText
                  text="Transform your digital presence with our cutting-edge SEO solutions. We help businesses climb search rankings and drive organic traffic for sustainable growth."
                 
                />
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
                variants={fadeInUp}
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-cyan-600 hover:bg-white/90 transition-colors duration-200 group text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3"
                  aria-label="Book a meeting"
                >
                  Book a Meeting
                  <motion.span
                    className="inline-block ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - SEO Features */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
              role="list"
              aria-label="SEO Features"
            >
              {[
                {
                  icon: Search,
                  title: "Keyword Research",
                  description: "Target the right keywords for your audience",
                },
                {
                  icon: BarChart,
                  title: "Performance Tracking",
                  description: "Monitor your SEO progress in real-time",
                },
                {
                  icon: TrendingUp,
                  title: "Ranking Improvement",
                  description: "Climb SERP rankings with proven strategies",
                },
                {
                  icon: Search,
                  title: "On-Page Optimization",
                  description: "Optimize your content for search engines",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm p-6 rounded-lg"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  role="listitem"
                >
                  <feature.icon
                    className="h-12 w-12 text-white mb-4"
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/80">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
