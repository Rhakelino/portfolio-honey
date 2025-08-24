import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SKILLS = [
  { 
    name: 'Adobe Illustrator', 
    level: 100,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8">
        <rect width="32" height="32" rx="7" fill="#320000"/>
        <text x="8" y="24" fontFamily="Arial" fontWeight="bold" fontSize="16" fill="#FF9900">Ai</text>
      </svg>
    )
  },
  { 
    name: 'Canva', 
    level: 95,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8">
        <circle cx="16" cy="16" r="16" fill="#19B6F3"/>
        <text x="7" y="23" fontFamily="Arial" fontWeight="bold" fontSize="15" fill="#fff">Ca</text>
      </svg>
    )
  },
  { 
    name: 'Adobe Premiere Pro', 
    level: 85,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8">
        <rect width="32" height="32" rx="7" fill="#4D2067"/>
        <text x="7" y="24" fontFamily="Arial" fontWeight="bold" fontSize="15" fill="#A087FF">Pr</text>
      </svg>
    )
  },
  { 
    name: 'Graphic Design', 
    level: 90,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8">
        <rect width="32" height="32" rx="7" fill="#2D3748"/>
        <circle cx="16" cy="16" r="8" fill="#4299E1"/>
        <rect x="13" y="13" width="6" height="6" rx="1.5" fill="#fff"/>
      </svg>
    )
  },
  { 
    name: 'UI/UX Design', 
    level: 80,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8">
        <rect width="32" height="32" rx="7" fill="#F472B6"/>
        <circle cx="16" cy="16" r="9" fill="#fff" />
        <rect x="10" y="10" width="12" height="12" rx="6" fill="#F472B6"/>
      </svg>
    )
  }
];

const SkillsSection = ({ refs }) => {
  // Refs untuk tiap skill card & progress bar
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const barRefs = useRef([]);

  useEffect(() => {
    if (cardRefs.current && barRefs.current && containerRef.current) {
      gsap.set(cardRefs.current, { opacity: 0, y: 40 });
      gsap.set(barRefs.current, { width: '0%' });

      ScrollTrigger.batch(cardRefs.current, {
        trigger: containerRef.current,
        start: "top 80%",
        onEnter: batch => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.18,
            ease: "power3.out",
          });
          batch.forEach((_, i) => {
            gsap.to(barRefs.current[i], {
              width: `${SKILLS[i].level}%`,
              duration: 1,
              delay: 0.2 + i * 0.18,
              ease: "power3.out",
            });
          });
        },
      });
    }
  }, []);

  return (
    <section
      ref={el => {
        containerRef.current = el;
        if (refs?.skillsRef) refs.skillsRef.current = el;
      }}
      className="max-w-5xl mx-auto px-4 py-16"
    >
      <h2 className="text-4xl font-bold text-center mb-14 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
        Professional Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {SKILLS.map((skill, i) => (
          <div
            key={skill.name}
            ref={el => cardRefs.current[i] = el}
            className="bg-[#232526] p-7 rounded-2xl border border-gray-800 
              shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 
              flex flex-col justify-between group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#2c3033] p-3 rounded-full">{skill.icon}</div>
              <div className="text-xl font-semibold text-white">{skill.name}</div>
            </div>
            <div className="w-full h-4 bg-gray-700 rounded-full relative overflow-hidden">
              <div
                ref={el => barRefs.current[i] = el}
                className="absolute left-0 top-0 h-4 bg-gradient-to-r from-blue-500 to-green-400 rounded-full transition-all"
                style={{ width: '0%' }}
              >
                <span className="absolute -top-7 right-0 text-xs text-gray-300 font-semibold drop-shadow">
                  {skill.level}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-14 text-center text-gray-400 max-w-2xl mx-auto text-lg">
        My diverse skill set allows me to create comprehensive design solutions that blend creativity, technical expertise, and user-centric thinking.
      </p>
    </section>
  );
};

export default SkillsSection;
