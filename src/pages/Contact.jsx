import {
  FaPhone,
  FaEnvelope,
  FaSignInAlt,
  FaUserShield,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is AWS × MAIT partnership program?",
      answer:
        "The AWS × MAIT partnership is a collaboration between Amazon Web Services and Maharaja Agrasen Institute of Technology to provide students with hands-on cloud computing education, industry-recognized certifications, and real-world project experience.",
    },
    {
      id: 2,
      question: "How can I enroll in AWS courses?",
      answer:
        "Students can enroll through the MAIT academic portal or contact the AWS club coordinator. Enrollment is typically open at the beginning of each semester. Check with your department for specific course availability.",
    },
    {
      id: 3,
      question: "Are AWS certifications included in the program?",
      answer:
        "Yes! Students get access to AWS certification preparation courses and discounted exam vouchers. We offer guidance for various certifications including AWS Cloud Practitioner, Solutions Architect, and Developer Associate.",
    },
    {
      id: 4,
      question: "What support is available for technical issues?",
      answer:
        "We provide comprehensive technical support through dedicated lab hours, online forums, peer mentoring, and direct faculty assistance. You can also access AWS documentation and community resources.",
    },
    {
      id: 5,
      question: "Can I work on real projects during the program?",
      answer:
        "Absolutely! The program emphasizes hands-on learning with real-world projects, hackathons, and AWS PartyRock challenges. Students collaborate on cloud-based solutions and build their portfolios.",
    },
    {
      id: 6,
      question: "What are the prerequisites for AWS courses?",
      answer:
        "Basic programming knowledge and fundamental understanding of computer science concepts are recommended. Most courses are designed for beginners, with advanced tracks available for experienced students.",
    },
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const additionalResources = [
    {
      title: "Self-service",
      description:
        "Access curated knowledge and community support for AWS  MAIT programs",
      link: "#",
    },
    {
      title: "Program information",
      description: "Learn about AWS  MAIT courses and certification programs",
      link: "#",
    },
    {
      title: "Report abuse",
      description: "Report abusive activity or suspicious behavior",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0b0f] relative">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-[#2a2e35]">
        <div className="container mx-auto px-8 md:px-12 lg:px-16 py-16 md:py-20">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Contact <span className="text-[#FF9900]">AWS MAIT</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              General support for enrollment, technical assistance, and
              partnership inquiries
            </p>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#FF9900]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-8 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Find answers to common questions about the AWS × MAIT program
          </p>

          <div className="space-y-6 mt-10">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-[#1a1d23] border border-[#2a2e35] rounded-xl overflow-hidden transition-all duration-300 hover:border-[#FF9900]/50"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left transition-colors duration-200 hover:bg-[#2a2e35]/30"
                >
                  <span className="text-white font-semibold text-lg pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openFaq === faq.id ? (
                      <FaChevronUp className="text-[#FF9900] text-xl" />
                    ) : (
                      <FaChevronDown className="text-gray-400 text-xl" />
                    )}
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openFaq === faq.id
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 md:px-8 pb-6 pt-2">
                    <p className="text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="container mx-auto px-8 md:px-12 lg:px-16 pb-16 md:pb-20">
        <div className="bg-[#1a1d23] border border-[#2a2e35] rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Additional Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalResources.map((resource, index) => (
              <div key={index} className="group">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#FF9900] transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-400 mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  className="inline-flex items-center text-[#FF9900] hover:text-[#FF9900]/80 font-semibold"
                >
                  Learn more
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="container mx-auto px-8 md:px-12 lg:px-16 pb-16 md:pb-20">
        <div className="bg-[#1a1d23] border border-[#2a2e35] rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Direct Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Address */}
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto">
                <FaSignInAlt className="text-white text-xl" />
              </div>
              <h3 className="text-white font-semibold text-lg">Address</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Maharaja Agrasen Institute of Technology
                <br />
                Sector 22, Rohini
                <br />
                Delhi - 110086, India
              </p>
            </div>

            {/* Phone */}
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto">
                <FaPhone className="text-white text-xl" />
              </div>
              <h3 className="text-white font-semibold text-lg">Phone</h3>
              <p className="text-gray-400 text-sm">
                +91-11-2757-1178
                <br />
                +91-11-2757-1179
              </p>
            </div>

            {/* Email */}
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <h3 className="text-white font-semibold text-lg">Email</h3>
              <p className="text-gray-400 text-sm">
                info@mait.ac.in
                <br />
                admission@mait.ac.in
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto">
                <FaUserShield className="text-white text-xl" />
              </div>
              <h3 className="text-white font-semibold text-lg">Office Hours</h3>
              <p className="text-gray-400 text-sm">
                Mon-Fri: 9:00 AM - 5:00 PM
                <br />
                Sat: 9:00 AM - 2:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
