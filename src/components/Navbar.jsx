import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const desktopMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    // Handle window resize untuk mendeteksi mode desktop atau mobile
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    // Cleanup event
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Navbar animasi muncul dengan delay 3s di desktop, 0s di mobile
    const tl = gsap.timeline();
    tl.fromTo(
      navbarRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: isDesktop ? 3 : 0 // delay 3s kalau desktop, tanpa delay di mobile
      }
    );
    // Desktop menu animasi (stagger, hanya desktop)
    if (isDesktop && desktopMenuRef.current) {
      tl.fromTo(
        desktopMenuRef.current.children,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
        '-=0.3'
      );
    }
  }, [isDesktop]);

  useEffect(() => {
    let mmAnim;
    if (isMenuOpen && mobileMenuRef.current) {
      mmAnim = gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.7)' }
      );
    }
    return () => {
      if (mmAnim) mmAnim.kill();
    };
  }, [isMenuOpen]);

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-xl mx-auto bg-[#232526] backdrop-blur-md rounded-full px-6 py-2 flex justify-between items-center relative">
          {/* Logo */}
          <div className="text-md font-bold cursor-pointer">
            Hani.
          </div>
          {/* Desktop Navigation */}
          <div
            ref={desktopMenuRef}
            className="hidden md:flex items-center text-sm space-x-6"
          >
            <button className="text-gray-300 hover:text-white transition-colors">
              Cases
            </button>
            <button className="text-gray-300 hover:text-white transition-colors">
              About
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors flex items-center"
            >
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors">
              Contact
            </button>
          </div>
          {/* Mobile Hamburger Button */}
          <div className="md:hidden relative z-50">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div
              ref={mobileMenuRef}
              className="absolute left-0 right-0 top-full md:hidden z-40"
              style={{ minWidth: '200px' }}
            >
              <div className="bg-[#181a1d] shadow-lg rounded-lg mx-4 mt-2">
                <div className="flex flex-col p-4 space-y-2">
                  <button className="hover:bg-[#2c3033] px-3 py-2 rounded-lg transition-colors text-left">
                    Cases
                  </button>
                  <button className="hover:bg-[#2c3033] px-3 py-2 rounded-lg transition-colors text-left">
                    About
                  </button>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-[#2c3033] px-3 py-2 rounded-lg transition-colors text-left flex items-center"
                  >
                    Resume
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors text-center block">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
