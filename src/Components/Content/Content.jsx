import "./Content.css";
import HeroSection from "./HeroSection";
import ServiceCard from "./ServiceCard";

export default function Content() {
  const services = [
    {
      icon: "fa-regular fa-user",
      title: "Custom Web Design",
      description:
        "Create stunning, responsive websites tailored to your business.",
    },
    {
      icon: "fa-solid fa-code",
      title: "Web Development",
      description: "Robust and scalable web solutions for every business size.",
    },
    {
      icon: "fa-regular fa-mobile",
      title: "Mobile App Development",
      description: "User-friendly apps for Android and iOS platforms.",
    },
    {
      icon: "fa-solid fa-search",
      title: "SEO Optimization",
      description: "Improve your website’s visibility on search engines.",
    },
    {
      icon: "fa-regular fa-chart-bar",
      title: "Digital Marketing",
      description: "Grow your audience with data-driven marketing strategies.",
    },
    {
      icon: "fa-regular fa-envelope",
      title: "Email Marketing",
      description: "Engage your customers with effective email campaigns.",
    },
  ];

  return (
    <div className="content-container">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section className="services py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
