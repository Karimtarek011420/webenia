import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slick1 from "../../assets/images/vp.png";
import slick2 from "../../assets/images/smo.png";
import slick3 from "../../assets/images/service-img-3.png";
import slick4 from "../../assets/images/seo.png";
import slick5 from "../../assets/images/mob-service-item3.png";
import slick6 from "../../assets/images/graphic.png";
import slick7 from "../../assets/images/emails.png";
import slick8 from "../../assets/images/content.png";
import "animate.css";

export default function SliderHome() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    initialSlide: 0,
    lazyLoad: "ondemand", // Added lazy loading
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    { img: slick1, title: "Web Development" },
    { img: slick2, title: "Social Media Marketing" },
    { img: slick3, title: "Graphic Design" },
    { img: slick4, title: "SEO Optimization" },
    { img: slick5, title: "Content Creation" },
    { img: slick6, title: "Digital Marketing" },
    { img: slick7, title: "Email Campaigns" },
    { img: slick8, title: "Content Marketing" },
  ];

  return (
    <section className="slider-section bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <h2 className="highlight-title">
              Web. Mobile. Graphic. Marketing.
            </h2>
            <p className="description-text mt-3">
              Transforming businesses with cutting-edge web and mobile
              solutions, graphic design, and marketing strategies.
            </p>
          </div>
          <div className="offset-md-2 col-md-6">
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="slider-item animate__animated animate__fadeIn"
                >
                  <div className="card shadow-sm">
                    <img
                      src={slide.img}
                      className="card-img-top"
                      alt={`Slide for ${slide.title}`}
                      loading="lazy"
                    />
                    <div className="card-body">
                      <p className="card-title text-center">{slide.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
