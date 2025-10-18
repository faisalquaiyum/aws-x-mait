import {
  FaCloud,
  FaShieldAlt,
  FaRocket,
  FaGlobe,
  FaDatabase,
  FaCode,
  FaNetworkWired,
  FaCogs,
} from "react-icons/fa";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { useRef, useState } from "react";

// Enhanced Aurora Background with Multiple Animated Gradients
const AuroraBackground = () => (
  <div className="absolute inset-0 overflow-hidden -z-10">
    <motion.div
      className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-purple-600/30 rounded-full filter blur-[120px]"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
        x: [0, 50, 0],
        y: [0, 30, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-600/25 rounded-full filter blur-[130px]"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.25, 0.4, 0.25],
        x: [0, -40, 0],
        y: [0, 50, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      }}
    />
    <motion.div
      className="absolute bottom-1/4 left-1/3 w-[550px] h-[550px] bg-[#FF9900]/20 rounded-full filter blur-[110px]"
      animate={{
        scale: [1, 1.25, 1],
        opacity: [0.2, 0.35, 0.2],
        x: [0, 30, 0],
        y: [0, -40, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      }}
    />
    <motion.div
      className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-pink-600/20 rounded-full filter blur-[100px]"
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.2, 0.4, 0.2],
        x: [0, -30, 0],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 3,
      }}
    />
  </div>
);

// Floating particles with more dynamic movement
const FloatingParticles = () => {
  const particles = Array.from({ length: 30 });
  
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#FF9900]/50 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// NEW: Smooth Scroll Progress Bar
const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF9900] via-orange-500 to-amber-500 origin-left z-50"
      style={{ scaleX }}
    />
  );
};

// NEW: Magnetic Card Component with cursor following
const MagneticCard = ({ children, className, variants, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    mouseX.set(x * 0.1);
    mouseY.set(y * 0.1);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        x: mouseX,
        y: mouseY,
      }}
      transition={{
        x: { type: "spring", stiffness: 200, damping: 20 },
        y: { type: "spring", stiffness: 200, damping: 20 },
      }}
    >
      {children}
    </motion.div>
  );
};

// NEW: Spotlight effect that follows cursor
const SpotlightCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const background = useMotionTemplate`
    radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255, 153, 0, 0.15), transparent 80%)
  `;

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-30"
      style={{ background }}
      onMouseMove={handleMouseMove}
    />
  );
};

