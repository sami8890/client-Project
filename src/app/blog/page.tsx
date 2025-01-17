"use client";
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Clock,
  ChevronRight,
  Heart,
  Bookmark,
  Search,
  Filter,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "SEO", "Copywriting", "Content", "Marketing"];

  const posts = [
    {
      slug: "seo-strategies-for-2025",
      title: "Top 10 SEO Strategies for 2025",
      excerpt:
        "Discover the latest trends in SEO to boost your online visibility.",
      author: "John Smith",
      authorImage: "/api/placeholder/32/32",
      publishedAt: new Date("2024-12-01"),
      readTime: 6,
      category: "SEO",
      likes: 234,
      thumbnail: "/api/placeholder/400/250",
      featured: true,
    },
    {
      slug: "writing-persuasive-copy",
      title: "How to Write Persuasive Copy That Converts",
      excerpt: "Learn the art of crafting copy that drives action and sales.",
      author: "Jane Doe",
      authorImage: "/api/placeholder/32/32",
      publishedAt: new Date("2024-11-15"),
      readTime: 7,
      category: "Copywriting",
      likes: 189,
      thumbnail: "/api/placeholder/400/250",
    },
    {
      slug: "content-optimization-tips",
      title: "Content Optimization Tips for Better Rankings",
      excerpt:
        "Practical advice to ensure your content ranks higher on search engines.",
      author: "Emily Taylor",
      authorImage: "/api/placeholder/32/32",
      publishedAt: new Date("2024-10-28"),
      readTime: 5,
      category: "Content",
      likes: 156,
      thumbnail: "/api/placeholder/400/250",
    },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#088CB1]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/90 to-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in">
            Explore Our Blog
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mb-8">
            Discover insights, strategies, and the latest trends in digital
            marketing
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-background/5 backdrop-blur-md border border-border focus:outline-none focus:ring-2 focus:ring-ring text-primary-foreground placeholder-primary-foreground/70"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Category Filters */}
        <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-4">
          <Filter size={20} className="text-muted-foreground" />
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "secondary"}
              className="px-4 py-2 cursor-pointer transition-all"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        {filteredPosts.find((post) => post.featured) && (
          <Link href={`/blog/${filteredPosts[0].slug}`}>
            <Card className="mb-12 overflow-hidden group border-border">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative overflow-hidden">
                  <Image
                    src={filteredPosts[0].thumbnail || "/placeholder.svg"}
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4">Featured</Badge>
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-4">
                    {filteredPosts[0].category}
                  </Badge>
                  <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src={filteredPosts[0].authorImage || "/placeholder.svg"}
                      alt={filteredPosts[0].author}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium">{filteredPosts[0].author}</p>
                      <p className="text-sm text-muted-foreground">
                        {filteredPosts[0].publishedAt.toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <Button className="w-fit">
                    Read Article
                    <ChevronRight className="ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </Link>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts
            .filter((post) => !post.featured)
            .map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-border h-full">
                  <div className="relative">
                    <Image
                      src={post.thumbnail || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="bg-background/80 backdrop-blur-sm"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="bg-background/80 backdrop-blur-sm"
                      >
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-4">
                      {post.category}
                    </Badge>

                    <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors mb-3 line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Image
                          src={post.authorImage || "/placeholder.svg"}
                          alt={post.author}
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-sm font-medium">
                          {post.author}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-4 w-4" />
                        {post.readTime} min
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="px-6 py-4 bg-muted/50 flex justify-between items-center">
                    <div className="flex items-center text-muted-foreground">
                      <Heart className="mr-1 h-4 w-4" />
                      {post.likes}
                    </div>
                    <Button
                      variant="ghost"
                      className="text-primary hover:text-primary/80"
                    >
                      Read More
                      <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
