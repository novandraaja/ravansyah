import { useEffect } from "react";
import {
  Linkedin,
  Instagram,
  ExternalLink,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    className={className}
  >
    <path
      fill="#25D366"
      d="M16 2.933c-7.267 0-13.067 5.8-13.067 13.067 0 2.3.6 4.5 1.733 6.467L2.933 29.067l6.733-1.733a13.046 13.046 0 006.334 1.6c7.267 0 13.067-5.8 13.067-13.067S23.267 2.933 16 2.933zm0 23.467c-2.2 0-4.367-.6-6.233-1.7l-.433-.267-4.067 1.067 1.1-3.967-.267-.433a10.922 10.922 0 01-1.6-5.8c0-6.033 4.934-10.967 10.967-10.967 6.033 0 10.967 4.933 10.967 10.967S22.033 26.4 16 26.4zm6.4-8.1c-.3-.167-1.767-.867-2.033-.967-.267-.1-.467-.133-.667.134-.2.267-.767.966-.933 1.167-.167.2-.334.233-.633.066-.3-.167-1.267-.467-2.4-1.5-.9-.8-1.5-1.8-1.667-2.1-.167-.3-.017-.467.134-.633.134-.134.3-.333.467-.5.134-.167.2-.3.3-.5.1-.2.05-.367 0-.5-.067-.167-.6-1.434-.833-1.967-.2-.467-.4-.4-.667-.4H11c-.267 0-.5.066-.733.3-.2.2-.967.933-.967 2.267 0 1.333.967 2.633 1.1 2.8.133.167 1.9 2.867 4.6 4.033.633.267 1.133.433 1.517.566.637.2 1.217.167 1.667.1.5-.067 1.533-.633 1.75-1.25.233-.617.233-1.15.167-1.25-.066-.1-.233-.167-.5-.3z"
    />
  </svg>
);

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/raditia-novandra-892311374?trk=contact-info",
    color: "#0A66C2",
    gradientClass: "bg-gradient-to-r from-[#0A66C2] to-[#0077B5]",
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@rnvannsyah_",
    icon: Instagram,
    url: "https://www.instagram.com/rnvannsyah_/",
    color: "#E4405F",
    gradientClass: "bg-gradient-to-r from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
  },
  {
    name: "WhatsApp",
    displayName: "WhatsApp",
    subText: "Chat me",
    icon: WhatsAppIcon,
    url: "https://wa.me/6281233696276",
    color: "#25D366",
    gradientClass: "bg-gradient-to-r from-[#25D366] to-[#128C7E]",
  },
];

const SocialLinks = () => {
  useEffect(() => {
    AOS.init({ offset: 10 });
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3 className="text-xl font-semibold text-white flex items-center gap-2" data-aos="fade-down">
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        Connect With Me
      </h3>

      <div className="grid grid-cols-1 gap-4 mt-6">
        {socialLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500
              ${link.name === "WhatsApp" ? "col-span-2": ""}`}
            data-aos="fade-up"
            data-aos-delay={100 + index * 100}
          >
            {/* Gradient Background */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${link.gradientClass}`} />

            {/* Icon */}
            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                group-hover:scale-125 group-hover:opacity-30"
                style={{ backgroundColor: link.color }}
              />
              <div className="relative p-2 rounded-lg">
                <link.icon
                  className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                  style={{ color: link.color }}
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col min-w-0 flex-grow">
              <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                {link.displayName}
              </span>
              <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                {link.subText}
              </span>
            </div>

            <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;