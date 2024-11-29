import "./Industries.css"; // For custom styles

export default function Industries() {
  const industries = [
    { name: "Social Networking", color: "industry-bg-info" },
    { name: "Digital Marketing", color: "industry-bg-warning" },
    { name: "Ecommerce Development", color: "industry-bg-success" },
    { name: "Video Services", color: "industry-bg-orange" },
    { name: "Banking Services", color: "industry-bg-light" },
    { name: "Enterprise Services", color: "industry-bg-danger" },
    { name: "Education Services", color: "industry-bg-purple" },
    { name: "Tour and Travels", color: "industry-bg-primary" },
    { name: "Health Services", color: "industry-bg-cyan" },
    { name: "Events and Tickets", color: "industry-bg-dark" },
    { name: "Restaurant Service", color: "industry-bg-muted" },
    { name: "Business Consultant", color: "industry-bg-secondary" },
  ];

  return (
    <div className="industries-container">
      <div className="text-center mb-5">
        <h3 className="title-primary">Industries We Work For</h3>
        <h1 className="title-secondary">Helping Businesses in All Domains</h1>
        <p className="subtitle">
          We build better businesses by helping our clients identify and deliver
          bottom-line improvements.
        </p>
      </div>

      <div className="industries-grid">
        {industries.map((industry, index) => (
          <div
            key={index}
            className={`industry-card ${industry.color} fade-in`}
          >
            <h5>{industry.name}</h5>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <p className="cta-text">
          We <strong>Promise.</strong> We <strong>Deliver.</strong>
        </p>
        <button className="cta-button">Let's Work Together</button>
      </div>
    </div>
  );
}
