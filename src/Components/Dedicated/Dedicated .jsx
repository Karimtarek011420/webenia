import "./dedicated.css";
import company from "../../assets/images/about-company.jpg";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Dedicated() {
  AOS.init({
    duration: 1000, // Animation duration
    offset: 200,    // Offset before animation starts
    once: true      // Whether animation runs only once
  });
  return (
    <section className="dedicated container py-5">
      <div className="header-section text-center">
        <h3 className="title">Hire a Dedicated Developer</h3>
        <button className="btn-primary">
          Hire Now <i className="fa-solid fa-arrow-right px-2"></i>
        </button>
      </div>

      <div className="row content py-5">
        {/* Left Column */}
        <div className="col-md-6 content-left" data-aos="fade-right">
          <p className="subtitle">Why Choose Us</p>
          <h4 className="heading">
            Why WEBENIA Ranked Top Among The Leading Web & App Development
            Companies
          </h4>
          <p className="description">
            We believe in forming long-term, high-quality partnerships with our
            clients.
          </p>

          {/* Features */}
          <div className="feature-item d-flex">
            <i className="fa-brands fa-slack icon"></i>
            <div>
              <h5 className="feature-title">A Dedicated Team of Experts</h5>
              <p className="feature-description">
                Our rigorous qualification process ensures that we employ
                experienced and highly skilled professionals.
              </p>
            </div>
          </div>

          <div className="feature-item d-flex">
            <i className="fa-brands fa-slack icon"></i>
            <div>
              <h5 className="feature-title">Completion of Projects on Time</h5>
              <p className="feature-description">
                We meet tight deadlines without compromising quality, earning us
                trust from both government and private clients.
              </p>
            </div>
          </div>

          <div className="feature-item d-flex">
            <i className="fa-regular fa-bell icon"></i>
            <div>
              <h5 className="feature-title">Streamlined Project Management</h5>
              <p className="feature-description">
                We conduct thorough research on your business and target market
                to create a tailored plan of action.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div
          className="col-md-6 content-right text-center"
          data-aos="fade-left"
        >
          <img
            src={company}
            alt="About Webenia Company"
            className="img-fluid rounded shadow"
          />
          <p className="description mt-3">
            Your company's IT systems are critical to its success. Our team
            provides top-notch solutions tailored to your business needs.
          </p>
          <h4 className="heading">
            Let's Start a <span className="highlight">New Project</span>{" "}
            Together
          </h4>
          <p>
            Collaborate with us to turn your vision into reality. Click below to
            start your journey.
          </p>
          <button className="btn-secondary">
            Estimate Your Project{" "}
            <i className="fa-solid fa-arrow-right px-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
