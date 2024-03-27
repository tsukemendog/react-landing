function Contact() {
  return (
    <section
      className="page-section"
      id="contact"
      style={{ position: "relative" }}
    >
      <div
        className="darkness-background-image"
        style={{
          backgroundImage: "url(/img/clean-kitchen.webp)",
          backgroundSize: "cover",
          backgroundPositionY: "-450px",
        }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6">
            <h3 className="section-heading text-uppercase">
              전자결제 서비스 신규가입
            </h3>
            <p className="section-heading text-uppercase">결제연동 신청</p>
          </div>
          
          <div className="col-12 col-sm-12 col-md-6 service-btn">
            <button type="button" className="btn btn-outline-light vertical-center">
              서비스 신청 및 안내
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
