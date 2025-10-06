import { FaHeart, FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About AWS", href: "/about-aws" },
    { name: "About MAIT", href: "/about-mait" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, name: "LinkedIn", url: "#", color: "hover:text-blue-400" },
    { icon: <FaTwitter />, name: "Twitter", url: "#", color: "hover:text-blue-300" },
    { icon: <FaGithub />, name: "GitHub", url: "#", color: "hover:text-gray-300" },
    { icon: <FaInstagram />, name: "Instagram", url: "#", color: "hover:text-pink-400" }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-aws-orange to-blue-400 bg-clip-text text-transparent mb-4">
              AWS × MAIT
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Bridging cloud innovation with academic excellence for the future of technology education.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-aws-orange">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-aws-orange transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Connect With Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-lg ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20`}
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
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                Privacy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
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