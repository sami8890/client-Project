"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";

const Navbar = () => {
  const [, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Initial animation when component mounts
    const tl = gsap.timeline();

    tl.from(logoRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        linksRef.current ? Array.from(linksRef.current.children) : [],
        {
          y: -30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        ctaRef.current,
        {
          y: -30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      );

    // Scroll animation
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);

      if (scrolled) {
        gsap.to(navRef.current, {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          borderBottom: "1px solid rgba(8, 145, 178, 0.2)",
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(navRef.current, {
          backgroundColor: "transparent",
          borderBottom: "1px solid rgba(8, 145, 178, 0)",
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: "Services",
      href: "/services",
      subItems: [
        { label: "SEO Optimization", href: "/" },
        { label: "Content Strategy", href: "/" },
        { label: "Content writing", href: "/" },
      ],
    },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  interface DropdownHoverEvent extends React.MouseEvent<HTMLDivElement> {
    currentTarget: HTMLDivElement & {
      querySelector: (selectors: string) => HTMLElement | null;
    };
  }

  interface DropdownHoverHandler {
    (e: DropdownHoverEvent, entering: boolean): void;
  }

  const handleDropdownHover: DropdownHoverHandler = (e, entering) => {
    const dropdown = e.currentTarget.querySelector(".dropdown-menu");
    const arrow = e.currentTarget.querySelector(".dropdown-arrow");

    if (dropdown && arrow) {
      if (entering) {
        gsap.to(dropdown, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(arrow, {
          rotation: 180,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(dropdown, {
          opacity: 0,
          y: -10,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(arrow, {
          rotation: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div ref={logoRef} className="flex-shrink-0">
            <Link
              href="/"
              className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 truncate max-w-[160px] sm:max-w-[200px] md:max-w-none"
            >
              The Contntr Growth Collective
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div ref={linksRef} className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={(e) => handleDropdownHover(e, true)}
                onMouseLeave={(e) => handleDropdownHover(e, false)}
              >
                <Link
                  href={item.href}
                  className="flex items-center text-sm font-medium text-gray-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  {item.label}
                  {item.subItems && (
                    <ChevronDown className="dropdown-arrow ml-1 w-4 h-4" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.subItems && (
                  <div className="dropdown-menu absolute left-0 top-full mt-2 w-48 opacity-0 translate-y-[-10px] z-50">
                    <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-xl py-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-cyan-300 hover:bg-gray-800/50 transition-colors duration-150"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-cyan-300 ml-2"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[280px] sm:w-[350px] bg-gray-900 border-l border-gray-800 overflow-y-auto"
              >
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <div key={item.label}>
                      <Link
                        href={item.href}
                        className="text-lg font-medium text-gray-400 hover:text-cyan-300 transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                      {item.subItems && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="block text-sm text-gray-500 hover:text-cyan-300 transition-colors duration-150"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <Button
                    className="mt-4 w-full bg-cyan-500 hover:bg-cyan-400 text-black font-medium transition-colors duration-200"
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
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop CTA Button */}
          <div ref={ctaRef} className="hidden md:block">
            <Button
              className="px-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-medium rounded-lg transition-colors duration-200"
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