import {
  FaGraduationCap,
  FaUsers,
  FaLightbulb,
  FaAward,
  FaBook,
  FaLaptopCode,
  FaFlask,
  FaTrophy,
  FaBuilding,
  FaHandshake,
} from "react-icons/fa";

const AboutMAIT = () => {
  const highlights = [
    {
      icon: <FaGraduationCap className="text-4xl text-mait-blue" />,
      title: "Quality Education",
      description:
        "Providing world-class engineering education with cutting-edge curriculum and industry-aligned programs.",
    },
    {
      icon: <FaUsers className="text-4xl text-mait-green" />,
      title: "Expert Faculty",
      description:
        "Distinguished professors and industry professionals with extensive experience and expertise.",
    },
    {
      icon: <FaLightbulb className="text-4xl text-orange-500" />,
      title: "Innovation Hub",
      description:
        "State-of-the-art research facilities fostering creativity and breakthrough innovations.",
    },
    {
      icon: <FaAward className="text-4xl text-purple-500" />,
      title: "Excellence",
      description:
        "Consistently recognized for academic excellence, research achievements, and outstanding placements.",
    },
    {
      icon: <FaLaptopCode className="text-4xl text-blue-500" />,
      title: "Technology Focus",
      description:
        "Advanced labs and modern infrastructure supporting cutting-edge technology learning.",
    },
    {
      icon: <FaHandshake className="text-4xl text-green-500" />,
      title: "Industry Connect",
      description:
        "Strong partnerships with leading companies ensuring excellent placement opportunities.",
    },
  ];

  const achievements = [
    { number: "5000+", label: "Students", color: "text-mait-blue" },
    { number: "200+", label: "Expert Faculty", color: "text-mait-green" },
    { number: "95%+", label: "Placement Rate", color: "text-orange-500" },
    { number: "50+", label: "Years Legacy", color: "text-purple-500" },
  ];

  const departments = [
    {
      name: "Computer Science",
      icon: <FaLaptopCode className="text-2xl" />,
      students: "1200+",
    },
    {
      name: "Electronics & Communication",
      icon: <FaFlask className="text-2xl" />,
      students: "800+",
    },
    {
      name: "Mechanical Engineering",
      icon: <FaBuilding className="text-2xl" />,
      students: "600+",
    },
    {
      name: "Information Technology",
      icon: <FaBook className="text-2xl" />,
      students: "1000+",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-green-900 dark:to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-mait-blue/10 to-mait-green/10"></div>
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-8 leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-mait-blue via-blue-500 to-mait-green bg-clip-text text-transparent">
                MAIT
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Maharaja Agrasen Institute of Technology - Shaping future
              engineers through excellence in education, cutting-edge research,
              and industry-aligned innovation.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200/50 dark:border-gray-700/50"
            >
              <div
                className={`text-4xl md:text-5xl font-black ${achievement.color} mb-3`}
              >
                {achievement.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-semibold text-lg">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        {/* Campus & Mission Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <div className="relative group">
              <img
                src="/mait-campus.jpg"
                alt="MAIT Campus"
                className="w-full h-80 object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Beautiful Campus</h3>
                <p className="text-white/90">
                  Modern facilities in the heart of Delhi
                </p>
              </div>
            </div>

            <div className="relative group">
              <img
                src="/awxXmaitWithTeachers.png"
                alt="AWS × MAIT Partnership with Faculty"
                className="w-full h-80 object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  AWS × MAIT Partnership
                </h3>
                <p className="text-white/90">
                  Collaboration with industry experts
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                To provide world-class engineering education, foster innovation
                and research excellence, and develop socially responsible
                engineers who contribute to society's advancement through
                technology and leadership.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-xl border border-gray-200/30 dark:border-gray-700/30">
                  <FaBook className="text-2xl text-mait-blue" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      Academic Excellence
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Rigorous curriculum and innovative teaching methods
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-xl border border-gray-200/30 dark:border-gray-700/30">
                  <FaFlask className="text-2xl text-mait-green" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      Research Innovation
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Cutting-edge research facilities and projects
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-xl border border-gray-200/30 dark:border-gray-700/30">
                  <FaTrophy className="text-2xl text-orange-500" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      Industry Leadership
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Graduates leading in top technology companies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Departments Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Departments
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive engineering programs designed to meet industry
              demands and foster innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-200/50 dark:border-gray-700/50 hover:border-mait-blue/30"
              >
                <div className="mb-6 flex justify-center text-mait-blue group-hover:scale-110 transition-transform duration-300">
                  {dept.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-mait-blue transition-colors duration-300">
                  {dept.name}
                </h3>
                <p className="text-mait-green font-semibold">
                  {dept.students} Students
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose MAIT?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover what makes MAIT a premier destination for engineering
              education and research excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-200/50 dark:border-gray-700/50 hover:border-mait-blue/30"
              >
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-mait-blue transition-colors duration-300">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* MAIT Leadership Section */}
        <div className="bg-gradient-to-r from-mait-blue via-blue-500 to-mait-green text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-black mb-6">Join the MAIT Legacy</h2>
              <p className="text-xl mb-8 leading-relaxed">
                Be part of a vibrant community of innovators, researchers, and
                future leaders. Experience world-class education, cutting-edge
                research opportunities, and a pathway to success.
              </p>

              <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-white/30 inline-block">
                <img
                  src="/mait-logo.png"
                  alt="MAIT Logo"
                  className="w-32 h-32 mx-auto mb-6"
                />
                <h3 className="text-2xl font-bold mb-2">
                  Maharaja Agrasen Institute of Technology
                </h3>
                <p className="text-white/90">
                  Excellence in Engineering Education
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Shape Your Future?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of successful engineers who started their journey at
            MAIT. Apply now and be part of our legacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-mait-blue hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2">
              Apply Now
              <FaGraduationCap className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group border-2 border-mait-blue text-mait-blue hover:bg-mait-blue hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
              Virtual Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMAIT;
