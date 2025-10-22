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
import { motion } from "framer-motion";

const AuroraBackground = () => (
  <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF9900]/20 rounded-full filter blur-3xl animate-pulse" 
         style={{ animationDelay: '2s' }} />
    <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-600/20 rounded-full filter blur-3xl animate-pulse" 
         style={{ animationDelay: '4s' }} />
  </div>
);

const AboutAWS = () => {
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
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const statVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white relative overflow-hidden">
      <AuroraBackground />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-28">
        <motion.div
          className="text-center max-w-5xl mx-auto mb-16 sm:mb-20 md:mb-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4 sm:mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#FF9900]/10 border border-[#FF9900]/30 rounded-full text-[#FF9900] text-xs sm:text-sm font-semibold tracking-wide">
              ☁️ POWERING THE CLOUD
            </span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 px-4">
            The Global Standard for
            <br />
            <span className="bg-gradient-to-r from-[#FF9900] via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Cloud Innovation
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Discover the unparalleled power, security, and scale of{" "}
            <span className="text-[#FF9900] font-semibold">
              Amazon Web Services
            </span>
            —the platform fueling progress for startups, enterprises, and your
            college society.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-16 sm:mb-24 md:mb-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-700/50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-center backdrop-blur-sm transition-all duration-300 hover:border-[#FF9900] hover:shadow-[0_0_20px_rgba(255,153,0,0.2)] cursor-pointer"
              variants={statVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative z-10">
                <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 transition-transform duration-300 group-hover:scale-110">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-[#FF9900] to-orange-600 bg-clip-text text-transparent mb-2 sm:mb-3">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-gray-300 font-semibold tracking-wide">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        
        <div className="mb-16 sm:mb-20 md:mb-32">
          <motion.div
            className="text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-700/50 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-sm transition-all duration-300 hover:border-[#FF9900] hover:shadow-[0_0_30px_rgba(255,153,0,0.2)] overflow-hidden flex flex-col min-h-[280px] sm:min-h-[300px] cursor-pointer"
                variants={cardVariants}
                whileHover={{ y: -8 }}
              >
                
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`}/>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-4xl sm:text-5xl text-gray-400 group-hover:text-[#FF9900] transition-all duration-300 mb-4 sm:mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-[#FF9900] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                    {feature.description}
                  </p>
                </div>

                {/* Simple corner accents */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#FF9900]/0 group-hover:bg-[#FF9900]/10 rounded-bl-full transition-all duration-300" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-600/0 group-hover:bg-purple-600/10 rounded-tr-full transition-all duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>

       
        <motion.div
          className="text-center relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF9900]/5 to-transparent blur-3xl" />
          
          <div className="relative z-10 bg-gradient-to-br from-gray-900/60 to-gray-900/30 border border-gray-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 backdrop-blur-sm max-w-4xl mx-auto overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
                Ready to Build the{" "}
                <span className="text-[#FF9900]">Future</span>?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                Start your journey with the same tools that power Netflix, Airbnb,
                and the world's most innovative companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center px-4">
                <motion.button
                  className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#FF9900] hover:bg-[#ec8b00] text-white text-sm sm:text-base md:text-lg font-bold rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(255,153,0,0.3)] hover:shadow-[0_0_30px_rgba(255,153,0,0.4)] relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  🚀 Explore Resources
                </motion.button>
                <motion.button
                  className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gray-700/50 hover:bg-gray-700 text-white text-sm sm:text-base md:text-lg font-bold rounded-xl transition-all duration-200 border-2 border-gray-600 hover:border-[#FF9900] relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  💼 Join Our Society
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutAWS;