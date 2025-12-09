// components/CodexPortfolio.js
"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import LandingBot from "./landingbot";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import {
  User,
  Mail,
  Phone,
  Globe,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  HelpCircle,
  Clock,
  Palette,
  Code,
  DollarSign,
  Users,
  Menu,
  X,
  Zap,
  MessageCircle,
  Bot,
  Home,
  Briefcase,
  Lightbulb,
} from "lucide-react";
import WebsiteShowcase from "./WebsiteShowcase";
// Header Component
const Header = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: "🏠" },
    { name: "About", icon: "👨‍💻" },
    { name: "Projects", icon: "🚀" },
    { name: "Approach", icon: "💡" },
    { name: "Contact", icon: "📬" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (isMobileMenuOpen && !e.target.closest(".mobile-menu-container")) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("click", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${isScrolled
          ? "bg-black/95 backdrop-blur-2xl border-b border-purple-500/20 shadow-2xl shadow-purple-500/10"
          : "bg-black/85 backdrop-blur-xl"
          }`}
      >
        {/* Animated gradient border */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-pulse"></div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -top-20 -left-40 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div
          className={`container mx-auto px-4 sm:px-6 lg:px-8 relative ${isMobileMenuOpen ? "hidden" : ""
            }`}
        >
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo with enhanced effects */}
            <div className="flex items-center space-x-3 group cursor-pointer relative">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500 scale-110"></div>

                <div className="relative w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-white via-purple-100 to-blue-100 rounded-2xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-2xl">
                  <span className="text-black font-bold text-xl lg:text-2xl filter drop-shadow-sm">
                    ♠
                  </span>

                  {/* Sparkle effects */}
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-purple-400 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400/20 to-blue-400/20 animate-pulse"></div>
                </div>
              </div>

              <div className="hidden sm:block">
                <h1 className="text-white font-bold text-xl lg:text-2xl bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                  Pragye Nawani
                </h1>
                <p className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-xs lg:text-sm font-medium">
                  Full Stack Wizard ✨
                </p>
              </div>

              <div className="block sm:hidden">
                <span className="text-white font-bold text-lg bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  PN
                </span>
              </div>
            </div>

            {/* Desktop Navigation with enhanced effects */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.name)}
                  className={`relative px-5 py-3 text-sm font-medium transition-all duration-500 rounded-2xl group overflow-hidden ${activeSection === item.name
                    ? "text-white bg-gradient-to-r from-purple-600/30 to-blue-600/30 shadow-lg shadow-purple-500/20"
                    : "text-gray-300 hover:text-white"
                    }`}
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span className="text-sm">{item.icon}</span>
                    <span>{item.name}</span>
                  </span>

                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-2xl"></div>

                  {/* Active indicator */}
                  {activeSection === item.name && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl animate-pulse"></div>
                  )}

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                </button>
              ))}

              {/* Enhanced CTA Button */}
              <button
                onClick={() => scrollToSection("Contact")}
                className="ml-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-2xl hover:from-purple-500 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>Let's Connect</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>

                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </nav>

            {/* Enhanced Mobile Menu Button */}
            <div className="lg:hidden mobile-menu-container">
              <button
                onClick={toggleMobileMenu}
                className="relative p-3 text-white hover:text-purple-300 focus:outline-none transition-all duration-300 rounded-xl hover:bg-white/5 group"
                aria-label="Toggle mobile menu"
              >
                <div className="w-6 h-6 relative">
                  <Menu
                    className={`absolute inset-0 w-6 h-6 transition-all duration-500 ${isMobileMenuOpen
                      ? "opacity-0 rotate-180 scale-50"
                      : "opacity-100 rotate-0 scale-100"
                      }`}
                  />
                  <X
                    className={`absolute inset-0 w-6 h-6 transition-all duration-500 ${isMobileMenuOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-180 scale-50"
                      }`}
                  />
                </div>

                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Mobile Navigation Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 ${isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
      >
        {/* Enhanced Dark Overlay with blur */}
        <div
          className={`absolute inset-0 transition-all duration-700 ease-out ${isMobileMenuOpen
            ? "bg-black/90 backdrop-blur-md"
            : "bg-black/0 backdrop-blur-none"
            }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Animated gradient overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 transition-opacity duration-700 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"
              }`}
          ></div>
        </div>

        {/* Enhanced Slide-in Menu Panel */}
        <div
          className={`mobile-menu-container absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-black/95 backdrop-blur-2xl border-l border-purple-500/30 shadow-2xl shadow-purple-500/20 transform transition-all duration-700 ease-out ${isMobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
            }`}
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10"></div>

          {/* Animated border */}
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"></div>

          {/* Enhanced Menu Header */}
          <div className="relative flex items-center justify-between p-6 border-b border-purple-500/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">♠</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                  Navigation
                </span>
                <p className="text-purple-400 text-xs">
                  Choose your destination
                </p>
              </div>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-purple-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/5 group"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Enhanced Menu Items */}
          <nav className="relative px-6 py-8 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.name)}
                className={`w-full text-left px-5 py-4 text-lg font-medium transition-all duration-500 rounded-2xl relative overflow-hidden group ${activeSection === item.name
                  ? "text-white bg-gradient-to-r from-purple-600/30 to-blue-600/30 shadow-lg shadow-purple-500/20"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isMobileMenuOpen
                    ? "slideInRight 0.8s ease-out forwards"
                    : "none",
                }}
              >
                <span className="relative z-10 flex items-center space-x-4">
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.name}</span>
                  <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </span>

                {/* Active indicator glow */}
                {activeSection === item.name && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-r-full shadow-lg shadow-purple-500/50"></div>
                )}

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 rounded-2xl"></div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
              </button>
            ))}

            {/* Enhanced Mobile CTA Button */}
            <div className="mt-8 pt-6 border-t border-purple-500/20">
              <button
                onClick={() => scrollToSection("Contact")}
                className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-2xl hover:from-purple-500 hover:to-blue-500 transform hover:scale-105 transition-all duration-500 shadow-2xl shadow-purple-500/30 group relative overflow-hidden"
                style={{
                  animationDelay: `${(navItems.length + 1) * 100}ms`,
                  animation: isMobileMenuOpen
                    ? "slideInRight 0.8s ease-out forwards"
                    : "none",
                }}
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>Let's Create Magic</span>
                  <Sparkles className="w-4 h-4 animate-pulse" />
                </span>

                {/* Button animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </nav>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

// 3D Cube Component
const Cube3D = ({ className = "" }) => {
  const [rotation, setRotation] = useState({ x: -15, y: 25 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setRotation((prev) => ({
          x: prev.x,
          y: prev.y + 0.3,
        }));
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className={`relative lg:w-full lg:h-full mx-auto perspective-1000 ${className}`}
    >
      <LandingBot />
    </div>
  );
};

// Hero Section
const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/PragyeNawani?tab=repositories",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pragye-nawani-690282339/",
      icon: <FaLinkedin />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/pragye_nawani/",
      icon: <FaInstagram />,
    },
  ];
  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white relative overflow-hidden"
    >
      {/* Grid Background */}
      <div className="fixed inset-0 opacity-20 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 pt-20 z-10">
        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 lg:gap-12 items-center min-h-[80vh]">
            <motion.div className="flex justify-center h-[300px] lg:justify-end sm:h-[500px] lg:h-[600px] mb-20 lg:mb-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
              transition={{ duration: 1, delay: 0.4 }}>
              <Cube3D />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-8 relative top-[-100px] sm:top-0"
            >
              <div>
                <motion.h1
                  className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 text-center lg:text-left"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  Welcome to
                  <br />
                  <span className="font-normal text-3xl md:text-4xl lg:text-5xl text-purple-400">
                    <Typewriter
                      words={["MyPortfolio"]}
                      loop={true}
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  </span>
                </motion.h1>

                <motion.p
                  className="text-gray-300 text-lg leading-relaxed max-w-lg text-center lg:text-left mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  Full Stack Web Developer specializing in building scalable,
                  modern, and user-focused applications with expertise in MERN
                  stack and beyond.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 1, delay: 1 }}
                className="flex justify-center lg:justify-start"
              >

                <motion.button
                  className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("projects")}
                >
                  Explore My Projects
                </motion.button>

              </motion.div>

              <motion.div
                className="flex space-x-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                {socials.map((items) => (
                  <motion.a
                    key={items.name}
                    href={items.url}
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors duration-300 cursor-pointer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    target="_blank"
                  >
                    {items.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section
// Optimized 3D About Block with better performance
const Enhanced3DAboutBlock = ({ className = "" }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const flipIntervalRef = useRef(null);
  const countdownIntervalRef = useRef(null);

  // Check for mobile/tablet
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cardData = {
    front: {
      title: "Professional Journey",
      gradient: "from-blue-600 via-purple-600 to-indigo-700",
      sections: [
        {
          title: "Core Strengths",
          icon: "💪",
          content: [
            "React, Next.js, modern JavaScript",
            "Node.js, Express, databases",
            "Payment integration (Stripe, Razorpay)",
            "3D web (Three.js & Spline)",
          ],
        },
        {
          title: "Collaboration",
          icon: "🤝",
          content: [
            "Agile team player",
            "Git workflow & clean code",
            "Client communication",
          ],
        },
      ],
    },
    back: {
      title: "Vision & Growth",
      gradient: "from-emerald-600 via-teal-600 to-cyan-700",
      sections: [
        {
          title: "Innovation",
          icon: "🚀",
          content: [
            "Cutting-edge design tools",
            "AI-powered workflows",
            "Emerging technologies",
            "Cloud-native & security",
          ],
        },
        {
          title: "Aspirations",
          icon: "🎯",
          content: [
            "AI-powered apps",
            "Next-gen 3D experiences",
            "Startup collaboration",
          ],
        },
      ],
    },
  };

  // Clear all timers
  const clearAllTimers = () => {
    if (flipIntervalRef.current) clearInterval(flipIntervalRef.current);
    if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
  };

  // Start timers
  const startTimers = () => {
    clearAllTimers();
    if (!isHovered) {
      flipIntervalRef.current = setInterval(() => {
        setIsFlipped((prev) => !prev);
        setTimeLeft(5);
      }, 5000);
      countdownIntervalRef.current = setInterval(() => {
        setTimeLeft((prev) => (prev <= 1 ? 5 : prev - 1));
      }, 1000);
    }
  };

  useEffect(() => {
    startTimers();
    return clearAllTimers;
  }, [isHovered]);

  const handleClick = () => {
    setIsFlipped((prev) => !prev);
    setTimeLeft(5);
  };

  const currentCard = isFlipped ? cardData.back : cardData.front;

  return (
    <div className={`relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[600px] mx-auto ${className}`}>
      <div className="relative w-full" style={{ aspectRatio: "6/5" }}>
        {/* Simplified glow effect */}
        <div className={`absolute inset-0 rounded-2xl blur-2xl opacity-20 bg-gradient-to-br ${currentCard.gradient}`} />

        <div
          className="relative w-full h-full cursor-pointer"
          onClick={handleClick}
          onMouseEnter={() => !isMobile && setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="relative w-full h-full"
            animate={{ scale: isHovered && !isMobile ? 1.02 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Simplified card with fewer layers */}
            <div className={`relative w-full h-full rounded-2xl bg-gradient-to-br ${currentCard.gradient} shadow-xl border border-white/20`}>
              <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-lg overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isFlipped ? "back" : "front"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full p-4 sm:p-6 text-white overflow-hidden"
                  >
                    {/* Header */}
                    <div className="text-center mb-6">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
                        {currentCard.title}
                      </h3>
                      <div className="w-16 h-0.5 bg-white/60 mx-auto rounded-full" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4 overflow-y-auto">
                      {currentCard.sections.map((section, idx) => (
                        <div
                          key={idx}
                          className="bg-white/10 rounded-xl p-4 border border-white/20"
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xl">{section.icon}</span>
                            <h4 className="font-semibold text-sm sm:text-base">
                              {section.title}
                            </h4>
                          </div>
                          <div className="space-y-2">
                            {section.content.map((item, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-white/80">
                                <div className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 flex-shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Timer indicator */}
          <div className="absolute -top-4 right-4 z-30">
            <div className="flex items-center gap-2 bg-black/70 backdrop-blur-xl rounded-full px-3 py-1.5 border border-white/30">
              <div className={`w-2 h-2 rounded-full animate-pulse ${timeLeft <= 1 ? "bg-red-400" : "bg-green-400"}`} />
              <span className="text-white font-medium text-sm">{timeLeft}s</span>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            {isMobile ? "Tap to flip • Auto-rotates every 5s" : "Click to flip • Auto-rotates every 5s"}
          </p>
        </div>
      </div>
    </div>
  );
};

// Optimized About Section
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-1 lg:order-1 text-center lg:text-left"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8">
                <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                  About
                </span>
                <br />
                <span className="font-normal bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                  Me
                </span>
              </h2>

              <div className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Hi, I'm a <strong className="text-gray-800">full-stack developer</strong> passionate about crafting digital products that blend creativity with functionality.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  My journey has been fueled by curiosity and a drive to learn new tools. I believe in <strong className="text-gray-800">building experiences that matter</strong>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
                  Get in Touch
                </button>
                <button className="px-8 py-4 border-2 border-gray-300 hover:border-gray-900 rounded-full font-semibold text-gray-600 hover:text-gray-900 transition-all">
                  Let's Connect
                </button>
              </div>
            </div>
          </motion.div>

          {/* 3D About Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center order-2 lg:order-2"
          >
            <Enhanced3DAboutBlock />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

//Skills Section
const Enhanced3DSkillsBlock = ({ className = "" }) => {
  const [currentFace, setCurrentFace] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const faces = [
    {
      title: "Front-End",
      subtitle: "User Interface & Experience",
      color: "from-orange-500 to-red-600",
      content: [
        { name: "HTML5", icon: "🌐", level: 95 },
        { name: "CSS3", icon: "🎨", level: 90 },
        { name: "Tailwind", icon: "💨", level: 88 },
        { name: "JavaScript", icon: "⚡", level: 92 },
      ],
    },
    {
      title: "Back-End",
      subtitle: "Server & Logic",
      color: "from-green-500 to-emerald-600",
      content: [
        { name: "React", icon: "⚛️", level: 90 },
        { name: "Node.js", icon: "🟢", level: 85 },
        { name: "Next.js", icon: "▲", level: 88 },
        { name: "Three.js", icon: "🎲", level: 75 },
      ],
    },
    {
      title: "Database & Tools",
      subtitle: "Data Management",
      color: "from-blue-500 to-purple-600",
      content: [
        { name: "MongoDB", icon: "🍃", level: 85 },
        { name: "MySQL", icon: "🐬", level: 80 },
        { name: "Appwrite", icon: "🔥", level: 82 },
        { name: "OAuth", icon: "🔐", level: 78 },
        { name: "Razorpay", icon: "💳", level: 75 },
        { name: "Stripe", icon: "💰", level: 77 },
        { name: "Postman", icon: "📮", level: 85 },
      ],
    },
    {
      title: "AI & Platforms",
      subtitle: "Modern Tools",
      color: "from-purple-500 to-pink-600",
      content: [
        { name: "Dora AI", icon: "🤖", level: 70 },
        { name: "Claude AI", icon: "🧠", level: 85 },
        { name: "Spline 3D", icon: "📐", level: 75 },
        { name: "DeepSeek", icon: "🔍", level: 72 },
        { name: "ChatGPT", icon: "💬", level: 88 },
      ],
    },
  ];

  useEffect(() => {
    const flipInterval = setInterval(() => {
      if (!isHovered) {
        setCurrentFace((prev) => (prev + 1) % 4);
        setTimeLeft(5);
      }
    }, 5000);

    const countdownInterval = setInterval(() => {
      setTimeLeft((prev) => (prev <= 1 ? 5 : prev - 1));
    }, 1000);

    return () => {
      clearInterval(flipInterval);
      clearInterval(countdownInterval);
    };
  }, [isHovered]);

  const handleClick = () => {
    setCurrentFace((prev) => (prev + 1) % 4);
    setTimeLeft(5);
  };

  const currentData = faces[currentFace];

  return (
    <div className={`relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[600px] mx-auto ${className}`}>
      <div className="relative w-full aspect-square">
        {/* Simple glow - no animation */}
        <div className={`absolute inset-0 rounded-2xl blur-2xl opacity-20 bg-gradient-to-br ${currentData.color}`} />

        <div
          className="relative w-full h-full cursor-pointer"
          onClick={handleClick}
          onMouseEnter={() => !isMobile && setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Simplified container - NO 3D transforms */}
          <motion.div
            className="relative w-full h-full"
            animate={{ scale: isHovered && !isMobile ? 1.02 : 1 }}
            transition={{ duration: 0.2 }}
          >
            {/* Single layer card - NO shadows or depth layers */}
            <div className={`relative w-full h-full rounded-2xl bg-gradient-to-br ${currentData.color} shadow-xl border border-white/20`}>
              <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-md overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFace}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col h-full p-4 sm:p-6 text-white overflow-hidden"
                  >
                    {/* Header */}
                    <div className="text-center mb-4 sm:mb-6">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 text-white">
                        {currentData.title}
                      </h3>
                      <p className="text-white/80 text-xs sm:text-sm">{currentData.subtitle}</p>
                    </div>

                    {/* Skills Grid - Simplified animations */}
                    <div className="flex-1 overflow-y-auto pb-2">
                      <div className={`grid gap-2 sm:gap-3 ${
                        currentData.content.length > 6 ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-2" : "grid-cols-2"
                      }`}>
                        {currentData.content.map((skill, index) => (
                          <motion.div
                            key={`${currentFace}-${index}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.03 }}
                            className="bg-white/15 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-white/20 hover:bg-white/20 transition-colors"
                          >
                            <div className="flex flex-col items-center text-center space-y-1 sm:space-y-1.5">
                              <span className="text-base sm:text-lg md:text-xl">{skill.icon}</span>
                              <span className="font-semibold text-xs sm:text-sm text-white">{skill.name}</span>
                              {/* Progress bar - simplified animation */}
                              <div className="w-full bg-white/20 rounded-full h-1">
                                <motion.div
                                  className="h-full bg-white rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{ duration: 0.6, delay: index * 0.03 }}
                                />
                              </div>
                              <span className="text-xs text-white/70">{skill.level}%</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Timer - simplified */}
          <div className="absolute -top-4 right-4 z-30">
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-lg rounded-full px-3 py-1.5 border border-white/20">
              <div className={`w-2 h-2 rounded-full ${timeLeft <= 1 ? "bg-red-400" : "bg-green-400"}`} />
              <span className="text-white text-sm">{timeLeft}s</span>
              <div className="w-px h-4 bg-white/30" />
              <span className="text-white/80 text-xs">{currentFace + 1}/4</span>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-30">
            <div className="flex gap-2 bg-black/40 backdrop-blur-lg rounded-full p-2 border border-white/20">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentFace(index);
                    setTimeLeft(5);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentFace === index ? "bg-white w-6" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 text-center">
          <p className="text-white/60 text-sm">
            {isMobile ? "Tap to navigate" : "Click or use dots"} • Auto-rotates every 5s
          </p>
        </div>
      </div>
    </div>
  );
};

// Optimized Skills Section
const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D Skills Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center order-2 lg:order-1"
          >
            <Enhanced3DSkillsBlock />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 order-1 lg:order-2 text-center lg:text-left"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-light mb-6">
                <span className="text-white">My</span>
                <br />
                <span className="font-normal bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Skills
                </span>
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
                As a full-stack web developer, I possess a diverse skill set from cutting-edge front-end technologies to robust back-end frameworks and modern AI tools.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  Explore My Work
                </button>
                <button className="px-8 py-4 border-2 border-gray-600 hover:border-white rounded-full font-semibold text-gray-400 hover:text-white transition-all hover:scale-105">
                  Let's Connect
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Featured Projects Section
// Sample project data with images
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    image: "soloistanjali.png",
    description: "Modern shopping experience with React & Node.js",
  },
  {
    id: 2,
    title: "Portfolio",
    image: "portfolio.png",
    description: "Creative portfolio with Framer animations",
  },
  {
    id: 3,
    title: "Health & Fitness",
    image: "fitlife.png",
    description: "Front-End Gym Website",
  },
  {
    id: 4,
    title: "AI ChatBot",
    image: "phoenix.jpg",
    description: "GeminiGenAI Powered Chat Bot with Appwrite",
  },
  {
    id: 5,
    title: "AI TaskManager",
    image: "tasky.jpg",
    description: "Intelligent AI TaskManager To Manage",
  },
];

const Spiral3D = ({ activeProject, onProjectClick }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.3;

      // Draw spiral with project points
      projects.forEach((project, index) => {
        const angle = (index / projects.length) * Math.PI * 2 + time * 0.5;
        const spiralRadius = radius + Math.sin(time + index) * 20;

        const x = centerX + Math.cos(angle) * spiralRadius;
        const y = centerY + Math.sin(angle) * spiralRadius;

        // Draw connecting lines
        ctx.strokeStyle = `rgba(59, 130, 246, ${0.3 + Math.sin(time + index) * 0.2
          })`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();

        // Draw project points
        const isActive = activeProject?.id === project.id;
        const pointSize = isActive ? 12 : 8;

        ctx.fillStyle = isActive ? "#3b82f6" : "#6b7280";
        ctx.beginPath();
        ctx.arc(x, y, pointSize, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect for active project
        if (isActive) {
          ctx.shadowColor = "#3b82f6";
          ctx.shadowBlur = 20;
          ctx.beginPath();
          ctx.arc(x, y, pointSize, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Store click areas for interaction
        project._renderPos = { x, y, radius: pointSize + 5 };
      });

      time += 0.016;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle clicks
    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      projects.forEach((project) => {
        if (project._renderPos) {
          const dx = clickX - project._renderPos.x;
          const dy = clickY - project._renderPos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance <= project._renderPos.radius) {
            onProjectClick(project);
          }
        }
      });
    };

    canvas.addEventListener("click", handleClick);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("click", handleClick);
    };
  }, [activeProject, onProjectClick]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-96 cursor-pointer"
      style={{ width: "100%", height: "400px" }}
    />
  );
};

const FeaturedProjectsSection = () => {
  const [isInView, setIsInView] = useState(true);
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const fadeTimeoutRef = useRef(null);

  // Auto-advance images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % projects.length;
        setActiveProject(projects[nextIndex]);
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle project click from spiral
  const handleProjectClick = (project) => {
    setActiveProject(project);
    setCurrentIndex(projects.findIndex((p) => p.id === project.id));

    // Clear existing timeout and set new one
    if (fadeTimeoutRef.current) {
      clearTimeout(fadeTimeoutRef.current);
    }

    fadeTimeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % projects.length;
        setActiveProject(projects[nextIndex]);
        return nextIndex;
      });
    }, 5000);
  };

  return (
    <section
      ref={ref}
      id="projects"
      className="py-20 bg-black text-white min-h-screen"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light mb-8 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Throughout my career, I have had the opportunity to work on a
            variety of web development projects, ranging from small-scale
            personal websites to large-scale enterprise applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Project Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-2 shadow-2xl">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Project Info Overlay */}
                <motion.div
                  key={`info-${activeProject.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 p-6"
                >
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {activeProject.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {activeProject.description}
                  </p>
                </motion.div>

                {/* Progress bar */}
                <div className="absolute bottom-2 right-2">
                  <div className="flex space-x-1">
                    {projects.map((_, index) => (
                      <motion.div
                        key={index}
                        className={`h-1 w-8 rounded-full ${index === currentIndex ? "bg-blue-400" : "bg-gray-600"
                          }`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: index === currentIndex ? 1 : 0.3 }}
                        transition={{ duration: 0.3 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Interactive Spiral */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-transparent rounded-2xl p-8 backdrop-blur-sm border border-gray-800">
              <h3 className="text-xl font-light mb-4 text-center text-gray-300">
                Interactive Project Explorer
              </h3>
              <p className="text-sm text-gray-400 text-center mb-6">
                Click on any point to explore projects
              </p>
              <Spiral3D
                activeProject={activeProject}
                onProjectClick={handleProjectClick}
              />
            </div>

            {/* Project thumbnails */}
            <div className="flex flex-wrap gap-2 mt-6 justify-center">
              {projects.map((project, index) => (
                <motion.button
                  key={project.id}
                  onClick={() => handleProjectClick(project)}
                  className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${activeProject.id === project.id
                    ? "border-blue-400 shadow-lg shadow-blue-400/25"
                    : "border-gray-600 hover:border-gray-400"
                    }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Approach Section
const ApproachSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const steps = [
    {
      number: 1,
      title: "Discovery",
      description:
        "During the discovery phase, we engage in a comprehensive analysis of your business, your target market, and competitive landscape to create a strategic foundation.",
      subtitle: "Understand Your Goals",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=top",
      gradient: "from-blue-500/20 to-cyan-500/20",
      icon: "🔍",
    },
    {
      number: 2,
      title: "Design & Development",
      description:
        "Our team of skilled designers and developers work collaboratively to bring your vision to life with cutting-edge technologies and user-centered design principles.",
      subtitle: "Iterative Approach",
      image:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=300&fit=crop&crop=center",
      gradient: "from-purple-500/20 to-pink-500/20",
      icon: "🎨",
    },
    {
      number: 3,
      title: "Launch & Optimization",
      description:
        "Once your website is ready, we ensure a seamless launch and provide ongoing optimization to maximize performance and user engagement.",
      subtitle: "Measure & Optimize",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
      gradient: "from-green-500/20 to-emerald-500/20",
      icon: "🚀",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  return (
    <section
      ref={ref}
      id="approach"
      className="py-24 bg-gradient-to-br bg-black text-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium border border-blue-500/20 backdrop-blur-sm">
              Our Process
            </span>
          </motion.div>

          <h2 className="text-6xl md:text-7xl font-light mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Our Approach
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            At our agency, we believe that a collaborative and strategic
            approach is the key to successful web development projects. We work
            closely with our clients to understand their goals and deliver
            exceptional results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${step.gradient} via-transparent to-transparent opacity-60`}
                  ></div>

                  {/* Step Number */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                    <span className="text-xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="absolute top-4 right-4 text-3xl opacity-80">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-blue-400 uppercase tracking-wider">
                      {step.subtitle}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Bottom accent line */}
                  <div
                    className={`h-1 bg-gradient-to-r ${step.gradient.replace(
                      "/20",
                      ""
                    )} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  ></div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 border border-blue-500/20">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// CTA Section

const ModernContactForm = ({ isInView = true }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    websiteType: "",
    budget: "",
    timeline: "",
    message: "",
    contactMethod: "email",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  const websiteTypes = [
    { value: "portfolio", label: "Portfolio Website", icon: "👤" },
    { value: "ecommerce", label: "E-commerce Store", icon: "🛒" },
    { value: "business", label: "Business Website", icon: "🏢" },
    { value: "blog", label: "Blog/Content Site", icon: "📝" },
    { value: "webapp", label: "Web Application", icon: "⚡" },
    { value: "landing", label: "Landing Page", icon: "🎯" },
    { value: "other", label: "Other/Custom", icon: "🔧" },
  ];

  const budgetRanges = [
    { value: "25", label: "Under $25" },
    { value: "25-75", label: "$25 - $75" },
    { value: "75-150", label: "$75 - $150" },
    { value: "150-plus", label: "$150+" },
    { value: "discuss", label: "Let's Discuss" },
  ];

  const timelineOptions = [
    { value: "asap", label: "ASAP" },
    { value: "3-days", label: "Within 3 Days" },
    { value: "5-7-days", label: "5-7 Days" },
    { value: "7-14-days", label: "7-14 Days" },
    { value: "flexible", label: "Flexible Timeline" },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.websiteType)
      newErrors.websiteType = "Please select a website type";
    if (!formData.message.trim())
      newErrors.message = "Please tell us about your project";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // In a real implementation, you would send the form data to your server here
    // For demo purposes, we're simulating the submission
    console.log("Form submitted:", formData);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after success
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          websiteType: "",
          budget: "",
          timeline: "",
          message: "",
          contactMethod: "email",
        });
      }, 3000);
    }, 2000);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          <div>
            <h3 className="text-3xl font-light mb-4 text-white">Thank You!</h3>
            <p className="text-gray-300 text-lg">
              Your message has been sent successfully. I'll get back to you
              within 24 hours.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
      <div className="mb-8">
        <h3 className="text-3xl font-light mb-4 text-white">
          Let's Work Together
        </h3>
        <p className="text-gray-400 text-lg">
          Tell me about your project and let's create something amazing
          together.
        </p>
      </div>

      <form
        action="https://getform.io/f/bejerkwa"
        method="POST"
        // onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                onFocus={() => setFocusedField("fullName")}
                onBlur={() => setFocusedField("")}
                required
                className={`w-full pl-12 pr-4 py-4 bg-white/5 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 backdrop-blur-sm ${errors.fullName
                  ? "border-red-500 focus:ring-red-500/50"
                  : focusedField === "fullName"
                    ? "border-blue-500 focus:ring-blue-500/50"
                    : "border-white/20 hover:border-white/30"
                  }`}
                placeholder="Your full name"
              />
            </div>
            {errors.fullName && (
              <p className="mt-2 text-sm text-red-400 flex items-center space-x-1">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField("")}
                required
                className={`w-full pl-12 pr-4 py-4 bg-white/5 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 backdrop-blur-sm ${errors.email
                  ? "border-red-500 focus:ring-red-500/50"
                  : focusedField === "email"
                    ? "border-blue-500 focus:ring-blue-500/50"
                    : "border-white/20 hover:border-white/30"
                  }`}
                placeholder="your@email.com"
              />
            </div>
            {errors.email && (
              <p className="mt-2 text-sm text-red-400 flex items-center space-x-1">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField("")}
                required
                className={`w-full pl-12 pr-4 py-4 bg-white/5 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 backdrop-blur-sm ${errors.phone
                  ? "border-red-500 focus:ring-red-500/50"
                  : focusedField === "phone"
                    ? "border-blue-500 focus:ring-blue-500/50"
                    : "border-white/20 hover:border-white/30"
                  }`}
                placeholder="+1 (555) 123-4567"
              />
            </div>
            {errors.phone && (
              <p className="mt-2 text-sm text-red-400 flex items-center space-x-1">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Company (Optional)
            </label>
            <div className="relative">
              <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                onFocus={() => setFocusedField("company")}
                onBlur={() => setFocusedField("")}
                className={`w-full pl-12 pr-4 py-4 bg-white/5 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 backdrop-blur-sm ${focusedField === "company"
                  ? "border-blue-500 focus:ring-blue-500/50"
                  : "border-white/20 hover:border-white/30"
                  }`}
                placeholder="Your company name"
              />
            </div>
          </div>
        </div>

        {/* Website Type Selection */}
        <div>
          <fieldset>
            <legend className="block text-sm font-medium text-gray-300 mb-4">
              What type of website do you need? *
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {websiteTypes.map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => handleInputChange("websiteType", type.value)}
                  className={`p-4 rounded-xl border transition-all duration-300 text-left hover:scale-105 ${formData.websiteType === type.value
                    ? "bg-blue-500/20 border-blue-500 text-white"
                    : "bg-white/5 border-white/20 text-gray-300 hover:border-white/40"
                    }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{type.icon}</span>
                    <span className="font-medium text-sm">{type.label}</span>
                  </div>
                </button>
              ))}
            </div>
            {/* Hidden input for form submission */}
            <input
              type="hidden"
              id="websiteType"
              name="websiteType"
              value={formData.websiteType}
            />
          </fieldset>
          {errors.websiteType && (
            <p className="mt-2 text-sm text-red-400 flex items-center space-x-1">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.websiteType}</span>
            </p>
          )}
        </div>

        {/* Budget and Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="budget"
              className="block text-sm font-medium text-gray-300 mb-3"
            >
              Project Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={(e) => handleInputChange("budget", e.target.value)}
              className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 backdrop-blur-sm"
            >
              <option value="" className="bg-gray-800">
                Select budget range
              </option>
              {budgetRanges.map((range) => (
                <option
                  key={range.value}
                  value={range.value}
                  className="bg-gray-800"
                >
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="timeline"
              className="block text-sm font-medium text-gray-300 mb-3"
            >
              Project Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={(e) => handleInputChange("timeline", e.target.value)}
              className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 backdrop-blur-sm"
            >
              <option value="" className="bg-gray-800">
                Select timeline
              </option>
              {timelineOptions.map((timeline) => (
                <option
                  key={timeline.value}
                  value={timeline.value}
                  className="bg-gray-800"
                >
                  {timeline.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300 mb-3"
          >
            Tell me about your project *
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField("")}
              rows={5}
              required
              className={`w-full pl-12 pr-4 py-4 bg-white/5 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 backdrop-blur-sm resize-none ${errors.message
                ? "border-red-500 focus:ring-red-500/50"
                : focusedField === "message"
                  ? "border-blue-500 focus:ring-blue-500/50"
                  : "border-white/20 hover:border-white/30"
                }`}
              placeholder="Describe your project, goals, and any specific requirements..."
            />
          </div>
          {errors.message && (
            <p className="mt-2 text-sm text-red-400 flex items-center space-x-1">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Preferred Contact Method */}
        <div>
          <fieldset>
            <legend className="block text-sm font-medium text-gray-300 mb-3">
              Preferred Contact Method
            </legend>
            <div className="flex space-x-4">
              {[
                { value: "email", label: "Email", icon: Mail },
                { value: "phone", label: "Phone", icon: Phone },
              ].map((method) => (
                <button
                  key={method.value}
                  type="button"
                  onClick={() =>
                    handleInputChange("contactMethod", method.value)
                  }
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl border transition-all duration-300 ${formData.contactMethod === method.value
                    ? "bg-blue-500/20 border-blue-500 text-white"
                    : "bg-white/5 border-white/20 text-gray-300 hover:border-white/40"
                    }`}
                >
                  <method.icon className="w-4 h-4" />
                  <span>{method.label}</span>
                </button>
              ))}
            </div>
            {/* Hidden input for form submission */}
            <input
              type="hidden"
              name="contactMethod"
              value={formData.contactMethod}
            />
          </fieldset>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 ${isSubmitting
            ? "opacity-70 cursor-not-allowed"
            : "hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-[1.02] hover:-translate-y-1"
            }`}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      id="contact"
      className="py-20 text-white relative overflow-hidden py-28"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/10 to-pink-500/5 contactsec"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Enhanced heading with animated gradient */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-2 text-blue-400 font-medium"
              >
                <Sparkles className="w-5 h-5" />
                <span>Let's Create Something Amazing</span>
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-light">
                Ready to Get
                <br />
                <span className="font-normal bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Started?
                </span>
              </h2>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed">
              If you're ready to take your web presence to the next level, I
              would be honored to collaborate with you. Together, we can create
              a stunning, user-friendly, and highly functional website that
              showcases your brand, engages your target audience, and drives
              tangible results for your business.
            </p>

            {/* Enhanced features list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              {[
                "Custom Design & Development",
                "Responsive & Mobile-First",
                "SEO Optimized & Fast Loading",
                "Ongoing Support & Maintenance",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + 0.1 * index }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>

              <motion.button
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Form glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl scale-105"></div>

            <div className="relative">
              <ModernContactForm isInView={isInView} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [expandedFAQ, setExpandedFAQ] = useState(0); // First FAQ expanded by default

  const faqs = [
    {
      id: 1,
      question: "How long does a typical web development project take?",
      answer:
        "Project timelines vary based on complexity and scope. A simple landing page typically takes 1-2 weeks, while a full business website with custom features can take 4-8 weeks. Complex web applications may require 2-4 months. I'll provide a detailed timeline during our initial consultation based on your specific requirements.",
      icon: Clock,
      category: "Timeline",
    },
    {
      id: 2,
      question: "What is your design and development process?",
      answer:
        "My process is centered around collaboration and transparency. It includes: 1) Discovery & Strategy phase where we define goals and requirements, 2) Design & Wireframing with mockups and prototypes, 3) Development & Testing with regular updates, 4) Launch & Optimization with post-launch support. Throughout the process, I work closely with you to ensure the final design aligns with your vision.",
      icon: Palette,
      category: "Process",
    },
    {
      id: 3,
      question: "Do you provide ongoing maintenance and support?",
      answer:
        "Yes! I offer comprehensive maintenance packages that include regular updates, security monitoring, backup management, performance optimization, and technical support. I believe in long-term partnerships and am here to help your website grow with your business needs.",
      icon: Users,
      category: "Support",
    },
    {
      id: 4,
      question: "What technologies do you work with?",
      answer:
        "I specialize in modern web technologies including React, Next.js, Vue.js, Node.js, and various CMS platforms like WordPress and Shopify. I also work with databases, cloud services, and ensure all projects are mobile-responsive and SEO-optimized. The technology stack is chosen based on your specific needs and goals.",
      icon: Code,
      category: "Technology",
    },
    {
      id: 5,
      question: "How do you handle project pricing?",
      answer:
        "Pricing depends on project scope, complexity, and timeline. I offer transparent, fixed-price quotes for defined projects, as well as hourly rates for ongoing work. Every project includes a detailed proposal with clear deliverables and milestones. I believe in fair, competitive pricing with no hidden fees.",
      icon: DollarSign,
      category: "Pricing",
    },
    {
      id: 6,
      question: "Can you help with SEO and digital marketing?",
      answer:
        "Absolutely! I build all websites with SEO best practices from the ground up, including proper site structure, meta tags, fast loading speeds, and mobile optimization. I can also provide guidance on content strategy, analytics setup, and basic digital marketing to help your website perform better in search results.",
      icon: Sparkles,
      category: "SEO & Marketing",
    },
  ];

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? -1 : index);
  };

  const categories = [...new Set(faqs.map((faq) => faq.category))];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center space-x-2 text-blue-600 font-medium mb-4"
          >
            <HelpCircle className="w-5 h-5" />
            <span>Frequently Asked Questions</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-light text-black">
            Got Questions?
            <br />
            <span className="font-normal bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              We Have Answers
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find answers to common questions about my web development process,
            pricing, and services. Don't see your question? Feel free to reach
            out!
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.slice(0, 4).map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm text-gray-700 shadow-sm"
            >
              {category}
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isExpanded = expandedFAQ === index;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-3 rounded-xl transition-all duration-300 ${isExpanded
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                        : "bg-gray-100 text-gray-600"
                        }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {faq.question}
                      </h3>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {faq.category}
                      </span>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-400"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="ml-16 pt-2 border-t border-gray-100">
                          <motion.p
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="text-gray-700 leading-relaxed pt-4"
                          >
                            {faq.answer}
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            I'm here to help! Feel free to reach out with any specific questions
            about your project.
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full font-medium transition-all duration-300 flex items-center space-x-2 mx-auto"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get in Touch</span>
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  const footerSections = [
    {
      title: "Quick Links",
      links: ["Home", "About", "Projects", "Contact"],
    },
    {
      title: "Connect With Us",
      links: ["LinkedIn", "Twitter", "Instagram", "GitHub"],
    },
    {
      title: "Legal",
      links: ["Terms of Use", "Privacy Policy", "Sitemap", "Disclaimer"],
    },
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold">♠</span>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              © 2025 Pragye Nawani , Inc.
              <br />
              All rights reserved.
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

const PortfolioChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Predefined responses and quick actions
  const quickActions = [
    {
      id: "about",
      text: "Tell me about Pragye",
      icon: User,
      category: "About",
    },
    {
      id: "skills",
      text: "What are your skills?",
      icon: Code,
      category: "Skills",
    },
    {
      id: "projects",
      text: "Show me your projects",
      icon: Briefcase,
      category: "Work",
    },
    {
      id: "contact",
      text: "How to contact you?",
      icon: Mail,
      category: "Contact",
    },
    {
      id: "pricing",
      text: "What are your rates?",
      icon: DollarSign,
      category: "Business",
    },
    {
      id: "timeline",
      text: "Project timeline?",
      icon: Clock,
      category: "Business",
    },
  ];

  const responses = {
    about: {
      text: "Hi! I'm Pragye Nawani, a passionate Full Stack Web Developer with 3+ years of experience. I specialize in creating modern, scalable applications using the MERN stack and cutting-edge technologies like Three.js for 3D experiences. I love turning creative ideas into functional, user-friendly websites and applications.",
      actions: ["skills", "projects"],
    },
    skills: {
      text: "My core skills include:\n\n🖥️ **Frontend:** React, Next.js, HTML5, CSS3, Tailwind CSS, Three.js\n⚙️ **Backend:** Node.js, Express.js, MongoDB, MySQL\n💳 **Payments:** Stripe, Razorpay integration\n🤖 **AI Tools:** Claude AI, ChatGPT, Dora AI, Spline 3D\n🛠️ **Tools:** Git, Postman, OAuth, Appwrite\n\nI'm always learning new technologies to stay current with industry trends!",
      actions: ["projects", "contact"],
    },
    projects: {
      text: "I've completed 50+ projects including:\n\n🛒 **E-Commerce Platforms** - Modern shopping experiences\n💼 **Portfolio Websites** - Creative showcases with animations\n💪 **Health & Fitness Sites** - Gym and wellness platforms\n🤖 **AI Chatbots** - GeminiGenAI powered applications\n📝 **Task Managers** - Intelligent productivity tools\n\nWould you like to see specific examples or discuss a new project?",
      actions: ["contact", "pricing"],
    },
    contact: {
      text: "Great! Here are the best ways to reach me:\n\n📧 **Email:** [Contact form on website]\n📱 **Phone:** Available upon request\n💼 **LinkedIn:** linkedin.com/in/pragye-nawani-690282339/\n💻 **GitHub:** github.com/PragyeNawani\n📸 **Instagram:** @pragye_nawani\n\nI typically respond within 24 hours and offer free initial consultations!",
      actions: ["pricing", "timeline"],
    },
    pricing: {
      text: "My pricing is transparent and competitive:\n\n💡 **Simple Landing Pages:** Under $25 - $75\n🏢 **Business Websites:** $75 - $150\n⚡ **Complex Web Apps:** $150+\n🤝 **Custom Projects:** Let's discuss!\n\nI offer:\n✅ Fixed-price quotes for defined projects\n✅ Hourly rates for ongoing work\n✅ No hidden fees\n✅ Payment plans available",
      actions: ["timeline", "contact"],
    },
    timeline: {
      text: "Project timelines depend on complexity:\n\n⚡ **ASAP:** Simple updates/fixes\n🏃 **3-5 Days:** Landing pages, basic sites\n📅 **1-2 Weeks:** Business websites\n🏗️ **2-8 Weeks:** Complex web applications\n🎯 **Flexible:** We can work with your schedule!\n\nI provide regular updates and maintain clear communication throughout the project.",
      actions: ["contact", "projects"],
    },
    navigation: {
      text: "Here's how to navigate my portfolio:\n\n🏠 **Home** - Main introduction and overview\n👨‍💻 **About** - My background and story\n🚀 **Projects** - Featured work and case studies\n💡 **Approach** - My development process\n📬 **Contact** - Get in touch form\n\nYou can also use the navigation menu at the top of the page!",
      actions: ["about", "projects"],
    },
    default: {
      text: "I'm here to help you learn more about Pragye's work and services! I can provide information about:\n\n• His background and experience\n• Technical skills and expertise\n• Featured projects and portfolio\n• Contact information and rates\n• Project timelines and process\n\nWhat would you like to know?",
      actions: ["about", "skills", "projects", "contact"],
    },
  };

  // Initialize chat with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(
          "👋 Hi! I'm Pragye's AI assistant. I'm here to help you learn more about his work and services. What would you like to know?",
          ["about", "skills", "projects", "contact"]
        );
      }, 500);
    }
  }, [isOpen]);

  // Auto scroll to bottom
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addBotMessage = (text, suggestedActions = []) => {
    const message = {
      id: Date.now(),
      text,
      sender: "bot",
      timestamp: new Date(),
      suggestedActions,
    };
    setMessages((prev) => [...prev, message]);
  };

  const addUserMessage = (text) => {
    const message = {
      id: Date.now(),
      text,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, message]);
  };

  const simulateTyping = () => {
    setIsTyping(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        setIsTyping(false);
        resolve();
      }, 1000 + Math.random() * 1000);
    });
  };

  const handleQuickAction = async (actionId) => {
    const action = quickActions.find((a) => a.id === actionId);
    if (action) {
      addUserMessage(action.text);
      setShowQuickActions(false);

      await simulateTyping();

      const response = responses[actionId] || responses.default;
      addBotMessage(response.text, response.actions);
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMsg = inputMessage.trim().toLowerCase();
    addUserMessage(inputMessage);
    setInputMessage("");
    setShowQuickActions(false);

    await simulateTyping();

    // Simple keyword matching for responses
    let responseKey = "default";

    if (
      userMsg.includes("about") ||
      userMsg.includes("who") ||
      userMsg.includes("pragye")
    ) {
      responseKey = "about";
    } else if (
      userMsg.includes("skill") ||
      userMsg.includes("technology") ||
      userMsg.includes("tech")
    ) {
      responseKey = "skills";
    } else if (
      userMsg.includes("project") ||
      userMsg.includes("work") ||
      userMsg.includes("portfolio")
    ) {
      responseKey = "projects";
    } else if (
      userMsg.includes("contact") ||
      userMsg.includes("reach") ||
      userMsg.includes("email")
    ) {
      responseKey = "contact";
    } else if (
      userMsg.includes("price") ||
      userMsg.includes("cost") ||
      userMsg.includes("rate") ||
      userMsg.includes("budget")
    ) {
      responseKey = "pricing";
    } else if (
      userMsg.includes("time") ||
      userMsg.includes("deadline") ||
      userMsg.includes("duration")
    ) {
      responseKey = "timeline";
    } else if (
      userMsg.includes("navigate") ||
      userMsg.includes("menu") ||
      userMsg.includes("section")
    ) {
      responseKey = "navigation";
    }

    const response = responses[responseKey];
    addBotMessage(response.text, response.actions);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close chat after navigation
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center ${isOpen ? "scale-0" : "scale-100"
          }`}
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: isOpen ? 0 : 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <MessageCircle className="w-7 h-7" />

        {/* Notification dot */}
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs font-bold text-white">?</span>
        </motion.div>

        {/* Pulse effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-ping opacity-20"></div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Portfolio Assistant</h3>
                    <p className="text-xs text-white/80">
                      Here to help you explore
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div key={message.id}>
                  <div
                    className={`flex items-start space-x-3 ${message.sender === "user"
                      ? "justify-end"
                      : "justify-start"
                      }`}
                  >
                    {message.sender === "bot" && (
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}

                    <div
                      className={`max-w-[280px] p-3 rounded-2xl ${message.sender === "user"
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                        : "bg-white border border-gray-200 text-gray-800"
                        }`}
                    >
                      <pre className="whitespace-pre-wrap text-sm font-sans">
                        {message.text}
                      </pre>
                      <div className="text-xs mt-2 opacity-70">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>

                    {message.sender === "user" && (
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-gray-600" />
                      </div>
                    )}
                  </div>

                  {/* Suggested Actions */}
                  {message.sender === "bot" &&
                    message.suggestedActions &&
                    message.suggestedActions.length > 0 && (
                      <div className="ml-11 mt-3 flex flex-wrap gap-2">
                        {message.suggestedActions.map((actionId) => {
                          const action = quickActions.find(
                            (a) => a.id === actionId
                          );
                          return action ? (
                            <button
                              key={actionId}
                              onClick={() => handleQuickAction(actionId)}
                              className="px-3 py-1 bg-blue-50 hover:bg-blue-100 text-blue-600 text-xs rounded-full border border-blue-200 transition-colors flex items-center space-x-1"
                            >
                              <action.icon className="w-3 h-3" />
                              <span>{action.text}</span>
                            </button>
                          ) : null;
                        })}
                      </div>
                    )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white border border-gray-200 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {showQuickActions && messages.length === 0 && (
              <div className="p-4 bg-white border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">
                  Quick Questions:
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.slice(0, 4).map((action) => (
                    <button
                      key={action.id}
                      onClick={() => handleQuickAction(action.id)}
                      className="p-2 text-left text-xs bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors flex items-center space-x-2"
                    >
                      <action.icon className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700">{action.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about Pragye's work..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation shortcuts */}
              <div className="mt-3 flex justify-center space-x-4 text-xs">
                {[
                  { name: "About", id: "about", icon: User },
                  { name: "Projects", id: "projects", icon: Briefcase },
                  { name: "Contact", id: "contact", icon: Mail },
                ].map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    <section.icon className="w-3 h-3" />
                    <span>{section.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Main Portfolio Component
export default function CodexPortfolio() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <WebsiteShowcase />
      <AboutSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <ApproachSection />
      <CTASection />
      <FAQSection />
      <Footer />
      <PortfolioChatbot />
    </div>
  );
}
