'use client';

import { useState, useEffect } from 'react';
import { FaSearch, FaLightbulb, FaCode, FaRocket, FaHandshake } from 'react-icons/fa';
import { AnimatedBeam } from '@/app/components/magicui/animated-beam';

// Step data with detailed information
const steps = [
  {
    id: 1,
    title: "Business Audit",
    icon: <FaSearch className="h-8 w-8" />,
    description: "We begin with a comprehensive audit of your business operations, identifying workflows, data sources, and key performance indicators.",
    details: [
      "Analyze current business processes and workflows",
      "Identify manual tasks and operational bottlenecks",
      "Review existing technology infrastructure",
      "Gather stakeholder requirements and pain points"
    ]
  },
  {
    id: 2,
    title: "Problem Discovery",
    icon: <FaLightbulb className="h-8 w-8" />,
    description: "Our team works with you to uncover the specific pain points and opportunities where AI can deliver the most value for your business.",
    details: [
      "Define clear problem statements for each pain point",
      "Prioritize opportunities based on impact and feasibility",
      "Map data requirements for potential AI solutions",
      "Establish success metrics and ROI goals"
    ]
  },
  {
    id: 3,
    title: "Solution Development",
    icon: <FaCode className="h-8 w-8" />,
    description: "Using our AI expertise, we build custom solutions tailored to your specific needs, with regular feedback and iteration.",
    details: [
      "Design AI solution architecture and components",
      "Develop and train custom AI models",
      "Build intuitive user interfaces and integrations",
      "Conduct iterative testing with your team"
    ]
  },
  {
    id: 4,
    title: "Implementation",
    icon: <FaRocket className="h-8 w-8" />,
    description: "We deploy your AI solution, ensuring seamless integration with your existing systems and providing comprehensive training.",
    details: [
      "Deploy solution to production environment",
      "Integrate with existing business systems",
      "Migrate and validate data",
      "Conduct user acceptance testing"
    ]
  },
  {
    id: 5,
    title: "Handoff & Support",
    icon: <FaHandshake className="h-8 w-8" />,
    description: "After implementation, we provide ongoing support, maintenance, and optimization to ensure long-term success.",
    details: [
      "Provide comprehensive documentation",
      "Train your team on solution usage and management",
      "Offer ongoing technical support",
      "Schedule regular performance reviews and optimizations"
    ]
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isManualChange, setIsManualChange] = useState(false);
  
  // Auto-rotate through steps
  useEffect(() => {
    if (isManualChange) {
      const timer = setTimeout(() => {
        setIsManualChange(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
    
    const intervalId = setInterval(() => {
      if (!isManualChange) {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }
    }, 6000);
    
    return () => clearInterval(intervalId);
  }, [isManualChange]);
  
  const handleStepClick = (index) => {
    setActiveStep(index);
    setIsManualChange(true);
  };
  
  return (
    <section id="how-it-works" className="bg-white relative overflow-hidden py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">How It Works</h2>
          <p className="text-neutral-700 max-w-2xl mx-auto">
            Our proven process takes you from initial business audit to complete AI solution implementation and beyond.
          </p>
        </div>
        
        {/* Step indicators */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2 md:space-x-4">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => handleStepClick(index)}
                className={`flex flex-col items-center group ${index === activeStep ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
              >
                <div className={`relative w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center 
                  ${index === activeStep 
                    ? 'bg-[#71b1d1] text-white shadow-lg' 
                    : 'bg-neutral-100 text-neutral-600 border border-neutral-200'} 
                  transition-all duration-300`}
                >
                  {step.icon}
                  {index === activeStep && (
                    <div className="absolute inset-0 rounded-full bg-[#71b1d1]/20 animate-ping" />
                  )}
                </div>
                <span className={`text-xs md:text-sm mt-2 font-medium 
                  ${index === activeStep ? 'text-[#71b1d1]' : 'text-neutral-500'} 
                  transition-colors duration-300`}
                >
                  Step {step.id}
                </span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Connection line with progress */}
        <div className="hidden md:block relative max-w-4xl mx-auto h-1 bg-neutral-200 rounded-full mb-12">
          <div 
            className="absolute top-0 left-0 h-full bg-[#71b1d1] rounded-full transition-all duration-700 ease-in-out"
            style={{ width: `${(activeStep + 1) * 100 / steps.length}%` }}
          />
        </div>
        
        {/* Step Content */}
        <div className="max-w-4xl mx-auto relative overflow-hidden min-h-[24rem]">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out
                ${index === activeStep 
                  ? 'translate-x-0 opacity-100 z-10' 
                  : index < activeStep 
                    ? '-translate-x-full opacity-0 z-0' 
                    : 'translate-x-full opacity-0 z-0'
                }`}
            >
              <div className="bg-white rounded-xl shadow-lg p-8 border border-neutral-100 relative overflow-hidden">
                <AnimatedBeam 
                  position={index % 2 === 0 ? 'left' : 'right'}
                  duration={4}
                  delay={index * 0.5}
                  opacityRange={[0.1, 0.2]}
                />
                
                <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                  {/* Step number and title */}
                  <div className="md:w-1/3">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#71b1d1] text-white flex items-center justify-center mr-4">
                        {step.icon}
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-[#71b1d1] block">Step {step.id}</span>
                        <h3 className="text-xl font-bold text-neutral-800">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-neutral-700">{step.description}</p>
                  </div>
                  
                  {/* Step details */}
                  <div className="md:w-2/3 bg-neutral-50 p-6 rounded-lg">
                    <h4 className="font-medium text-neutral-800 mb-4">What happens in this step:</h4>
                    <ul className="space-y-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#71b1d1] mr-2 mt-1">•</span>
                          <span className="text-neutral-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation controls */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={() => {
              setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
              setIsManualChange(true);
            }}
            className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-50"
            aria-label="Previous step"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => {
              setActiveStep((prev) => (prev + 1) % steps.length);
              setIsManualChange(true);
            }}
            className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-50"
            aria-label="Next step"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
