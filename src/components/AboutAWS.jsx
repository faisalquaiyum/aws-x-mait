import {
  FaCloud,
  FaShieldAlt,
  FaRocket,
  FaGlobe,
  FaDatabase,
  FaCode,
  FaMobile,
  FaChartLine,
} from "react-icons/fa";

const AboutAWS = () => {
  const features = [
    {
      icon: <FaCloud className="text-4xl text-blue-500" />,
      title: "Cloud Computing",
      description:
        "Scalable cloud infrastructure powering millions of applications worldwide with unmatched reliability.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-green-500" />,
      title: "Security & Compliance",
      description:
        "Enterprise-grade security with compliance certifications across industries and regions.",
    },
    {
      icon: <FaRocket className="text-4xl text-aws-orange" />,
      title: "Innovation",
      description:
        "Cutting-edge technologies driving digital transformation and future possibilities.",
    },
    {
      icon: <FaGlobe className="text-4xl text-purple-500" />,
      title: "Global Reach",
      description:
        "Data centers in regions worldwide for optimal performance and low latency.",
    },
    {
      icon: <FaDatabase className="text-4xl text-indigo-500" />,
      title: "Data Analytics",
      description:
        "Advanced analytics and machine learning tools for intelligent insights.",
    },
    {
      icon: <FaCode className="text-4xl text-red-500" />,
      title: "Developer Tools",
      description:
        "Comprehensive suite of tools for modern application development.",
    },
    {
      icon: <FaMobile className="text-4xl text-pink-500" />,
      title: "Mobile & IoT",
      description:
        "Solutions for mobile applications and Internet of Things deployments.",
    },
    {
      icon: <FaChartLine className="text-4xl text-cyan-500" />,
      title: "Business Growth",
      description:
        "Scalable solutions that grow with your business needs and ambitions.",
    },
  ];

  const stats = [
    { number: "200+", label: "Cloud Services", color: "text-blue-500" },
    { number: "32", label: "Regions Worldwide", color: "text-green-500" },
    { number: "99.99%", label: "Uptime SLA", color: "text-aws-orange" },
    { number: "1M+", label: "Active Customers", color: "text-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-aws-orange/10 to-blue-500/10"></div>
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-6 py-3 bg-aws-orange/20 rounded-full text-aws-orange font-semibold text-lg mb-8 backdrop-blur-sm border border-aws-orange/30">
              ☁️ World's Leading Cloud Platform
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-8 leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-aws-orange via-yellow-400 to-orange-600 bg-clip-text text-transparent">
                Amazon Web Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Powering innovation and transforming businesses through
              comprehensive cloud computing services, advanced technologies, and
              unparalleled global infrastructure.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200/50 dark:border-gray-700/50"
            >
              <div
                className={`text-4xl md:text-5xl font-black ${stat.color} mb-3`}
              >
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-semibold text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose AWS?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover the comprehensive suite of services that make AWS the
              preferred choice for millions of customers worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-200/50 dark:border-gray-700/50 hover:border-aws-orange/30"
              >
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-aws-orange transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join millions of customers who trust AWS to power their applications
            and accelerate innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-aws-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2">
              Get Started Free
              <FaRocket className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group border-2 border-aws-orange text-aws-orange hover:bg-aws-orange hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAWS;
