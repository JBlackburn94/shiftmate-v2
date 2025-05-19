"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { id: 1, name: "About us", url: "#about" },
    { id: 2, name: "Services", url: "#services" },
    { id: 3, name: "Insurance", url: "#insurance" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full shadow-2xl backdrop-blur-md py-4 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="#">
              <Image
                src="/logo.png"
                alt="ShiftMate Logo"
                height={40}
                width={120}
              />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="text-gray-300 hover:text-accent transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
              aria-label="Toggle menu"
              className="text-accent"
            >
              {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-max-height duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col space-y-4 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="py-2 border-b text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
