import React from 'react';
import Navbar from '../components/Navbar';
import ProjectShowcase from '../components/Projects';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import Footer from '../components/Footer';

export default function Home() {

    return (
        <div className="bg-[#141617] min-h-screen text-white">
            {/* Navbar dengan prop scrollToSection */}
            <Navbar />
            {/* Hero Section */}
            <HeroSection />
            {/* About Section */}
            <AboutSection />
            {/* Projects Showcase */}
            <ProjectShowcase />

            <SkillsSection />

            <Footer />
        </div>
    );
}