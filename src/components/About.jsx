import React from "react";
import about1 from "../img/about-1.jpg";
import about2 from "../img/about-2.jpg";
import about3 from "../img/about-3.jpg";
import about4 from "../img/about-4.jpg";

const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-100 wow zoomIn"
                  data-wow-delay="0.1s"
                  src={about1}
                />
              </div>
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.3s"
                  src={about2}
                  style={{ marginTop: "25%" }}
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.5s"
                  src={about3}
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-100 wow zoomIn"
                  data-wow-delay="0.7s"
                  src={about4}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h4 className="section-title ff-secondary text-start text-secondary fw-bold">
              Sobre Nós
            </h4>
            <h1 className="mb-4">Bem-Vindos ao Transmontano de Cacia</h1>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem
              sit.
            </p>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <div className="row g-4 mb-4">
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-start border-3 border-primary px-3">
                  <h1
                    className="flex-shrink-0 display-5 text-primary mb-0"
                    data-toggle="counter-up"
                  >
                    30
                  </h1>
                  <div className="ps-4">
                    <p className="mb-0">Anos a Servir </p>
                    <h6 className="text-uppercase mb-0">A Vila de Cacia</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-start border-3 border-primary px-3">
                  <h1
                    className="flex-shrink-0 display-5 text-primary mb-0"
                    data-toggle="counter-up"
                  >
                    300
                  </h1>
                  <div className="ps-4">
                    <p className="mb-0">Lugares</p>
                    <h6 className="text-uppercase mb-0">Sentados</h6>
                  </div>
                </div>
              </div>
            </div>
            {/* <a className="btn btn-primary py-3 px-5 mt-2" href="">
              Read More
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
