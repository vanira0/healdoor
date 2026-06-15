"use client";

import { PhoneCall } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-heading font-bold text-2xl text-primary">HealDoor</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#services" className="transition-colors hover:text-primary">Services</Link>
          <Link href="#testimonials" className="transition-colors hover:text-primary">Testimonials</Link>
          <Link href="#contact" className="transition-colors hover:text-primary">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="tel:+919871281574"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-2"
          >
            <PhoneCall className="h-4 w-4" />
            <span className="hidden sm:inline">Call Now</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
