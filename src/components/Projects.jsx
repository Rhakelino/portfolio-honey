import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Project data (contoh, bisa diganti sesuai kebutuhan)
const PROJECTS = [
  { 
    url: '/images/branding-design.jpg', 
    alt: 'Branding Project',
    title: 'Branding Design',
    description: 'Creative branding solution for modern businesses'
  },
  { 
    url: '/images/social-media.jpg', 
    alt: 'Social Media Design',
    title: 'Social Media Design',
    description: 'Engaging social media graphics'
  },
  { 
    url: '/images/video-editing.jpg', 
    alt: 'Video Editing Project',
    title: 'Video Editing',
    description: 'Cinematic video production'
  },
  { 
    url: '/images/ui-ux.jpg', 
    alt: 'UI/UX Project',
    title: 'UI/UX Design',
    description: 'Intuitive user interface designs'
  },
  { 
    url: '/images/photo-editing.jpg', 
    alt: 'Photo Editing Project',
    title: 'Photo Editing',
    description: 'Intuitive user interface designs'
  }
];

function ProjectShowcase() {
  // Ref untuk Swiper dan cards
  const swiperRef = useRef(null);
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);

  // Animasi GSAP dengan ScrollTrigger
  useEffect(() => {
    if (cardRefs.current && sectionRef.current) {
      gsap.fromTo(
        cardRefs.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }
   
  }, []);


  return (
    <section ref={sectionRef} className="max-w-5xl mx-auto px-4 py-12 relative">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        My Projects
      </h2>

      {/* Swiper slider */}
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={'auto'}
        loop={true}
        navigation={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="project-swiper relative"
      >
        {PROJECTS.map((project, idx) => (
          <SwiperSlide key={project.alt} className="relative group">
            <div
              className="relative overflow-hidden rounded-lg shadow-lg"
              ref={el => cardRefs.current[idx] = el}
            >
              <img
                src={project.url}
                alt={project.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg">{project.title}</h3>
                <p className="text-gray-200 text-sm">{project.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ProjectShowcase;
