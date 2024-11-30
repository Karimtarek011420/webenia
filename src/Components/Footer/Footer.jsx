import "./Footer.css";
import logo from "../../assets/images/white-logo.png";

export default function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    if (!email) {
      alert("Please enter your email address.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    alert("Thank you for subscribing!");
    e.target.reset();
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Branding Section */}
        <div className="footer-brand">
          <img src={logo} alt="Logo" className="footer-logo my-3" />
          <h2 className="brand-logo">YourBrand</h2>
          <p className="brand-description">
            Creating solutions that inspire and empower. Let's build your dream.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="footer-links">
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
        </nav>

        {/* Social Media */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            {[
              { href: "#", icon: "fab fa-facebook-f", label: "Facebook" },
              { href: "#", icon: "fab fa-twitter", label: "Twitter" },
              { href: "#", icon: "fab fa-instagram", label: "Instagram" },
              { href: "#", icon: "fab fa-linkedin-in", label: "LinkedIn" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="social-icon"
                aria-label={`Visit our ${social.label} page`}
                title={social.label}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="newsletter-input"
              aria-label="Email for newsletter subscription"
              required
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
