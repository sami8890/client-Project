"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Our Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-cyan-600" : "text-white"
              }`}
            >
              The Contnter Growth collective
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden space-x-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-600 hover:text-cyan-600"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`transition-colors duration-300 ${
                    isScrolled ? "text-cyan-600" : "text-white"
                  }`}
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 bg-cyan-500">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-lg font-medium text-white hover:text-white/80 transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              className={`transition-all duration-300 ${
                isScrolled
                  ? "border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white"
                  : "border-white text-zinc-700 hover:bg-white hover:text-cyan-700"
              }`}
              onClick={() =>
                window.open(
                  "https://www.cal.com/contntr/call",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
