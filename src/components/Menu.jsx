import React from "react";

const Menu = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h4 className="section-title ff-secondary text-center text-secondary fw-bold">
            Refeições
          </h4>
          <h1 className="mb-5">Especialidades</h1>
        </div>
        <div
          className="tab-className text-center wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img
                      className="flex-shrink-0 img-fluid rounded"
                      src={require("../img/menu-1.jpg")}
                      alt=""
                      style={{ width: "80px" }}
                    />
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                        <span>Francesinha</span>
                        <span className="text-primary">$115</span>
                      </h5>
                      <small className="fst-italic">
                        Ipsum ipsum clita erat amet dolor justo diam
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img
                      className="flex-shrink-0 img-fluid rounded"
                      src={require("../img/menu-2.jpg")}
                      alt=""
                      style={{ width: "80px" }}
                    />
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                        <span>Bifana</span>
                        <span className="text-primary">$115</span>
                      </h5>
                      <small className="fst-italic">
                        Ipsum ipsum clita erat amet dolor justo diam
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img
                      className="flex-shrink-0 img-fluid rounded"
                      src={require("../img/menu-3.jpg")}
                      alt=""
                      style={{ width: "80px" }}
                    />
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                        <span>Prego</span>
                        <span className="text-primary">$115</span>
                      </h5>
                      <small className="fst-italic">
                        Ipsum ipsum clita erat amet dolor justo diam
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img
                      className="flex-shrink-0 img-fluid rounded"
                      src={require("../img/menu-4.jpg")}
                      alt=""
                      style={{ width: "80px" }}
                    />
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                        <span>Fino</span>
                        <span className="text-primary">$115</span>
                      </h5>
                      <small className="fst-italic">
                        Ipsum ipsum clita erat amet dolor justo diam
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
