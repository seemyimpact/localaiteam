'use client';

import { FaMapMarkerAlt } from 'react-icons/fa';
import { BiMoney } from 'react-icons/bi';
import { BsLightningChargeFill } from 'react-icons/bs';
import { HiUserGroup } from 'react-icons/hi';
import { AnimatedBeam } from '@/app/components/magicui/animated-beam';
import { WarpBackground } from '@/app/components/magicui/warp-background';

export default function ValueProposition() {
  return (
    <section className="bg-white relative overflow-hidden py-16 md:py-20">
      {/* Modern animated background */}
      <WarpBackground 
        colors={['#71b1d1', '#95c9e1', '#b9e1f1']} 
        animate={true} 
        animationSpeed={0.003}
      />
      

      
      <div className="container mx-auto max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">AI That Works For Small Businesses</h2>
            <p className="text-neutral-700 mb-4">
              Local AI Team brings advanced artificial intelligence solutions to small and medium businesses across the region. Our technology is specifically designed to address local needs.
            </p>
            <p className="text-neutral-700 mb-8">
              We believe that AI technology shouldn't be exclusive to big corporations.
              Our mission is to level the playing field with accessible, affordable AI tools
              that solve real problems for local businesses.
            </p>
            
            <div className="flex items-center mb-4">
              <div className="text-5xl font-bold text-[#71b1d1]">100%</div>
              <div className="ml-4">
                <h4 className="font-medium text-neutral-900">Local Focus</h4>
                <p className="text-sm text-neutral-600">Serving local businesses with custom AI solutions</p>
              </div>
            </div>
          </div>
          
          {/* Right Side - Benefit Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Box 1 */}
            <div className="bg-[#71b1d1] bg-opacity-10 p-6 rounded-lg hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
              <AnimatedBeam 
                position="left"
                size="small"
                duration={4}
                delay={0}
                opacityRange={[0.1, 0.3]}
              />
              <div className="relative z-10 flex items-center justify-center mb-4 bg-white bg-opacity-50 w-16 h-16 rounded-full shadow-sm">
                <FaMapMarkerAlt className="h-8 w-8 text-[#71b1d1]" />
              </div>
              <h3 className="font-medium text-lg mb-2 relative z-10">Local Focus</h3>
              <p className="text-sm text-neutral-700 relative z-10">
                Deep understanding of local business needs and challenges unique to your region.
              </p>
            </div>
            
            {/* Box 2 */}
            <div className="bg-[#71b1d1] bg-opacity-10 p-6 rounded-lg hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
              <AnimatedBeam 
                position="right"
                size="small"
                duration={4.5}
                delay={0.4}
                opacityRange={[0.1, 0.3]}
              />
              <div className="relative z-10 flex items-center justify-center mb-4 bg-white bg-opacity-50 w-16 h-16 rounded-full shadow-sm">
                <BiMoney className="h-8 w-8 text-[#71b1d1]" />
              </div>
              <h3 className="font-medium text-lg mb-2 relative z-10">Affordable Solutions</h3>
              <p className="text-sm text-neutral-700 relative z-10">
                AI technology tailored to small business budgets with clear ROI and practical applications.
              </p>
            </div>
            
            {/* Box 3 */}
            <div className="bg-[#71b1d1] bg-opacity-10 p-6 rounded-lg hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
              <AnimatedBeam 
                position="left"
                size="small"
                duration={4.2}
                delay={0.8}
                opacityRange={[0.1, 0.3]}
              />
              <div className="relative z-10 flex items-center justify-center mb-4 bg-white bg-opacity-50 w-16 h-16 rounded-full shadow-sm">
                <BsLightningChargeFill className="h-8 w-8 text-[#71b1d1]" />
              </div>
              <h3 className="font-medium text-lg mb-2 relative z-10">AI Expertise</h3>
              <p className="text-sm text-neutral-700 relative z-10">
                Specialized team delivering custom AI tools that solve real business problems.
              </p>
            </div>
            
            {/* Box 4 */}
            <div className="bg-[#71b1d1] bg-opacity-10 p-6 rounded-lg hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
              <AnimatedBeam 
                position="right"
                size="small"
                duration={4.8}
                delay={1.2}
                opacityRange={[0.1, 0.3]}
              />
              <div className="relative z-10 flex items-center justify-center mb-4 bg-white bg-opacity-50 w-16 h-16 rounded-full shadow-sm">
                <HiUserGroup className="h-8 w-8 text-[#71b1d1]" />
              </div>
              <h3 className="font-medium text-lg mb-2 relative z-10">Personalized Support</h3>
              <p className="text-sm text-neutral-700 relative z-10">
                Hands-on training and ongoing assistance to ensure your AI investment succeeds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
