import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lanyard from './Lanyard'
import ProfilePhoto from '/images/profile.jpg'

gsap.registerPlugin(ScrollTrigger)

const AboutSection = () => {
  // State untuk mendeteksi mobile
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const statsRef = useRef(null)
  const cardRef = useRef(null);
  const lanyardWrapperRef = useRef(null)

  // Efek untuk mendeteksi layar mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Cek saat pertama kali render
    checkMobile();

    // Tambahkan event listener untuk resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && sectionRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })

      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )

      tl.fromTo(
        statsRef.current.children,
        { scale: 0.7, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'back.out(1.7)' },
        '-=0.5'
      )

      // Pastikan animasi card hanya berjalan di mobile
      if (isMobile && cardRef.current) {
        tl.fromTo(
          cardRef.current,
          { 
            scale: 0.6, 
            opacity: 0, 
            y: 50 
          },
          { 
            scale: 1, 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: 'elastic.out(1, 0.6)' 
          },
          '-=0.5'
        );
      }

      return () => {
        tl.kill()
      }
    }
  }, [isMobile])

  return (
    <section 
      ref={sectionRef} 
      className="container mx-auto px-4 py-16"
    >
      <div className="max-w-4xl mx-auto">
        <div 
          className={`
            flex flex-col-reverse 
            ${isMobile 
              ? 'items-center text-center' 
              : 'md:grid md:grid-cols-2 gap-8 md:gap-16 items-center'
            }
          `}
        >
          {/* Lanyard atau Foto 3D Graphic - Pindahkan di atas di mobile */}
          <div
            className={`
              flex justify-center items-center w-full 
              ${isMobile 
                ? 'order-1 mb-8 w-3/4' 
                : 'order-2 h-96 overflow-hidden'
              }
              mx-auto
            `}
          >
            {isMobile ? (
              <div className="flex justify-center items-center pt-10">
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
                 
                </div>
              </div>
            ) : (
              <Lanyard 
                position={[0, 0, 15]} 
                gravity={[0, -40, 0]} 
              />
            )}
          </div>

          {/* Text Content */}
          <div 
            ref={textRef} 
            className={`
              space-y-6 
              ${isMobile 
                ? 'order-2 px-4' 
                : 'order-1'
              }
            `}
          >
            <h2 
              className={`
                font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400
                ${isMobile 
                  ? 'text-3xl' 
                  : 'text-4xl'
                }
              `}
            >
              About Me
            </h2>
            <p 
              className={`
                text-gray-300 leading-relaxed
                ${isMobile 
                  ? 'text-base' 
                  : 'text-lg'
                }
              `}
            >
              I'm a versatile designer passionate about creating engaging visual experiences.
              With expertise in Adobe Illustrator, Canva, and Adobe Premiere Pro, I craft compelling
              designs that tell stories and connect with audiences.
            </p>
            <div 
              ref={statsRef} 
              className={`
                grid gap-4
                ${isMobile 
                  ? 'grid-cols-1 w-full' 
                  : 'grid-cols-2 gap-6'
                }
              `}
            >
              <div 
                className="bg-[#232526] p-4 md:p-6 rounded-lg text-center"
              >
                <h3 
                  className={`
                    font-semibold text-blue-400
                    ${isMobile 
                      ? 'text-xl' 
                      : 'text-2xl'
                    }
                  `}
                >
                  3+
                </h3>
                <p 
                  className={`
                    text-gray-400
                    ${isMobile 
                      ? 'text-sm' 
                      : ''
                    }
                  `}
                >
                  Years of Experience
                </p>
              </div>
              <div 
                className="bg-[#232526] p-4 md:p-6 rounded-lg text-center"
              >
                <h3 
                  className={`
                    font-semibold text-green-400
                    ${isMobile 
                      ? 'text-xl' 
                      : 'text-2xl'
                    }
                  `}
                >
                  20+
                </h3>
                <p 
                  className={`
                    text-gray-400
                    ${isMobile 
                      ? 'text-sm' 
                      : ''
                    }
                  `}
                >
                  Completed Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection