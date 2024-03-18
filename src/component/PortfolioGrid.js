function PortfolioGrid() {
    return (
      <div>



<section className="page-section bg-light" id="portfolio">
        {/*<!-- Portfolio Grid-->*/}
        <div className="container-md">
          <div className="text-center" id="portfolio-heading">
            <h2 className="section-heading text-uppercase">PAYsm Services</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-4">
              {/*<!-- Portfolio item 1-->*/}
              <div className="portfolio-item">
                <a
                  className="portfolio-link text-center"
                  href="#portfolioModal1"
                  style={{position: 'relative'}}
                >

                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  
                  <img
                    className="img-fluid"
                    src="/img/portfolio/erp-tap.png"
                    alt="회원관리 ERP 탭"
                  />
                </a>
                
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 mb-4">
              {/*<!-- Portfolio item 2-->*/}
              <div className="portfolio-item">
                <a
                  className="portfolio-link text-center"
                  href="#portfolioModal2"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  
                  <img
                    className="img-fluid"
                    src="/img/portfolio/rent-tap.png"
                    alt="임대료관리 탭"
                  />
                </a>
                
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 mb-4">
              {/*<!-- Portfolio item 3-->*/}
              <div className="portfolio-item">
                <a
                  className="portfolio-link text-center"
                  href="#portfolioModal3"
                >

                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
  
                  <img
                    className="img-fluid"
                    src="/img/portfolio/pos-kiosk.png"
                    alt="POS 키오스크 탭"
                  />
                </a>
                
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              {/*<!-- Portfolio item 4-->*/}
              <div className="portfolio-item">
                <a
                  className="portfolio-link text-center"
                  href="#portfolioModal4"
                >

                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>

                  <img
                    className="img-fluid"
                    src="/img/portfolio/nfc-qr-tap.png "
                    alt="NFC QR 오더 탭"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
              {/*<!-- Portfolio item 5-->*/}
              <div className="portfolio-item">
                <a
                  className="portfolio-link text-center"
                  href="#portfolioModal5"
                >

                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>

                  <img
                    className="img-fluid"
                    src="/img/portfolio/offline-tap.png"
                    alt="오프라인 PG 탭"
                  />
                </a>
                
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              {/*<!-- Portfolio item 6-->*/}
              <div className="portfolio-item">
                <a
                  className="portfolio-link text-center"
                  href="#portfolioModal6"
                >

                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>

                  <img
                    className="img-fluid"
                    src="/img/portfolio/si-tap.png"
                    alt="SI 탭"
                  />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>



      </div>
        
    )
}


export default PortfolioGrid;