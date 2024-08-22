import { LOGO_URL } from "../utils/constants";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo-container">
        <img className="footer-logo" src={LOGO_URL} />
        <h3>©️ Rajeev Technologies Pvt. Ltd </h3>
      </div>
      <div className="footer-content">
        <div className="quick-links">
          <div>
            <h2>Comapany</h2>
            <ul>
              <li>About</li>
              <li>Carrer</li>
              <li>Team</li>
            </ul>
          </div>
          <div>
            <h2>Contact Us</h2>
            <ul>
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
          </div>
        </div>
        <div className="social-links">
          <h2>Social Links</h2>
          <div className="links">
          <a className="links-icon"
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a className="links-icon"
            href="https://www.twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a className="links-icon"
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a className="links-icon"
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a className="links-icon"
            href="https://www.github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
