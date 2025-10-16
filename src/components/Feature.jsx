import {
  FaCloud,
  FaGraduationCap,
  FaUsers,
  FaLaptopCode,
  FaCertificate,
  FaRocket,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaCloud />,
    title: "AWS Cloud Training",
    text: "Master cloud computing with hands-on AWS training and real-world projects.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 2,
    icon: <FaGraduationCap />,
    title: "Academic Excellence",
    text: "Industry-aligned curriculum designed by experts to bridge the gap between academia and industry.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    icon: <FaLaptopCode />,
    title: "Hands-on Labs",
    text: "Practice with cutting-edge tools and technologies in our state-of-the-art labs.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    icon: <FaUsers />,
    title: "Expert Mentorship",
    text: "Learn from AWS certified professionals and experienced faculty members.",
    gradient: "from-green-500 to-teal-500",
  },
  {
    id: 5,
    icon: <FaCertificate />,
    title: "Industry Certifications",
    text: "Gain recognized AWS certifications to boost your career prospects.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: 6,
    icon: <FaRocket />,
    title: "Career Opportunities",
    text: "Connect with top tech companies and unlock exciting career opportunities.",
    gradient: "from-indigo-500 to-purple-500",
  },
];

const Feature = () => {
  return (
    <section id="features" className="py-20 bg-[#0a0b0f] relative">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Empowering Future{" "}
            <span className="text-[#FF9900]">Cloud Innovators</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Transform your career with AWS×MAIT's comprehensive cloud computing
            program
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-[#1a1d23] rounded-2xl p-8 border border-[#2a2e35] hover:border-[#FF9900]/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
              ></div>

              {/* Icon */}
              <div
                className={`relative w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF9900] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {feature.text}
                </p>

                {/* Explore More Link */}
                <div className="flex items-center gap-2 text-[#FF9900] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Explore more</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#FF9900]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#FF9900]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Feature;
