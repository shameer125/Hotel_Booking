import { Link } from "react-router-dom";
// import { Navigation, Pagination, A11y } from "swiper/modules";

import hero1 from "../../images/slider/slide-1.jpg";

const Hero = (props) => {
  return (
    <section
      className="wpo-hero-slider"
      style={{
        backgroundImage: `url(${hero1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="slide-inner slide-bg-image">
        <div className="container-fluid">
          <div className="slide-content">
            <div data-swiper-parallax="300" className="slide-title">
              <h2>Find Your Perfect Place To Stay</h2>
            </div>

            <div data-swiper-parallax="500" className="slide-btns">
              <Link to="/search-result" className="theme-btn">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
