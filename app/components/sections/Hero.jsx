'use client';

import { useState } from 'react';
import Image from "next/image";
import { ShimmerButton } from "@/app/components/magicui/shimmer-button";
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 min-h-screen flex flex-col justify-center">
      {/* Background image with stronger overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="relative w-full h-full">
          <Image 
            src="/images/hero/u9354481378_A_live_realistic_background_with_a_blue_sky_and_a_74d16b55-7c29-4e26-9303-ec269a9e4180_0.png"
            alt="Sky background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Stronger overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero content - centered */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 text-white">
              <span className="block">AI Systems</span>
              <span className="block text-[#9fdfff]">For Your Business</span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-12 max-w-3xl mx-auto">
              Local AI Team helps businesses implement cutting-edge AI solutions to streamline operations, 
              enhance customer experiences, and drive growth through intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" passHref>
                <ShimmerButton 
                  className="bg-[#71b1d1] hover:bg-[#5a9cb9] text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  shimmerColor="rgba(255, 255, 255, 0.4)"
                  shimmerSize="100%"
                  shimmerDuration={2}
                >
                  <span className="flex items-center">
                    Get Started
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </ShimmerButton>
              </Link>
              <Link href="/#case-studies" passHref>
                <ShimmerButton 
                  className="bg-transparent border border-neutral-300 dark:border-neutral-700 hover:border-[#71b1d1] dark:hover:border-[#71b1d1] text-neutral-800 dark:text-neutral-200 font-medium py-3 px-6 rounded-lg transition-colors"
                  shimmerColor="rgba(113, 177, 209, 0.3)"
                  shimmerSize="100%"
                  shimmerDuration={2.5}
                  shimmerDelay={0.8}
                >
                  View Case Studies
                </ShimmerButton>
              </Link>
            </div>
          </div>


        </div>

        {/* Stats section */}
        {/* <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/30">
            <div className="text-3xl font-bold text-[#9fdfff] mb-2">100%</div>
            <p className="text-white">Customer Satisfaction</p>
          </div>
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/30">
            <div className="text-3xl font-bold text-[#9fdfff] mb-2">50+</div>
            <p className="text-white">Completed Projects</p>
          </div>
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/30">
            <div className="text-3xl font-bold text-[#9fdfff] mb-2">30%</div>
            <p className="text-white">Avg. Efficiency Increase</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
