import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AboutSection = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const statsRef = useRef(null)
  const imageRef = useRef(null)
  const cardRef = useRef(null);

  // Card 3D effect
  useEffect(() => {
    const card = cardRef.current

    const handleMouseMove = (e) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;
      const angleX = (cardCenterY - e.clientY) / 20;
      const angleY = (e.clientX - cardCenterX) / 20;

      card.style.transform = `
        perspective(1000px) 
        rotateX(${-angleX}deg) 
        rotateY(${angleY}deg) 
        translateZ(50px)
      `;
    };

    const handleMouseLeave = () => {
      card.style.transform = `
        perspective(1000px) 
        rotateX(0deg) 
        rotateY(0deg) 
        translateZ(0)
      `;
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // GSAP animation for entry (including card)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      tl.fromTo(
        statsRef.current.children,
        { scale: 0.7, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'back.out(1.7)' },
        '-=0.5'
      );

      // Entry animation untuk card (gambar)
      tl.fromTo(
        cardRef.current,
        { scale: 0.6, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 1, ease: 'elastic.out(1, 0.6)' },
        '-=0.5'
      );

      return () => {
        tl.kill()
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="container mx-auto px-4 py-16"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div ref={textRef}>
            <h2 className="text-4xl font-bold mb-6 
              bg-clip-text text-transparent 
              bg-gradient-to-r from-white to-gray-400">
              About Me
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a versatile designer passionate about creating engaging visual experiences.
              With expertise in Adobe Illustrator, Canva, and Adobe Premiere Pro, I craft compelling
              designs that tell stories and connect with audiences.
            </p>
            {/* Professional Details */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4">
              <div className="bg-[#232526] p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-400">3+</h3>
                <p className="text-gray-400 text-sm">Years of Experience</p>
              </div>
              <div className="bg-[#232526] p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-400">20+</h3>
                <p className="text-gray-400 text-sm">Completed Projects</p>
              </div>
            </div>
          </div>
          {/* Image or Graphic */}
         <div className="flex justify-center items-center">
  <div
    ref={cardRef}
    className="w-64 h-64 bg-[#232526] rounded-2xl 
      flex justify-center items-center 
      transition-transform duration-300 
      transform-style-3d 
      will-change-transform 
      cursor-pointer"
    style={{
      transition: 'transform 0.1s ease-out',
      boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
    }}
  >
    <img
      src="images/profile1.png"    // Ganti dengan path/URL foto kamu!
      alt="Foto Profil"
      className="w-full h-full object-cover rounded-2xl"  // FULL CARD STYLING
    />
  </div>
</div>


        </div>
      </div>
    </section>
  )
}

export default AboutSection
