function Services() {
  return (
    <section className="page-section" id="services">
      {/*<!-- Services-->*/}
      <div className="container-lg">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">PAYsm 사업범위</h2>
        </div>
        <div className="row text-center pt-4">
          <div className="col-md-4 text-start">
            <div className="service-box">
              <div>
                <i className="fa-solid fa-headset"></i>
              </div>

              <h4 className="my-3">전자결제서비스</h4>
              <p className="text-muted">
                온라인결제, 정기결제, 간편결제 등 다양한 결제 서비스를
                제공합니다.
              </p>
            </div>
          </div>

          <div className="col-md-4 text-start">
          <div className="service-box">
              <div>
                <i className="fa-solid fa-headset"></i>
              </div>

              <h4 className="my-3">회원관리ERP</h4>
              <p className="text-muted">
                회원관리 ERP를 통해 다양한 사업장의 회원관리 서비스를 제공합니다.
              </p>
            </div>
          </div>

          <div className="col-md-4 text-start">
          <div className="service-box">
              <div>
                <i className="fa-solid fa-screwdriver-wrench"></i>
              </div>

              <h4 className="my-3">쇼핑몰 및 SI서비스</h4>
              <p className="text-muted">
                쇼핑몰의 구축 및 다양한 웹서비스 개발, 구축을 지원합니다. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;
