import React, { useEffect, useRef, useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionProps {
  title: string;
  id: string;
  icon?: LucideIcon;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, id, icon: Icon, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Observador para animar la sección cuando entra en el viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.1, 
        rootMargin: "0px 0px -100px 0px" 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`scroll-mt-24 mb-12 transition-all duration-1000 ease-in-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 blur-none' 
          : 'opacity-0 translate-y-12 blur-sm'
      }`}
    >
      <div className="flex items-center space-x-3 mb-6 border-b border-console-dim pb-2">
        {Icon && <Icon className="w-6 h-6 text-console-accent" />}
        <h2 className="text-xl md:text-2xl font-bold text-console-green tracking-tight">
          <span className="text-console-accent mr-2">$</span>
          ./{title}
        </h2>
      </div>
      {children}
    </section>
  );
};

export default Section;