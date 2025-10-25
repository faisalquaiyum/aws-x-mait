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
    { name: "Teams", href: "/teams" },
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
      url: "https://www.instagram.com/aws.academy_mates?igsh=M2p6bnFvajV3NTc0",
      color: "hover:text-pink-400",
    },
  ];

  return (
    <footer className="bg-[#1a1d23] border-t border-[#2a2e35] text-white">
      <div className="container mx-auto px-8 md:px-12 py-12">
        <div className="grid md:grid-cols-4 gap-8 items-start">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-4">AWS×MAIT</h3>
            <p className="text-[#aab7b8] text-sm leading-relaxed">
              Bridging cloud innovation with academic excellence for the future
              of technology education.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-base font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-[#aab7b8] hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h4 className="text-base font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-4 text-sm text-[#aab7b8] flex flex-col items-center md:items-start">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#aab7b8] mt-1 flex-shrink-0" />
                <p className="leading-relaxed">
                  MAIT, Plot No 1 Rohini, Sector 22, PSP Area, Delhi, 110086
                </p>
              </div>
              <a
                href="mailto:contact@awsxmait.com"
                className="flex items-center gap-3 hover:text-white transition-colors duration-200"
              >
                <FaEnvelope className="text-[#aab7b8] flex-shrink-0" />
                <span>contact@awsxmait.com</span>
              </a>
              <a
                href="/contact"
                className="text-[#aab7b8] hover:text-white transition-colors duration-200"
              >
                Visit Contact Page
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h4 className="text-base font-semibold mb-4 text-white">
              Follow Us
            </h4>
            <div className="flex justify-center md:justify-start space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  className="w-10 h-10 bg-transparent border border-[#2a2e35] hover:bg-[#2a2e35] hover:border-white rounded-md flex items-center justify-center text-base text-[#aab7b8] hover:text-white transition-colors duration-200"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2a2e35] mt-10 pt-6">
          <div className="flex justify-center items-center">
            <div className="text-[#aab7b8] text-sm text-center">
              © {currentYear}, AWS×MAIT Partnership. All rights reserved.
            </div>
            {/* <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-[#aab7b8] hover:text-white transition-colors duration-200"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-[#aab7b8] hover:text-white transition-colors duration-200"
              >
                Terms
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
