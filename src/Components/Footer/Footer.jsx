import "./Footer.css";
import logo from "../../assets/images/white-logo.png";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Branding Section */}
        <div className="footer-brand">
          <img src={logo} alt="Logo" className=" w-100 my-3" />
          <h2 className="brand-logo">YourBrand</h2>
          <p className="brand-description">
            Creating solutions that inspire and empower. Let's build your dream.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            {["Home", "About", "Services", "Portfolio", "Contact"].map(
              (item, index) => (
                <li key={index}>
                  <a href={`/${item.toLowerCase()}`} className="footer-link">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" className="social-icon facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 YourBrand. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

