import "./Industries.css"; // For custom styles
import { motion } from "framer-motion";

export default function Industries() {
  const industries = [
    { name: "Social Networking", icon: "🌐", color: "industry-bg-info" },
    { name: "Digital Marketing", icon: "📈", color: "industry-bg-warning" },
    { name: "Ecommerce Development", icon: "🛒", color: "industry-bg-success" },
    { name: "Video Services", icon: "🎥", color: "industry-bg-orange" },
    { name: "Banking Services", icon: "🏦", color: "industry-bg-light" },
    { name: "Enterprise Services", icon: "🏢", color: "industry-bg-danger" },
    { name: "Education Services", icon: "📚", color: "industry-bg-purple" },
    { name: "Tour and Travels", icon: "✈️", color: "industry-bg-primary" },
    { name: "Health Services", icon: "🏥", color: "industry-bg-cyan" },
    { name: "Events and Tickets", icon: "🎫", color: "industry-bg-dark" },
    { name: "Restaurant Service", icon: "🍴", color: "industry-bg-muted" },
    { name: "Business Consultant", icon: "💼", color: "industry-bg-secondary" },
  ];

  return (
    <div className="industries-container">
      <div className="text-center mb-5">
        <h3 className="title-primary">Industries We Work For</h3>
        <motion.h1
          className="title-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Helping Businesses in All Domains
        </motion.h1>
        <p className="subtitle">
          We build better businesses by helping our clients identify and deliver
          bottom-line improvements.
        </p>
      </div>

      <motion.div
        className="industries-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            className={`industry-card ${industry.color}`}
            whileHover={{ scale: 1.05 }}
          >
            <div className="icon">{industry.icon}</div>
            <h5>{industry.name}</h5>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-5">
        <p className="cta-text">
          We <strong>Promise.</strong> We <strong>Deliver.</strong>
        </p>
        <button className="cta-button">Let's Work Together</button>
      </div>
    </div>
  );
}
