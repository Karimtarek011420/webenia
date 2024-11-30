import Content from "../Content/Content";
import Dedicated from "../Dedicated/Dedicated ";
import Industries from "../Industries/Industries ";
import SliderHome from "../Slider/SliderHome";
import "./home.css";

export default function Home() {
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
    <>
      <SliderHome />
      <Content />
      <Dedicated />
      <Industries />

      {/* Call to Action Section */}
      <div className="cta-section bg-light">
        <div className="container text-center py-5">
          <h6 className="text-primary fw-semibold">Let's work together</h6>
          <h2 className="display-6 fw-bold text-dark">
            We Love to Listen <br />
            to Your Requirements
          </h2>
          <button className="btn btn-primary btn-lg mt-4 animate-btn">
            Request a Quote
          </button>
        </div>
      </div>

      {/* Newsletter Subscription Section */}
      <div className="newsletter-section bg-light">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="fw-bold text-dark">Get New Insights Weekly</h2>
              <p className="text-muted">
                Stay updated with our latest research and insights. Enter your
                email below to subscribe to our newsletter.
              </p>
            </div>
            <div className="col-md-6">
              <form
                className="d-flex justify-content-center align-items-center"
                onSubmit={handleSubscribe}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="form-control me-2 newsletter-input"
                  aria-label="Email for newsletter subscription"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
