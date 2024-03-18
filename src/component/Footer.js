function Footer() {
  return (
    <footer>
      <div className="container-md">
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-6 my-3">
            <div className="d-block pb-3">
              <img
                className="img-brand"
                src="/img/logos/paysm-logo.png"
                alt="페이즘 로고"
                aria-label="Paysm Logo"
              />
            </div>
            <div className="container footer-content-1">
              <p>
                <span className="sky-text">주식회사 스카이클래스</span>{" "}
                &nbsp;대구광역시 중구 동덕로 115, 진석타워즈 1115호
              </p>
              <p>대표 이주현 사업자등록번호 798-88-02520</p>
              <p>전자지급결제대행업 등록번호 02-004-00209</p>
              <p>
                <span className="sky-text">PHONE: </span> &nbsp; +82
                053-267-0880
              </p>
              <p>
                <span className="sky-text">EMAIL: </span> &nbsp;
                help@skyclassism.com
              </p>
            </div>
          </div>

          <div className="col-md-6 col-sm-6 my-3">
            <div className="container footer-content-1">
              <span className="footer-family-site">
                <span className="sky-text">Family Site</span>
                <span className="ps-3">
                  <input
                    type="text"
                    className="form-control"
                    style={{ width: "150px", display: "inline" }}
                  />
                </span>
              </span>
              <div className="pt-4 footer-content-2">

                  <p className="sky-text">개인정보처리방침</p>

                  <p className="sky-text">위치정보서비스약관</p> 

                  <p className="sky-text">위치정보처리방침</p>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/*<!-- Footer--> */}
      <div class="footer py-4" style={{ backgroundColor: "rgb(41,71,169)" }}>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 text-lg-start text-white">
              주식회사 스카이클래스 © 2022. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
