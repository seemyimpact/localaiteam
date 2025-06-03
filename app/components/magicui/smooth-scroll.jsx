'use client';

import { useEffect } from 'react';

export function SmoothScroll() {
  useEffect(() => {
    // Function to handle smooth scrolling
    const handleAnchorClick = (e) => {
      const targetElement = e.target.closest('a[href^="#"]');
      
      if (!targetElement) return;
      
      const targetId = targetElement.getAttribute('href');
      if (!targetId || targetId === '#') return;
      
      e.preventDefault();
      
      const targetSection = document.querySelector(targetId);
      if (!targetSection) return;
      
      const headerOffset = 80; // Adjust based on your header height
      const elementPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    };
    
    // Add scroll animation to section transitions
    const addScrollAnimations = () => {
      const sections = document.querySelectorAll('section');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      }, { threshold: 0.15 });
      
      sections.forEach(section => {
        observer.observe(section);
        // Set initial state (invisible)
        section.classList.add('section-animated');
      });
    };
    
    // Listen for clicks on the document
    document.addEventListener('click', handleAnchorClick);
    
    // Add scroll animations
    addScrollAnimations();
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return null;
}
