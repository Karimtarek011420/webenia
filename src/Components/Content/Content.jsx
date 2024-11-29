import "./Content.css";

export default function Content() {
  return (
    <div className="content-container">
      <div className="container py-5 text-center">
        <h5 className="greeting">
          Hello! We are <span className="brand-name">WEBENIA</span>
        </h5>
        <h2 className="main-heading">
          <span className="highlight">Top-rated</span> Digital Marketing, Web,
          And Mobile App Development Company
        </h2>
        <p className="description">
          A leading full-service Web Solutions and Digital Marketing agency,
          providing a comprehensive range of professional services such as
          Digital transformation, web design, web development, mobile app
          development, search engine optimization (SEO), e-commerce solutions,
          UI/UX design, pay-per-click advertising (PPC), social media marketing,
          video production, content creation, email marketing, and marketing
          automation.
        </p>
        <h2 className="sub-heading">
          Big Ideas, Creative People, New Technologies
        </h2>
        <p className="description">
          WEBENIA is a virtual department that can help your organization expand
          its business by enhancing the quantity and quality of leads and sales
          generated from your website, with a focus on maximizing return on
          investment (ROI).
        </p>
      </div>
      <section className="services py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {/* Service Cards */}
            {[...Array(6)].map((_, index) => (
              <div className="col-md-4" key={index}>
                <div className="card service-card text-center p-3 bg-white shadow-sm hover-card">
                  <i className={`fa-${index % 2 === 0 ? "regular" : "solid"} fa-${index % 2 === 0 ? "user" : "house"}`}></i>
                  <div className="card-body">
                    <h5 className="card-title">INTEGRATED SERVICES</h5>
                    <p className="card-text">
                      We provide world-class advertising, web and mobile
                      development, and marketing solutions to businesses who
                      require a dedicated digital solutions department on an
                      outsourcing basis.
                    </p>
                    <h5 className="text-start">
                      Learn More <i className="fa-solid fa-arrow-right  fs-5"></i>
                    </h5>
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
