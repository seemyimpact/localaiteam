'use client';

import Link from 'next/link';

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-white relative overflow-hidden py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">Our Success Stories</h2>
          <p className="text-neutral-700 max-w-2xl mx-auto">
            Explore how we've helped businesses transform their operations and achieve remarkable results with custom AI solutions.
          </p>
        </div>

        {/* Real case study embeds stacked vertically */}
        <div className="flex flex-col space-y-12 max-w-5xl mx-auto mb-12">
          <div className="w-full aspect-video">
            <iframe
              src="https://gamma.app/embed/bvcpste0yeqa0qx"
              style={{ width: '100%', height: '100%' }}
              allow="fullscreen"
              title="Clockwise Capital: AI-Powered Content Automation"
            />
          </div>
          <div className="w-full aspect-video">
            <iframe
              src="https://gamma.app/embed/0dyu4xsxbanakps"
              style={{ width: '100%', height: '100%' }}
              allow="fullscreen"
              title="Anew Media Group: AI-Powered SEO Content Generation"
            />
          </div>
          <div className="w-full aspect-video">
            <iframe
              src="https://gamma.app/embed/vowvq0kdiuu8612"
              style={{ width: '100%', height: '100%' }}
              allow="fullscreen"
              title="Digital Transformation for Independent Journalism"
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/case-studies" passHref>
            <button className="inline-flex items-center px-6 py-3 border-2 border-[#71b1d1] text-[#71b1d1] font-medium rounded-lg hover:bg-[#71b1d1] hover:text-white transition-colors">
              More Case Studies
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}


