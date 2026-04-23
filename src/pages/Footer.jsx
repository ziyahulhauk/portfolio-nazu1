import "./footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaTwitter,
  FaGlobe,
} from "react-icons/fa";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  whatsapp: FaWhatsapp,
  email: FaEnvelope,
  call: FaPhone,
  twitter: FaTwitter,
  netlify: FaGlobe,
};

const links = [
  { name: "GitHub", icon: "github", url: "https://github.com" },
  { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com" },
  { name: "WhatsApp", icon: "whatsapp", url: "https://wa.me/919876543210" },
  { name: "Email", icon: "email", url: "mailto:mail@gmail.com" },
  { name: "Call", icon: "call", url: "tel:+919876543210" },
  { name: "Twitter", icon: "twitter", url: "https://twitter.com" },
  { name: "Netlify", icon: "netlify", url: "https://netlify.com" },
];

const Footer = () => {
  return (
    <footer className="footer">

      <h2 className="footer-title">Let's Connect</h2>

      <div className="footer-grid">

        {links.map((item, index) => {
          const Icon = iconMap[item.icon];

          // safety check
          if (!Icon) return null;

          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`footer-card ${item.icon}`}
            >
              <Icon />
              <span>{item.name}</span>
            </a>
          );
        })}

      </div>

      <p className="footer-bottom">
        © 2026 Portfolio | Built with React 💛
      </p>

    </footer>
  );
};

export default Footer;