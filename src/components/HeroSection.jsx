import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import Wave from 'react-wavify'

// Registrasi TextPlugin
gsap.registerPlugin(TextPlugin)

const HeroSection = () => {
  // Referensi untuk elemen-elemen animasi
  const subtitleRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonRef = useRef(null)
  const backgroundRef = useRef(null)

  useEffect(() => {
    // Timeline animasi utama
    const tl = gsap.timeline({ 
      defaults: { 
        ease: 'power3.out' 
      } 
    })

    // Animasi background dengan parallax effect
    gsap.to(backgroundRef.current, {
      backgroundPosition: '50% 50%',
      ease: 'none',
      scrollTrigger: {
        trigger: backgroundRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    })

    // Animasi subtitle dengan typing effect
    tl.fromTo(subtitleRef.current, 
      { 
        opacity: 0, 
        y: 50,
        text: '' 
      },
      { 
        opacity: 1, 
        y: 0,
        text: 'VISUAL DESIGN & CREATIVE DIRECTION',
        duration: 1.5
      }
    )

    // Animasi judul dengan fade in dan slide up
    tl.fromTo(titleRef.current, 
      { 
        opacity: 0, 
        y: 50,
        scale: 0.95
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power2.out'
      },
      '-=0.5'
    )

    // Animasi deskripsi
    tl.fromTo(descriptionRef.current, 
      { 
        opacity: 0, 
        y: 70 
      },
      { 
        opacity: 1, 
        y: 0,
        duration: 1
      },
      '-=0.7'
    )

    // Animasi tombol dengan efek bounce
    tl.fromTo(buttonRef.current, 
      { 
        opacity: 0, 
        scale: 0.7 
      },
      { 
        opacity: 1, 
        scale: 1,
        duration: 1,
        ease: 'back.out(1.7)'
      },
      '-=0.5'
    )

    // Cleanup
    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div 
      ref={backgroundRef}
      className="relative bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-700 
      min-h-screen flex flex-col justify-center items-center 
      bg-cover bg-center overflow-hidden" // Tambahkan overflow-hidden
      style={{ 
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7))',
        backgroundBlendMode: 'overlay',
        // Hapus bg-fixed untuk mobile
        backgroundAttachment: 'scroll' 
      }}
    >
      <div className="container mx-auto px-4 relative z-10 text-center w-full">
        <p 
          ref={subtitleRef} 
          className="text-gray-300 mb-4 tracking-wider uppercase text-sm font-medium"
        >
          {/* Text akan diisi oleh GSAP */}
        </p>

        <h1 
          ref={titleRef} 
          className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
        >
          Afrila Nurhanifa
        </h1>
        
        <p 
          ref={descriptionRef}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto my-6"
        >
          Crafting innovative visual experiences that tell compelling stories and push creative boundaries.
        </p>

        <div className="flex justify-center">
          <button
            ref={buttonRef}
            className="bg-blue-600 hover:bg-blue-700 
            text-white font-semibold 
            px-8 md:px-10 py-3 md:py-4 
            rounded-full 
            transition-all duration-300 
            ease-in-out 
            hover:scale-105 
            shadow-lg hover:shadow-xl
            flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 2h6v4H7V6zm8 0h2v4h-2V6zm-8 6h6v4H7v-4zm8 0h2v4h-2v-4z" clipRule="evenodd" />
            </svg>
            View CV
          </button>
        </div>
      </div>

      {/* Wave Divider */}
      <Wave 
        fill='#141617'
        paused={false}
        options={{
          height: 70,
          amplitude: 35,
          speed: 0.3,
          points: 3
        }}
        style={{ 
          position: 'absolute', 
          bottom: 0, 
          width: '100%', 
          zIndex: 10 
        }}
      />
    </div>
  )
}

export default HeroSection