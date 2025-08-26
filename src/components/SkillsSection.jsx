import React from 'react';
import { FaFigma } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobexd, SiSketch } from 'react-icons/si';
import ImageTrail from './ImageTrail';

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
        <h2 className="text-4xl font-bold text-center mb-12 text-white cursor-target">
          My Design Skills
        </h2>

        <div className="grid grid-cols-1 mx-10 md:mx-0 md:grid-cols-3 gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="cursor-target flex flex-col items-center justify-center p-6 bg-[#252525] rounded-xl shadow-lg hover:bg-[#2C2C2C] transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-[#333]"
            >
              <div className="mb-4 cursor-target">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 cursor-target">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-400 cursor-target">
                {skill.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    <div 
  className="hidden md:block max-w-4xl mx-auto flex flex-col items-center justify-center bg-[#252525] border border-[#333] p-6 shadow-lg hover:bg-[#2C2C2C] transition-all duration-300 ease-in-out transform hover:-translate-y-2"
  style={{ 
    height: '500px', 
    position: 'relative', 
    overflow: 'hidden', 
    borderRadius: '12px', 
    marginTop: '50px', 
    cursor: 'pointer' 
  }}
>
  <ImageTrail
    items={[
      'https://picsum.photos/id/287/300/300',
      'https://picsum.photos/id/1001/300/300',
      'https://picsum.photos/id/1025/300/300',
      'https://picsum.photos/id/1026/300/300',
      'https://picsum.photos/id/1027/300/300',
      'https://picsum.photos/id/1028/300/300',
      'https://picsum.photos/id/1029/300/300',
      'https://picsum.photos/id/1030/300/300',
    ]}
    variant={2}
  />
  <h2 className="text-[120px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] to-[#4a4a4a] dark:from-[#4a4a4a] dark:to-[#1a1a1a] tracking-tighter">
    Hover Me.
  </h2>
  <p className="text-lg text-gray-500 mt-2">Variant 8</p>
</div>
    </section>
  );
};

export default SkillsSection;