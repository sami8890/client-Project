"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Edit,
  Globe,
  MessageSquare,
  LineChart,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TypingText } from "@/components/ui/typing-text";

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

const SERVICES = [
  {
    icon: Edit,
    title: "Creative Copywriting",
    description: "Compelling copy that captivates and converts your audience",
    bgColor: "bg-indigo-500/10",
    iconColor: "text-indigo-500",
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "Results-driven online marketing strategies",
    bgColor: "bg-green-500/10",
    iconColor: "text-green-500",
  },
  {
    icon: MessageSquare,
    title: "SEO Copywriting",
    description: "Search-optimized content that drives traffic",
    bgColor: "bg-amber-500/10",
    iconColor: "text-amber-500",
  },
  {
    icon: LineChart,
    title: "Business Analytics",
    description: "Data-driven insights for informed decisions",
    bgColor: "bg-cyan-500/10",
    iconColor: "text-cyan-500",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#098DAF] to-[#0E6BA8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.p
            className="text-lg font-semibold text-white mb-2"
            variants={fadeInUp}
          >
            Our Services
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            variants={fadeInUp}
          >
            What We Offer
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-xl text-white"
            variants={fadeInUp}
          >
            Comprehensive digital solutions and content strategies to help your
            business thrive in the digital landscape
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          {SERVICES.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <div
                    className={`p-3 rounded-xl ${service.bgColor} w-fit mb-4`}
                  >
                    <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="group text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto font-semibold"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.h3
            className="text-3xl font-bold text-white mb-4"
            variants={fadeInUp}
          >
            Ready to take your digital presence?
          </motion.h3>
          <motion.p
            className="max-w-2xl mx-auto text-xl text-white mb-8"
            variants={fadeInUp}
          >
            <TypingText text="  Let's work together to achieve your goals.  Our experts collaborate to create impactful solutions tailored to your unique needs." />
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() =>
                window.open(
                  "https://www.cal.com/contntr/call",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Get Started
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
