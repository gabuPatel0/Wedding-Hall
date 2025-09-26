"use client"

import { Heart, Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"
export function Footer() {
  return (
    <footer className="bg-[#603808] text-[#ffedd8] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-8 h-8 text-[#bc8a5f]" />
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold">Elegant Wedding Hall</h3>
            </div>
            <p className="text-[#f3d5b5] leading-relaxed mb-6 max-w-md">
              Creating magical moments and unforgettable celebrations for over a decade. Your dream event starts here.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="p-2 bg-[#8b5e34] rounded-full hover:bg-[#bc8a5f] transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-[#8b5e34] rounded-full hover:bg-[#bc8a5f] transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-[#8b5e34] rounded-full hover:bg-[#bc8a5f] transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#f3d5b5] hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#f3d5b5] hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-[#f3d5b5] hover:text-white transition-colors duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-[#f3d5b5] hover:text-white transition-colors duration-300">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#f3d5b5] hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-[#f3d5b5]">
              <p>
                123 Celebration Avenue
                <br />
                Beautiful City, BC 12345
              </p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: events@elegantweddinghall.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#8b5e34] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#f3d5b5] text-sm">© 2025 Elegant Wedding Hall. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-[#f3d5b5] hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[#f3d5b5] hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
