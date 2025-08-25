import React from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram, 
  FaDribbble 
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      icon: <FaGithub className="w-6 h-6 hover:text-white transition-colors" />, 
      href: "https://github.com/yourusername" 
    },
    { 
      icon: <FaLinkedin className="w-6 h-6 hover:text-[#0A66C2] transition-colors" />, 
      href: "https://linkedin.com/in/yourusername" 
    },
    { 
      icon: <FaTwitter className="w-6 h-6 hover:text-[#1DA1F2] transition-colors" />, 
      href: "https://twitter.com/yourusername" 
    },
    { 
      icon: <FaInstagram className="w-6 h-6 hover:text-[#E1306C] transition-colors" />, 
      href: "https://instagram.com/yourusername" 
    },
    { 
      icon: <FaDribbble className="w-6 h-6 hover:text-[#EA4C89] transition-colors" />, 
      href: "https://dribbble.com/yourusername" 
    }
  ];

  const footerNavigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-[#1A1A1A] text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Branding */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Your Name
            </h3>
            <p className="text-sm">
              UI/UX Designer passionate about creating intuitive and beautiful digital experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {footerNavigation.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="text-sm hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Connect With Me
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-[#252525] text-center">
          <p className="text-sm">
            © {currentYear} Your Name. All Rights Reserved.
            <br />
            <span className="text-xs text-gray-500 mt-2 block">
              Designed & Developed with ❤️ by You
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;