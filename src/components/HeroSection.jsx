import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import LightRays from './LightRays'

// Registrasi TextPlugin
gsap.registerPlugin(TextPlugin)

const HeroSection = () => {
  // Referensi untuk elemen-elemen animasi
  const subtitleRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonRef = useRef(null)
  const backgroundRef = useRef(null)


  const handleDownloadCV = () => {
    // Path ke file CV PDF di folder public atau lokasi asset
    const cvPath = './file/CV_AFRILA_NURHANIFA.pdf';

    // Membuat elemen anchor (link) sementara
    window.open(cvPath, '_blank');
  };

  useEffect(() => {
    // Timeline animasi utama
    const tl = gsap.timeline({
      defaults: {
        ease: 'power3.out'
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
      className="relative w-full h-screen overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#0ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      <div
        className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4"
      >
        <p
          ref={subtitleRef}
          className="text-gray-200 mb-4 tracking-wider uppercase text-sm font-medium"
        >
          {/* Text akan diisi oleh GSAP */}
        </p>

        <h1
          ref={titleRef}
          className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6"
        >
          Afrila Nurhanifa
        </h1>

        <p
          ref={descriptionRef}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          Crafting innovative visual experiences that tell compelling stories and push creative boundaries.
        </p>
        <button
          onClick={handleDownloadCV}
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 2h6v4H7V6zm8 0h2v4h-2V6zm-8 6h6v4H7v-4zm8 0h2v4h-2v-4z"
              clipRule="evenodd"
            />
          </svg>
          View CV
        </button>
      </div>
    </div>
  )
}

export default HeroSection