const AboutAWS = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects for hero section
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(heroProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.95]);

  const features = [
    {
      icon: <FaCloud />,
      title: "Cloud Computing",
      description:
        "Scalable infrastructure powering millions of applications worldwide with unmatched reliability and performance.",
      gradient: "from-blue-600/10 to-cyan-600/10",
    },
    {
      icon: <FaShieldAlt />,
      title: "Security & Compliance",
      description:
        "Enterprise-grade security with 300+ compliance certifications across industries and regions.",
      gradient: "from-purple-600/10 to-pink-600/10",
    },
    {
      icon: <FaRocket />,
      title: "Innovation at Scale",
      description:
        "Cutting-edge technologies driving digital transformation and unlocking future possibilities.",
      gradient: "from-orange-600/10 to-red-600/10",
    },
    {
      icon: <FaDatabase />,
      title: "Data & AI",
      description:
        "Advanced analytics, machine learning, and AI tools for extracting intelligent insights from your data.",
      gradient: "from-green-600/10 to-emerald-600/10",
    },
    {
      icon: <FaGlobe />,
      title: "Global Infrastructure",
      description:
        "32 geographic regions with 102 Availability Zones for ultra-low latency and high availability.",
      gradient: "from-cyan-600/10 to-blue-600/10",
    },
    {
      icon: <FaCode />,
      title: "Developer Tools",
      description:
        "Comprehensive suite of SDKs, APIs, and tools for modern application development.",
      gradient: "from-indigo-600/10 to-purple-600/10",
    },
    {
      icon: <FaNetworkWired />,
      title: "Networking & CDN",
      description:
        "Lightning-fast content delivery with CloudFront and advanced networking capabilities.",
      gradient: "from-pink-600/10 to-rose-600/10",
    },
    {
      icon: <FaCogs />,
      title: "Automation & DevOps",
      description:
        "Streamline workflows with CI/CD pipelines, infrastructure as code, and monitoring.",
      gradient: "from-amber-600/10 to-orange-600/10",
    },
  ];

  const stats = [
    { number: "245+", label: "Cloud Services", icon: "☁️" },
    { number: "32", label: "Global Regions", icon: "🌍" },
    { number: "99.99%", label: "Uptime SLA", icon: "⚡" },
    { number: "1M+", label: "Active Customers", icon: "🚀" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  // Enhanced card animation with more dramatic entrance
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: 120,
      rotateY: 30,
      rotateX: 15,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const statVariants = (index) => ({
    hidden: { 
      opacity: 0, 
      x: 100,
      rotateZ: index % 2 === 0 ? 20 : -20,
      scale: 0.7,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateZ: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  });

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-[#0a0b0f] text-white relative overflow-hidden"
      style={{ perspective: "1500px" }}
    >
      {/* NEW: Scroll Progress Bar */}
      <ScrollProgressBar />
      
      {/* NEW: Spotlight Cursor Effect */}
      <SpotlightCursor />
      
      <AuroraBackground />
      <FloatingParticles />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-28">
        {/* Hero Section with Parallax */}
        <motion.div
          ref={heroRef}
          className="text-center max-w-5xl mx-auto mb-16 sm:mb-20 md:mb-32"
          style={{ 
            y: heroY, 
            opacity: heroOpacity,
            scale: heroScale,
          }}
        >
          <motion.div
            className="inline-block mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.5, rotateZ: -10 }}
            animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
          >
            <motion.span 
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#FF9900]/10 border border-[#FF9900]/30 rounded-full text-[#FF9900] text-xs sm:text-sm font-semibold tracking-wide inline-block"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 153, 0, 0.4)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              ☁️ POWERING THE CLOUD
            </motion.span>
          </motion.div>

          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            The Global Standard for
            <br />
            <motion.span 
              className="bg-gradient-to-r from-[#FF9900] via-orange-500 to-amber-500 bg-clip-text text-transparent inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% auto",
              }}
            >
              Cloud Innovation
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Discover the unparalleled power, security, and scale of{" "}
            <span className="text-[#FF9900] font-semibold">
              Amazon Web Services
            </span>
            —the platform fueling progress for startups, enterprises, and your
            college society.
          </motion.p>
        </motion.div>

        {/* Stats Section with Magnetic Effect */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-16 sm:mb-24 md:mb-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {stats.map((stat, index) => (
            <MagneticCard
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-700/50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-center backdrop-blur-xl transition-all duration-500 hover:border-[#FF9900] hover:shadow-[0_0_30px_rgba(255,153,0,0.3)] overflow-hidden cursor-pointer"
              variants={statVariants(index)}
              index={index}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF9900]/10 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF9900]/0 to-[#FF9900]/0 group-hover:from-[#FF9900]/5 group-hover:to-[#FF9900]/10 transition-all duration-500 rounded-2xl" />
              
              <div className="relative z-10">
                <motion.div 
                  className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3"
                  whileHover={{ 
                    scale: 1.3,
                    rotate: 360,
                    transition: { duration: 0.6, type: "spring" }
                  }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-[#FF9900] to-orange-600 bg-clip-text text-transparent mb-2 sm:mb-3"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 10,
                    delay: index * 0.1 + 0.3,
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-xs sm:text-sm md:text-base text-gray-300 font-semibold tracking-wide">
                  {stat.label}
                </div>
              </div>
            </MagneticCard>
          ))}
        </motion.div>

        {/* Features Grid with Magnetic Cards */}
        <div className="mb-16 sm:mb-20 md:mb-32">
          <motion.div
            className="text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-4">
              The Cornerstones of{" "}
              <span className="text-[#FF9900]">Innovation</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              AWS isn't just one service—it's a universe of capabilities
              designed to help you build better, faster, and smarter.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            style={{ 
              transformStyle: "preserve-3d",
              perspective: "1500px",
            }}
          >
            {features.map((feature, index) => (
              <MagneticCard
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-700/50 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-xl transition-all duration-500 hover:border-[#FF9900] hover:shadow-[0_0_40px_rgba(255,153,0,0.25)] overflow-hidden flex flex-col min-h-[280px] sm:min-h-[300px] cursor-pointer"
                variants={cardVariants}
                index={index}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF9900]/20 to-transparent"
                  initial={{ x: "-100%", opacity: 0 }}
                  whileHover={{ 
                    x: "100%",
                    opacity: 1,
                    transition: { duration: 1.2 }
                  }}
                />
                
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                
                <motion.div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle at 50% 0%, rgba(255,153,0,0.2), transparent 70%)",
                  }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <motion.div 
                    className="text-4xl sm:text-5xl text-gray-400 group-hover:text-[#FF9900] transition-all duration-500 mb-4 sm:mb-5"
                    whileHover={{ 
                      scale: 1.2,
                      rotateZ: [0, -15, 15, -15, 0],
                      transition: { duration: 0.6 }
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-[#FF9900] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                    {feature.description}
                  </p>
                </div>

                <motion.div 
                  className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-[#FF9900]/0 group-hover:bg-[#FF9900]/10 rounded-bl-full transition-all duration-500"
                  whileHover={{
                    width: "150px",
                    height: "150px",
                  }}
                />
                
                <motion.div 
                  className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-purple-600/0 group-hover:bg-purple-600/10 rounded-tr-full transition-all duration-500"
                  whileHover={{
                    width: "100px",
                    height: "100px",
                  }}
                />
              </MagneticCard>
            ))}
          </motion.div>
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="text-center relative"
          initial={{ opacity: 0, y: 50, rotateX: 20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF9900]/5 to-transparent blur-3xl" />
          
          <div className="relative z-10 bg-gradient-to-br from-gray-900/60 to-gray-900/30 border border-gray-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 backdrop-blur-xl max-w-4xl mx-auto overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #FF9900 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }} />
            </div>
            
            <div className="relative z-10">
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Ready to Build the{" "}
                <span className="text-[#FF9900]">Future</span>?
              </motion.h2>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Start your journey with the same tools that power Netflix, Airbnb,
                and the world's most innovative companies.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.button
                  className="group w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#FF9900] hover:bg-[#ec8b00] text-white text-sm sm:text-base md:text-lg font-bold rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(255,153,0,0.3)] hover:shadow-[0_0_50px_rgba(255,153,0,0.6)] relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    rotateZ: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 inline-flex items-center gap-2">
                    🚀 Explore Resources
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.button>
                <motion.button
                  className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gray-700/50 hover:bg-gray-700 text-white text-sm sm:text-base md:text-lg font-bold rounded-xl transition-all duration-300 border-2 border-gray-600 hover:border-[#FF9900] relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    rotateZ: 2,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">💼 Join Our Society</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF9900]/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutAWS;
