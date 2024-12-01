import "./dedicated.css";
import company from "../../assets/images/about-company.jpg";
import { motion } from "framer-motion";

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
    <motion.section
      className="dedicated py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="header-section text-center mb-5">
          <motion.h3
            className="title"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hire a Dedicated Developer
          </motion.h3>
          <motion.button
            className="btn btn-primary hire-btn"
            whileHover={{ scale: 1.1 }}
          >
            Hire Now <i className="fa-solid fa-arrow-right px-2"></i>
          </motion.button>
        </div>

        <div className="row gy-4 align-items-center">
          <div className="col-lg-6">
            <p className="subtitle">Why Choose Us</p>
            <motion.h4
              className="heading"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Why <span className="highlight">WEBENIA</span> Ranks Among Top Web
              & App Development Companies
            </motion.h4>
            <p className="description">
              We focus on forming long-term partnerships with our clients,
              ensuring high-quality solutions for their business needs.
            </p>
            {features.map((feature, index) => (
              <motion.div
                className="feature-item d-flex mb-4"
                key={index}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="icon-container">
                  <i className={`${feature.icon} icon`}></i>
                </div>
                <div>
                  <h5 className="feature-title mx-2">{feature.title}</h5>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="col-lg-6">
            <motion.img
              src={company}
              alt="About Webenia - Our Dedicated Developer Team"
              className="w-100 rounded shadow"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
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
              Collaborate with us to turn your vision into reality. Click below
              to start your journey.
            </p>
            <motion.button
              className="btn btn-secondary estimate-btn"
              whileHover={{ scale: 1.1 }}
            >
              Estimate Your Project{" "}
              <i className="fa-solid fa-arrow-right px-2"></i>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
