'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatedBeam } from '@/app/components/magicui/animated-beam';

const caseStudies = [
  {
    id: 1,
    title: 'AI-Powered Inventory Management',
    category: 'Retail',
    description: 'Developed a custom AI solution that reduced inventory costs by 23% and improved stock accuracy to 99.8%.',
    image: '/images/case-study-1.jpg',
    url: '/case-studies/inventory-management',
    stats: [
      { label: 'Cost Reduction', value: '23%' },
      { label: 'Accuracy', value: '99.8%' },
      { label: 'Implementation Time', value: '6 weeks' }
    ]
  },
  {
    id: 2,
    title: 'Conversational Customer Service Bot',
    category: 'Customer Service',
    description: 'Created an AI chatbot that handles 78% of customer inquiries, resulting in 45% faster response times.',
    image: '/images/case-study-2.jpg',
    url: '/case-studies/customer-service-bot',
    stats: [
      { label: 'Inquiry Resolution', value: '78%' },
      { label: 'Response Time', value: '45% faster' },
      { label: 'Customer Satisfaction', value: '92%' }
    ]
  },
  {
    id: 3,
    title: 'Predictive Maintenance System',
    category: 'Manufacturing',
    description: 'Implemented an AI system that predicts equipment failures 2 weeks in advance, reducing downtime by 35%.',
    image: '/images/case-study-3.jpg',
    url: '/case-studies/predictive-maintenance',
    stats: [
      { label: 'Prediction Window', value: '2 weeks' },
      { label: 'Downtime Reduction', value: '35%' },
      { label: 'ROI', value: '382%' }
    ]
  }
];

export default function CaseStudies() {
  const [hoveredId, setHoveredId] = useState(null);
  
  return (
    <section id="case-studies" className="bg-white relative overflow-hidden py-16 md:py-20">

      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">Our Success Stories</h2>
          <p className="text-neutral-700 max-w-2xl mx-auto">
            Explore how we've helped businesses transform their operations and achieve remarkable results with custom AI solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl relative group border border-neutral-100"
              onMouseEnter={() => setHoveredId(study.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Animated beam effect */}
              <AnimatedBeam
                position={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'center' : 'right'}
                delay={index * 0.5}
                duration={3 + index * 0.5}
                opacityRange={[0.1, 0.3]}
              />
              
              <div className="h-48 bg-neutral-200 relative overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://via.placeholder.com/600x400?text=${encodeURIComponent(study.title)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-[#71b1d1]/90 text-white">
                    {study.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-neutral-800">{study.title}</h3>
                <p className="text-neutral-600 mb-4">{study.description}</p>
                
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {study.stats.map((stat, i) => (
                    <div key={i} className="text-center p-2 bg-neutral-50 rounded-lg">
                      <p className="text-sm font-medium text-neutral-500">{stat.label}</p>
                      <p className="text-lg font-bold text-[#71b1d1]">{stat.value}</p>
                    </div>
                  ))}
                </div>
                
                <Link href={study.url} passHref>
                  <button className="w-full bg-white border border-[#71b1d1] text-[#71b1d1] py-2 rounded-lg transition-colors hover:bg-[#71b1d1] hover:text-white flex items-center justify-center group">
                    <span>View Case Study</span>
                    <svg 
                      className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/case-studies" passHref>
            <button className="inline-flex items-center px-6 py-3 border-2 border-[#71b1d1] text-[#71b1d1] font-medium rounded-lg hover:bg-[#71b1d1] hover:text-white transition-colors">
              View All Case Studies
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
