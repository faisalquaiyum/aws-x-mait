import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaPaperPlane,
  FaHandshake,
} from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-mait-blue" />,
      title: "Address",
      details: [
        "Maharaja Agrasen Institute of Technology",
        "Sector 22, Rohini, Delhi - 110086, India",
      ],
      color: "text-mait-blue",
    },
    {
      icon: <FaPhone className="text-2xl text-mait-green" />,
      title: "Phone",
      details: ["+91-11-2757-1178", "+91-11-2757-1179"],
      color: "text-mait-green",
    },
    {
      icon: <FaEnvelope className="text-2xl text-aws-orange" />,
      title: "Email",
      details: ["info@mait.ac.in", "admission@mait.ac.in"],
      color: "text-aws-orange",
    },
    {
      icon: <FaClock className="text-2xl text-purple-500" />,
      title: "Office Hours",
      details: ["Mon-Fri: 9:00 AM - 5:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      color: "text-purple-500",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "#",
      color: "hover:text-blue-600",
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      url: "#",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "#",
      color: "hover:text-gray-800 dark:hover:text-white",
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      url: "#",
      color: "hover:text-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-aws-orange/10 to-mait-blue/10"></div>
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-6 py-3 bg-aws-orange/20 rounded-full text-aws-orange font-semibold text-lg mb-8 backdrop-blur-sm border border-aws-orange/30">
              🤝 Get In Touch
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-8 leading-tight">
              Contact{" "}
              <span className="bg-gradient-to-r from-aws-orange via-orange-400 to-mait-blue bg-clip-text text-transparent">
                AWS × MAIT
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Ready to collaborate, innovate, or learn more about our
              partnership? We'd love to hear from you and explore new
              possibilities together.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-aws-orange transition-colors duration-300">
                {info.title}
              </h3>
              <div className="space-y-2">
                {info.details.map((detail, idx) => (
                  <p
                    key={idx}
                    className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Send us a Message
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Whether you're interested in partnerships, have questions about
                our programs, or want to explore collaboration opportunities,
                we're here to help.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-aws-orange focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-aws-orange focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-aws-orange focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Message *
                </label>
                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-aws-orange focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 resize-none"
                  placeholder="Tell us more about your inquiry, partnership ideas, or how we can help..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-aws-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
              >
                <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </button>
            </form>
          </div>

          {/* Partnership & Collaboration Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-aws-orange via-orange-500 to-yellow-500 text-white p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <FaHandshake className="text-5xl mb-6" />
                <h3 className="text-3xl font-bold mb-4">
                  Partnership Opportunities
                </h3>
                <p className="text-lg leading-relaxed mb-6">
                  Explore collaboration opportunities between AWS and MAIT. From
                  cloud training programs to research initiatives, we're
                  building the future of technology education together.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Student Exchange Programs</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Research Collaborations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Industry Training & Certification</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Innovation Workshops</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-mait-blue via-blue-500 to-mait-green text-white p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Connect With Us</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Follow our journey and stay updated with the latest
                  developments in our AWS × MAIT partnership.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-xl ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/30`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Quick Response
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We typically respond to inquiries within 24-48 hours. For urgent
                matters, please call us directly.
              </p>
              <div className="flex items-center space-x-3 text-aws-orange font-semibold">
                <FaPhone />
                <span>+91-11-2757-1178</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Map Section */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50">
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Visit Our Campus
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Located in the heart of Delhi, MAIT offers a modern campus with
                state-of-the-art facilities.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-mait-blue/20 to-aws-orange/20 h-96 flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.994653893379!2d77.06351547529245!3d28.71970577561726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d068dbf44ecd7%3A0xc4ce5551f8ac8360!2sMaharaja%20Agrasen%20Institute%20Of%20Technology(MAIT)!5e0!3m2!1sen!2sin!4v1759774854483!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-b-3xl"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
