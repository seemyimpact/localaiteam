'use client';

import { AnimatedBeam } from '@/app/components/magicui/animated-beam';

export default function Services() {
  // Example directly from HeroUI documentation for consistency
  // Array of services that your Local AI Team offers
  const services = [
    {
      title: "AI Workflow Automation",
      description: "Streamline repetitive tasks and workflows with custom AI solutions that adapt to your business processes.",
      icon: "automation",
      features: ["Process Automation", "Document Processing", "Task Scheduling"]
    },
    {
      title: "Conversational AI",
      description: "Implement intelligent chatbots and virtual assistants that provide 24/7 customer support and service.",
      icon: "chat",
      features: ["Custom Chatbots", "Voice Assistants", "Multilingual Support"]
    },
    {
      title: "Data Analysis & Insights",
      description: "Extract actionable insights from your data with AI-powered analytics and visualization tools.",
      icon: "data",
      features: ["Predictive Analytics", "Trend Analysis", "Custom Reporting"]
    },
    {
      title: "AI Integration Services",
      description: "Seamlessly integrate AI capabilities with your existing software stack and business applications.",
      icon: "integration",
      features: ["API Development", "Legacy System Integration", "Cloud Solutions"]
    }
  ];

  // Icons mapping for services
  const getServiceIcon = (iconType) => {
    // Common SVG Tailwind classes
    const svgClass = "w-6 h-6 stroke-current stroke-[1.5px]";
    
    switch(iconType) {
      case "automation":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={svgClass} viewBox="0 0 24 24" fill="none">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v4.5m-4.5 0v-4.5M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
          </svg>
        );
      case "chat":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={svgClass} viewBox="0 0 24 24" fill="none">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
        );
      case "data":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={svgClass} viewBox="0 0 24 24" fill="none">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
          </svg>
        );
      case "integration":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={svgClass} viewBox="0 0 24 24" fill="none">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="services" className="bg-white relative overflow-hidden py-16 md:py-20">

      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">Our Services</h2>
          <p className="text-neutral-700 max-w-2xl mx-auto">
            We offer a range of AI solutions designed to enhance your business operations and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-sm mx-auto h-full flex flex-col relative">
              {/* Animated Beam Effect */}
              <AnimatedBeam 
                position={index % 2 === 0 ? 'left' : 'right'}
                size="small"
                duration={4 + index * 0.5}
                delay={index * 0.8}
                opacityRange={[0.1, 0.3]}
              />
              
              {/* Card Header with Icon */}
              <div className="p-4 bg-gray-50 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-sky-100 text-[#71b1d1]">
                  {getServiceIcon(service.icon)}
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-5 flex-grow flex flex-col">
                {/* Title and Badge */}
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium text-gray-900">{service.title}</h3>
                  <span className="px-2.5 py-0.5 text-xs font-medium bg-[#71b1d1] text-white rounded-full">
                    AI Service
                  </span>
                </div>
                
                {/* Description */}
                <p className="mb-3 text-gray-600 text-sm">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="mt-auto">
                  <p className="text-sm font-medium text-gray-700 mb-1">Key Features:</p>
                  <ul className="space-y-1 mb-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-xs text-gray-600">
                        <span className="mr-1.5 text-[#71b1d1]">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Button */}
                <button 
                  className="w-full mt-4 px-4 py-2 bg-[#71b1d1] text-white text-sm font-medium rounded-md hover:bg-[#5b9cb9] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#71b1d1] focus:ring-opacity-50"
                  onClick={() => console.log(`Learn more about ${service.title}`)}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
