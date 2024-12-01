import "./dedicated.css";
import company from "../../assets/images/about-company.jpg";

export default function Dedicated() {
  const features = [
    {
      icon: "fa-solid fa-users",
      title: "A Dedicated Team of Experts",
      description:
        "Our rigorous qualification process ensures that we employ experienced and highly skilled professionals.",
    },
    {
      icon: "fa-solid fa-clock",
      title: "Completion of Projects on Time",
      description:
        "We meet tight deadlines without compromising quality, earning us trust from both government and private clients.",
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "Streamlined Project Management",
      description:
        "We conduct thorough research on your business and target market to create a tailored plan of action.",
    },
  ];

  return (
    <section className="dedicated container py-5">
     
      <div className="header-section text-center mb-5">
        <h3 className="title">Hire a Dedicated Developer</h3>
        <button className="btn btn-primary hire-btn">
          Hire Now <i className="fa-solid fa-arrow-right px-2"></i>
        </button>
      </div>

      <div className="row gy-4">
        {/* Left Column */}
        <div className="col-md-6">
          <p className="subtitle">Why Choose Us</p>
          <h4 className="heading">
            Why <span className="highlight">WEBENIA</span> Ranks Among Top Web &
            App Development Companies
          </h4>
          <p className="description">
            We focus on forming long-term partnerships with our clients,
            ensuring high-quality solutions for their business needs.
          </p>

          {/* Features List */}
          {features.map((feature, index) => (
            <div className="feature-item d-flex mb-4" key={index}>
              <div className="icon-container">
                <i className={`${feature.icon} icon`}></i>
              </div>
              <div>
                <h5 className="feature-title">{feature.title}</h5>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="col-md-6">
          <img
            src={company}
            alt="About Webenia - Our Dedicated Developer Team"
            className="w-100 rounded shadow"
          />
          <p className="description mt-4">
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
          <button className="btn btn-secondary estimate-btn">
            Estimate Your Project{" "}
            <i className="fa-solid fa-arrow-right px-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
