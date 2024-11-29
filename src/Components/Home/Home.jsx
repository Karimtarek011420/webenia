import Content from "../Content/Content";
import Dedicated from "../Dedicated/Dedicated ";
import Industries from "../Industries/Industries ";
import SliderHome from "../Slider/SliderHome";
import "./home.css";

export default function Home() {
  return (
    <>
      <SliderHome />
      <Content />
      <Dedicated />
      <Industries />

      <div style={{ backgroundColor: "#F8F9FA" }}>
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
      <div className="bg-light">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="fw-bold text-dark">Get New Insights Weekly</h2>
              <p className="text-muted">
                Get our most recent research and insights emailed to your inbox.
                Enter your email below.
              </p>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-center align-items-center sub">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-control me-2 newsletter-input"
                />
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
