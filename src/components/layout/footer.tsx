import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-cyan-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">SEO Expert</h3>
            <p className="text-sm text-white/80">
              Transform your digital presence with our cutting-edge SEO
              solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { text: "About Us", href: "/about" },
                { text: "Services", href: "/services" },
                { text: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm text-white/80">123 SEO Street</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm text-white/80">
                  contact@seoexpert.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/20 text-center text-sm text-white/80">
          © 2025 SEO Expert. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
