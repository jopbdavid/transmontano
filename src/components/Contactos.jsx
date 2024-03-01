import Table from "react-bootstrap/Table";

const Contactos = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h4 className="section-title ff-secondary text-center text-secondary fw-bold">
            Contactos
          </h4>
          <h1 className="mb-5">Vem Visitar-nos!</h1>
        </div>
        <div className="row g-4">
          <div className="col-12">
            <div className="row gy-4">
              <div className="col-md-4">
                <h5 className="section-title ff-secondary fw-normal text-start text-secondary">
                  Reservas
                </h5>
                <p>
                  <i className="fa fa-envelope-open text-dark me-2"></i>
                  reservas@example.com
                </p>
              </div>
              <div className="col-md-4">
                <h5 className="section-title ff-secondary fw-normal text-start text-secondary">
                  Take-Away
                </h5>
                <p>
                  <i className="fa fa-phone text-dark me-2"></i>
                  234 911 270
                </p>
              </div>
              <div className="col-md-4">
                <h5 className="section-title ff-secondary fw-normal text-start text-secondary">
                  Outros
                </h5>
                <p>
                  <i className="fa text-dark me-2"></i>
                  tech@example.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5 wow fadeIn" data-wow-delay="0.1s">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.6122671432813!2d-8.598337924881678!3d40.6825113713981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23991f15d0444d%3A0x5720984cf4a085e!2sO%20Transmontano!5e0!3m2!1spt-PT!2spt!4v1709311114115!5m2!1spt-PT!2spt"
              width="450"
              height="350"
              style={{
                border: "2px solid #ddd",
                borderRadius: "10px",
                maxHeight: "400px",
              }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-md-6">
            <div className="wow fadeInUp" data-wow-delay="0.2s"></div>
            <h4 className="section-title ff-secondary text-start text-secondary fw-bold">
              Horários
            </h4>
            <div className="container-fluid">
              <div className="row g-10">
                <div className="col-4">
                  <h5>segunda-feira</h5>
                  <h5>terça-feira</h5>
                  <h5>quarta-feira</h5>
                  <h5>quinta-feira</h5>
                  <h5>sexta-feira</h5>
                  <h5>Sábado</h5>
                  <h5>Domingo</h5>
                </div>
                <div className="col-4">
                  <h5>07:00 - 02:00</h5>
                  <h5>07:00 - 02:00</h5>
                  <h5>07:00 - 02:00</h5>
                  <h5>07:00 - 02:00</h5>
                  <h5>07:00 - 02:00</h5>
                  <h5>07:00 - 02:00</h5>
                  <h5>07:00 - 02:00</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactos;
