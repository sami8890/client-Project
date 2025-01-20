// "use client";

// import React from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import { Search, BarChart, TrendingUp, ArrowRight } from "lucide-react";
// import { TypingText } from "./typing-text";

// const fadeInUp = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.5 },
// };

// const staggerChildren = {
//   animate: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// export default function HeroSection() {
//   return (
//     <div className="relative min-h-screen">
//       {/* Background Image */}
//       <div className="fixed inset-0 z-0">
//         <Image
//           src="/painting.png"
//           alt="SEO Background"
//           fill
//           priority
//           className="object-cover brightness-90"
//         />
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/80 to-cyan-600/80 mix-blend-multiply" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex min-h-screen flex-col items-center justify-center py-20 pt-32">
//           <div className="grid gap-16 lg:grid-cols-2">
//             {/* Left Column - Text Content */}
//             <motion.div
//               className="flex flex-col justify-center text-left"
//               initial="initial"
//               animate="animate"
//               variants={staggerChildren}
//             >
//               <motion.h1
//                 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
//                 variants={fadeInUp}
//               >
//                 Boost Your Online Visibility with Expert SEO
//               </motion.h1>

//               <motion.p
//                 className="mb-8 max-w-2xl text-lg text-white/90"
//                 variants={fadeInUp}
//               >
//                 <TypingText
//                   text="Transform your digital presence with our cutting-edge SEO solutions. We help businesses climb search rankings and drive organic traffic for sustainable growth."

//                 />
//               </motion.p>

//               <motion.div
//                 className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
//                 variants={fadeInUp}
//               >
//                 <Button
//                   size="lg"
//                   className="w-full sm:w-auto bg-white text-cyan-600 hover:bg-white/90 transition-colors duration-200 group text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3"
//                   aria-label="Book a meeting"
//                 >
//                   Book a Meeting
//                   <motion.span
//                     className="inline-block ml-2"
//                     initial={{ x: 0 }}
//                     whileHover={{ x: 5 }}
//                   >
//                     <ArrowRight className="h-4 w-4" aria-hidden="true" />
//                   </motion.span>
//                 </Button>
//               </motion.div>
//             </motion.div>

//             {/* Right Column - SEO Features */}
//             <motion.div
//               className="grid grid-cols-1 sm:grid-cols-2 gap-6"
//               variants={staggerChildren}
//               initial="initial"
//               animate="animate"
//               role="list"
//               aria-label="SEO Features"
//             >
//               {[
//                 {
//                   icon: Search,
//                   title: "Keyword Research",
//                   description: "Target the right keywords for your audience",
//                 },
//                 {
//                   icon: BarChart,
//                   title: "Performance Tracking",
//                   description: "Monitor your SEO progress in real-time",
//                 },
//                 {
//                   icon: TrendingUp,
//                   title: "Ranking Improvement",
//                   description: "Climb SERP rankings with proven strategies",
//                 },
//                 {
//                   icon: Search,
//                   title: "On-Page Optimization",
//                   description: "Optimize your content for search engines",
//                 },
//               ].map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm p-6 rounded-lg"
//                   variants={fadeInUp}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   role="listitem"
//                 >
//                   <feature.icon
//                     className="h-12 w-12 text-white mb-4"
//                     aria-hidden="true"
//                   />
//                   <h3 className="text-xl font-semibold text-white mb-2">
//                     {feature.title}
//                   </h3>
//                   <p className="text-white/80">{feature.description}</p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React from "react";
import { ArrowRight, Search, BarChart3, TrendingUp, Zap } from "lucide-react";
import { TypingText } from "./typing-text";

const HeroSection = () => {
  return (
    <div className="relative bg-black min-h-screen flex items-center">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 via-black to-black" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left column - Main content */}
          <div className="flex-1 space-y-8">
            {/* Status pill */}
            <div
              className="inline-flex items-center rounded-full px-3 py-1 text-sm 
                          text-cyan-300 bg-cyan-950 border border-cyan-800/50 mb-8"
            >
              <span className="w-1 h-1 rounded-full bg-cyan-400 mr-2" />
              #1 SEO Platform in 2025
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              Rank Higher.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                Convert Better.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-gray-400 max-w-xl">
              <TypingText text="Get more organic traffic with AI-powered SEO tools that help you
              outrank your competition and drive qualified leads." />             
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-8 border-y border-gray-800">
              <div>
                <div className="text-3xl font-bold text-white">93%</div>
                <div className="text-sm text-gray-500">Ranking Improvement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">2.8x</div>
                <div className="text-sm text-gray-500">Traffic Increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">15k+</div>
                <div className="text-sm text-gray-500">Keywords Tracked</div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button
                className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 
                               text-black font-medium rounded-lg transition-colors duration-200
                               flex items-center justify-center gap-2 group"
                onClick={() =>
                  window.open(
                    "https://www.cal.com/contntr/call",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                Book a Meeting
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right column - Feature cards */}
          <div className="flex-1 grid sm:grid-cols-2 gap-4 w-full">
            {[
              {
                icon: Search,
                title: "Smart Keyword Research",
                description: "Find high-intent keywords that drive conversions",
              },
              {
                icon: BarChart3,
                title: "Real-time Analytics",
                description: "Track your performance with live dashboards",
              },
              {
                icon: TrendingUp,
                title: "Competitor Analysis",
                description: "Stay ahead of your competition",
              },
              {
                icon: Zap,
                title: "AI Optimization",
                description: "Let AI enhance your content strategy",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-lg bg-gradient-to-b from-gray-900 to-gray-900/50 
                                       border border-gray-800 hover:border-cyan-800 transition-colors duration-200"
              >
                <feature.icon className="w-8 h-8 text-cyan-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
