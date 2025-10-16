import {
  FaHeart,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "AWS", href: "/about-aws" },
    { name: "MAIT", href: "/about-mait" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "#",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      url: "#",
      color: "hover:text-blue-300",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "#",
      color: "hover:text-gray-300",
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      url: "#",
      color: "hover:text-pink-400",
    },
  ];

  return (
    <footer className="bg-gray-900/80 backdrop-blur-md border-t border-gray-700/30 text-white">
      <div className="container mx-auto px-8 md:px-12 py-12">
        <div className="grid md:grid-cols-4 gap-8 items-start">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-4">AWS×MAIT</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Bridging cloud innovation with academic excellence for the future
              of technology education.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-aws-orange transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-4 text-sm text-gray-300 flex flex-col items-center md:items-start">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-white mt-1 flex-shrink-0" />
                <p className="leading-relaxed">
                  MAIT, Plot No 1 Rohini, Sector 22, PSP Area, Delhi, 110086
                </p>
              </div>
              <a
                href="mailto:contact@awsxmait.com"
                className="flex items-center gap-3 hover:text-aws-orange transition-colors duration-300"
              >
                <FaEnvelope className="text-white flex-shrink-0" />
                <span>contact@awsxmait.com</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-11 h-11 border-[1px] border-gray-700/50 bg-gray-800/30 backdrop-blur-xl rounded-full flex items-center justify-center text-base text-gray-400 hover:text-white hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:scale-110"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} AWS × MAIT Partnership. All rights reserved.
            </div>
            <div className="flex space-x-4 text-sm">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
