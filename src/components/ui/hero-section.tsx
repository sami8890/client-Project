"use client"
import React from 'react';
import { ArrowRight, Search, BarChart3, TrendingUp, Zap } from 'lucide-react';

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
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm 
                          text-cyan-300 bg-cyan-950 border border-cyan-800/50 mb-8">
              <span className="w-1 h-1 rounded-full bg-cyan-400 mr-2" />
              #1 SEO Platform in 2025
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              Rank Higher.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                Convert Better.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-gray-400 max-w-xl">
              Get more organic traffic with AI-powered SEO tools that help you outrank
              your competition and drive qualified leads.
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
              <button className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 
                               text-black font-medium rounded-lg transition-colors duration-200
                               flex items-center justify-center gap-2 group">
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-gray-900 hover:bg-gray-800 
                               text-white font-medium rounded-lg transition-colors duration-200
                               border border-gray-800">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right column - Feature cards */}
          <div className="flex-1 grid sm:grid-cols-2 gap-4 w-full">
            {[
              {
                icon: Search,
                title: "Smart Keyword Research",
                description: "Find high-intent keywords that drive conversions"
              },
              {
                icon: BarChart3,
                title: "Real-time Analytics",
                description: "Track your performance with live dashboards"
              },
              {
                icon: TrendingUp,
                title: "Competitor Analysis",
                description: "Stay ahead of your competition"
              },
              {
                icon: Zap,
                title: "AI Optimization",
                description: "Let AI enhance your content strategy"
              }
            ].map((feature, index) => (
              <div key={index} className="group p-6 rounded-lg bg-gradient-to-b from-gray-900 to-gray-900/50 
                                       border border-gray-800 hover:border-cyan-800 transition-colors duration-200">
                <feature.icon className="w-8 h-8 text-cyan-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;