import Image from "react-bootstrap/Image";

const Navbar = () => {
  return (
    <>
      <div className="container-xxl full-width position-relative p-0">
        <nav className="navbar navbar-main navbar-expand-lg bg-dark px-4 px-lg-5 py-3 py-lg-6">
          <a href="" className="navbar-brand p-0">
            <Image src={require("../img/transmontano-logo.png")} fluid />
          </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 pe-4">
              <a href="" className="nav-item nav-link">
                Restaurante
              </a>

              <a href="" className="nav-item nav-link">
                Serviço
              </a>
              <a href="" className="nav-item nav-link">
                Menu
              </a>
              <a href="" className="nav-item nav-link">
                Contactos
              </a>
            </div>
            <a href="" className="btn btn-primary py-2 px-5">
              Reservas
            </a>
          </div>
        </nav>
        <div className="container-xxl full-width py-0 bg-dark hero-header mb-5">
          <div className="container my-2 py-0">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 text-center text-lg-start">
                <h1 className="display-3 text-white animated slideInLeft">
                  Venham Saborear
                  <br />
                  as Nossas Refeições
                </h1>
                <p className="text-white animated slideInLeft mb-4 pb-2">
                  Texto texto texto
                </p>
                {/* <a
                  href=""
                  className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft"
                >
                  Book A Table
                </a> */}
              </div>
              <div className="col-lg-6 text-center text-lg-end overflow-hidden m-0">
                <img
                  className="img-fluid"
                  src={require("../img/hero.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
