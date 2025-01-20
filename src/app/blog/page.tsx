
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight,} from "lucide-react";

const categories = [
  "All",
  "SEO Tips",
  "Content Strategy",
  "Technical SEO",
  "Local SEO",
];

const posts = [
  {
    id: "1",
    title: "10 Proven SEO Strategies for 2025",
    excerpt:
      "Discover the latest SEO techniques that are driving results in today's digital landscape.",
    category: "SEO Tips",
    readTime: "8 min read",
    image: "/placeholder.svg?height=600&width=800",
    featured: true,
  },
  {
    id: "2",
    title: "Why AI is Transforming Content Creation",
    excerpt:
      "Learn how artificial intelligence is revolutionizing the way we create and optimize content.",
    category: "Content Strategy",
    readTime: "6 min read",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "3",
    title: "Technical SEO Checklist for Beginners",
    excerpt:
      "A comprehensive guide to ensuring your website's technical foundation is optimized for search engines.",
    category: "Technical SEO",
    readTime: "10 min read",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "4",
    title: "Local SEO: Dominate Your Market",
    excerpt:
      "Essential strategies to improve your local search presence and attract more customers.",
    category: "Local SEO",
    readTime: "7 min read",
    image: "/placeholder.svg?height=600&width=800",
  },
];

const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <div className="relative bg-black py-24">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293720_1px,transparent_1px),linear-gradient(to_bottom,#1f293720_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Latest SEO Insights & Strategies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and strategies in SEO and
            digital marketing.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300
                ${
                  activeCategory === category
                    ? "bg-cyan-500 text-black"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {filteredPosts.filter((post) => post.featured)[0] && (
          <div className="mb-12">
            <Link
              href={`/blog/${filteredPosts[0].id}`}
              className="group relative rounded-2xl overflow-hidden block"
            >
              <Image
                src={filteredPosts[0].image || "/placeholder.svg"}
                alt={filteredPosts[0].title}
                width={800}
                height={400}
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-cyan-500 text-black text-sm">
                    Featured
                  </span>
                  <span className="text-gray-300 text-sm flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {filteredPosts[0].readTime}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {filteredPosts[0].title}
                </h3>
                <p className="text-gray-300 mb-4">{filteredPosts[0].excerpt}</p>
                <span className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        )}

        {/* Post Grid */}
        {/* <div className="grid md:grid-cols-3 gap-8">
          {filteredPosts
            .filter((post) => !post.featured)
            .map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group relative bg-gray-900/50 rounded-xl overflow-hidden
               border border-gray-800 hover:border-gray-700
               transition-all duration-300 hover:-translate-y-1 block"
              >
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center gap-1 text-sm text-cyan-400">
                      <Tag className="w-4 h-4" />
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span
                    className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 
                 group-hover:gap-3 transition-all"
                  >
                    Read Article
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
        </div> */}

       
      </div>
    </div>
  );
};

export default BlogSection;
