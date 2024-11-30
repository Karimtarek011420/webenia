import "./Content.css";
import { useEffect } from "react";
import AOS from "aos"; // Import AOS for animations
import "aos/dist/aos.css";

export default function Content() {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize animations
  }, []);

  return (
    <div className="content-container">
      {/* Hero Section */}
      <div className="container py-5 text-center">
        <h5 className="greeting" data-aos="fade-down">
          Hello! We are <span className="brand-name">WEBENIA</span>
        </h5>
        <h2 className="main-heading" data-aos="fade-up">
          <span className="highlight">Top-rated</span> Digital Marketing, Web,
          And Mobile App Development Company
        </h2>
        <p className="description" data-aos="fade-up" data-aos-delay="200">
          A leading full-service Web Solutions and Digital Marketing agency,
          providing a comprehensive range of professional services such as
          Digital transformation, web design, web development, mobile app
          development, search engine optimization (SEO), e-commerce solutions,
          UI/UX design, pay-per-click advertising (PPC), social media marketing,
          video production, content creation, email marketing, and marketing
          automation.
        </p>
        <h2 className="sub-heading" data-aos="fade-left">
          Big Ideas, Creative People, New Technologies
        </h2>
        <p className="description" data-aos="fade-right" data-aos-delay="200">
          WEBENIA is a virtual department that can help your organization expand
          its business by enhancing the quantity and quality of leads and sales
          generated from your website, with a focus on maximizing return on
          investment (ROI).
        </p>
      </div>

      {/* Services Section */}
      <section className="services py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {[...Array(6)].map((_, index) => (
              <div
                className="col-md-4"
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="card service-card text-center p-4 bg-white shadow-sm hover-card">
                  <i
                    className={`fa-${index % 2 === 0 ? "regular" : "solid"} fa-${
                      index % 2 === 0 ? "user" : "house"
                    } mb-3 fs-2 text-primary`}
                  ></i>
                  <div className="card-body">
                    <h5 className="card-title">INTEGRATED SERVICES</h5>
                    <p className="card-text">
                      We provide world-class advertising, web and mobile
                      development, and marketing solutions to businesses who
                      require a dedicated digital solutions department on an
                      outsourcing basis.
                    </p>
                    <a href="#" className="btn btn-primary btn-sm mt-3">
                      Learn More <i className="fa-solid fa-arrow-right fs-6"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
