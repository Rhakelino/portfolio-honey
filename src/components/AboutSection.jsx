import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lanyard from './Lanyard'

gsap.registerPlugin(ScrollTrigger)

const AboutSection = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const statsRef = useRef(null)
  const lanyardWrapperRef = useRef(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
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
      return () => {
        tl.kill()
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div ref={textRef} className="space-y-6">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              About Me
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a versatile designer passionate about creating engaging visual experiences.
              With expertise in Adobe Illustrator, Canva, and Adobe Premiere Pro, I craft compelling
              designs that tell stories and connect with audiences.
            </p>
            <div ref={statsRef} className="grid grid-cols-2 gap-6">
              <div className="bg-[#232526] p-6 rounded-lg text-center">
                <h3 className="text-2xl font-semibold text-blue-400">3+</h3>
                <p className="text-gray-400">Years of Experience</p>
              </div>
              <div className="bg-[#232526] p-6 rounded-lg text-center">
                <h3 className="text-2xl font-semibold text-green-400">20+</h3>
                <p className="text-gray-400">Completed Projects</p>
              </div>
            </div>
          </div>

          {/* Lanyard 3D Graphic */}
          <div
            className="flex justify-center items-center w-full overflow-hidden h-96 mx-auto"
          >
          <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
