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
      <div className="container py-5">
        <div className="row gy-4">
          {/* Branding Section */}
          <div className="col-md-4 footer-brand">
            <img src={logo} alt="Logo" className="footer-logo mb-3" />
            <h2 className="brand-logo">YourBrand</h2>
            <p className="brand-description">
              Creating solutions that inspire and empower. Let's build your
              dream.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-4 footer-links">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
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

          {/* Newsletter Subscription */}
          <div className="col-md-4 footer-newsletter">
            <h4>Stay Updated</h4>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="newsletter-input mb-2"
                required
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
            <div className="footer-social mt-3">
              <h5>Follow Us</h5>
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
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center py-3">
        <p>&copy; 2024 YourBrand. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
