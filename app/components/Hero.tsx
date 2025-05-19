import Image from "next/image";
import bg from "../../public/hero-bg.jpg";
import { ArrowDown, Truck } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-r from-[#222222] to-[#1A1A1A] overflow-hidden">
      <div className="container-custom relative z-10 py-20 mt-0 md:mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-white space-y-6">
            <div className="inline-block bg-accent px-4 py-1 rounded-full">
              <span className="flex items-center gap-2 font-medium">
                <Truck size={16} /> Professional Removal Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              The UK&apos;s No.1 Removal Company 🇬🇧
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              From house removals to student moves, we have got you covered with
              a smile &#128512;
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                className="bg-accent hover:opacity-90 text-lg py-2 px-4 rounded-lg shadow-2xl"
                href="#services"
              >
                Get a Free Quote
              </Link>
              <Link
                className="border border-white hover:opacity-90 text-lg py-2 px-4 rounded-lg shadow-2xl"
                href="#services"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
