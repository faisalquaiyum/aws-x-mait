import {
  FaGraduationCap,
  FaUsers,
  FaLightbulb,
  FaAward,
  FaLaptopCode,
  FaHandshake,
  FaTrophy,
  FaArrowRight,
} from "react-icons/fa";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const getGlowShadow = (colorClass) => {
  switch (colorClass) {
    case 'text-blue-400':
      return 'hover:shadow-[0_0_20px_rgba(96,165,250,0.6)] hover:border-blue-400';
    case 'text-green-400':
      return 'hover:shadow-[0_0_20px_rgba(52,211,153,0.6)] hover:border-green-400';
    case 'text-orange-400':
      return 'hover:shadow-[0_0_20px_rgba(251,146,60,0.6)] hover:border-orange-400';
    case 'text-purple-400':
      return 'hover:shadow-[0_0_20px_rgba(192,132,252,0.6)] hover:border-purple-400';
    default:
      return 'hover:shadow-xl';
  }
};


const AboutMAIT = () => {
  useEffect(() => {
    AOS.init({ duration: 800 , once: true});
  }, []);

  const highlights = [
    {
      icon: FaGraduationCap,
      iconColor: "text-orange-400",
      title: "Quality Education",
      description: "World-class curriculum with industry-aligned programs.",
      aos: "zoom-in", 
    },
    {
      icon: FaUsers,
      iconColor: "text-blue-400",
      title: "Expert Faculty",
      description: "Experienced professors and industry veterans guiding innovation.",
      aos: "fade-up", 
    },
    {
      icon: FaLightbulb,
      iconColor: "text-yellow-400",
      title: "Innovation Hub",
      description: "Cutting-edge labs fostering creativity and breakthrough research.",
      aos: "zoom-in-up", 
    },
    {
      icon: FaAward,
      iconColor: "text-purple-400",
      title: "Excellence",
      description: "Ranked among top institutes for academics and placements.",
      aos: "fade-right", 
    },
    {
      icon: FaLaptopCode,
      iconColor: "text-teal-400",
      title: "Technology Focus",
      description: "Modern infrastructure supporting tech-driven learning.",
      aos: "fade-down", 
    },
    {
      icon: FaHandshake,
      iconColor: "text-pink-400",
      title: "Industry Connect",
      description: "Strong ties with top companies for career opportunities.",
      aos: "flip-left", 
    },
  ];

  const stats = [
    { label: "Students", value: "5000+", color: "text-blue-400", aos: "fade-right" }, 
    { label: "Expert Faculty", value: "200+", color: "text-green-400", aos: "fade-up" }, 
    { label: "Placement Rate", value: "95%+", color: "text-orange-400", aos: "fade-down" }, 
    { label: "Years Legacy", value: "50+", color: "text-purple-400", aos: "fade-left" }, 
  ];

  return (
    <div className="p-0 bg-white rounded-xl">
      <div className="bg-gray-950 text-white min-h-screen py-16 px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16 md:mb-20 animate-fade-in-down" data-aos="fade-down">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            About <span className="text-orange-400">MAIT</span>
          </h1>
          <p 
            className="text-gray-300 max-w-3xl mx-auto text-base sm:text-xl font-light"
          >
            Maharaja Agrasen Institute of Technology — shaping future engineers through excellence in education, cutting-edge research, and industry-aligned innovation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20 md:mb-24 transition-all duration-200 ease-in-out">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className={`bg-gray-800 border border-gray-700 p-4 sm:p-6 rounded-2xl text-center shadow-md hover:bg-gray-700 hover:scale-[1.03] hover:translate-y-[-6px] transition-all duration-200 ease-in-out ${getGlowShadow(s.color)}`}
              data-aos={s.aos} 
              data-aos-delay={idx * 120} 
            >
              <div className={`text-3xl sm:text-4xl font-extrabold mb-1 ${s.color}`}>{s.value}</div>
              <div className="text-gray-300 text-sm sm:text-base font-semibold tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12 my-16 md:my-20">
          <div className="w-full lg:w-1/2 relative group overflow-hidden rounded-3xl shadow-2xl" data-aos="fade-right"> 
            <img
              src="/mait.jpg"
              alt="College Campus"
              className="w-full h-64 md:h-96 object-cover rounded-3xl transition-transform duration-500 hover:scale-105 cursor-pointer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl pointer-events-none transition-opacity duration-500 group-hover:opacity-60"></div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 animate-fade-in-up" data-aos="fade-left"> 
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                MAIT
              </span>
            </h2>
            <p className="text-gray-300 text-base md:text-lg" aos="fade-up">
              Maharaja Agrasen Institute of Technology (MAIT) offers a vibrant campus life, cutting-edge infrastructure, and world-class education in the heart of Delhi. Our campus is equipped with high-tech labs, research centers, and collaborative learning spaces.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-3" data-aos="fade-right"> 
                <FaGraduationCap className="text-cyan-400" />
                <span>State-of-the-art Classrooms & Labs</span>
              </li>
              <li className="flex items-center gap-3" data-aos="fade-up"> 
                <FaUsers className="text-green-400" />
                <span>Student Societies & Cultural Events</span>
              </li>
              <li className="flex items-center gap-3" data-aos="zoom-in"> 
                <FaTrophy className="text-yellow-400" />
                <span>Top Placements Across MNCs</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-20 md:mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 md:mb-10">
            Why Choose <span className="text-orange-400">MAIT?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {highlights.map((h, i) => {
              const IconTag = h.icon;
              return (
                <div
                  key={i}
                  className="group bg-gray-900 border border-gray-700 p-6 rounded-2xl hover:shadow-2xl hover:scale-[1.02] hover:border-orange-400 transition-all duration-300 text-center"
                  data-aos={h.aos} 
                  data-aos-delay={i * 140}
                >
                  <div className="mb-4 flex justify-center">
                    <IconTag className={`text-3xl transition-transform duration-300 group-hover:scale-125 ${h.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    {h.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{h.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div 
          className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-6 md:p-10 rounded-3xl text-center shadow-2xl mt-16 md:mt-24 animate-fade-in-up" 
          data-aos="flip-up" 
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4 text-white">
            Ready to Build the <span className="text-yellow-300">Future?</span>
          </h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto text-sm md:text-base">
            Join thousands of successful engineers who started their journey at MAIT. Experience a world-class campus, vibrant research, and career opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <button 
              className="group relative bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 md:px-6 md:py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[0_0_25px_rgba(251,146,60,0.8)] flex items-center justify-center overflow-hidden"
            >
              Apply Now
              <FaArrowRight 
                className="ml-2 transform translate-x-0 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </button>

            <button className="border border-white hover:bg-white hover:text-black px-5 py-2 md:px-6 md:py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMAIT;