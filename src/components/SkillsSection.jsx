import React from 'react';
import { FaFigma } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobexd, SiSketch } from 'react-icons/si';

const SkillsSection = () => {
  const skills = [
    { 
      name: 'Figma', 
      icon: <FaFigma className="text-[#F24E1E] w-12 h-12" />,
      level: 'Expert'
    },
    { 
      name: 'Adobe XD', 
      icon: <SiAdobexd className="text-[#FF61F6] w-12 h-12" />,
      level: 'Advanced'
    },
    { 
      name: 'Photoshop', 
      icon: <SiAdobephotoshop className="text-[#31A8FF] w-12 h-12" />,
      level: 'Advanced'
    },
    { 
      name: 'Illustrator', 
      icon: <SiAdobeillustrator className="text-[#FF9A00] w-12 h-12" />,
      level: 'Advanced'
    },
    { 
      name: 'Sketch', 
      icon: <SiSketch className="text-white w-12 h-12" />,
      level: 'Intermediate'
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          My Design Skills
        </h2>
        
        <div className="grid grid-cols-1 mx-10 md:mx-0 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-6 bg-[#252525] rounded-xl shadow-lg hover:bg-[#2C2C2C] transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-[#333]"
            >
              <div className="mb-4">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-400">
                {skill.level}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-300 max-w-2xl mx-auto">
            Sebagai seorang UI/UX Designer, saya memiliki keahlian dalam merancang antarmuka yang intuitif, fungsional, dan estetis menggunakan berbagai alat desain terkemuka.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;