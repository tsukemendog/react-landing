function FooterContent() {
  return (
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
              <span className="sky-text">주식회사 스카이클래스</span> &nbsp;대구광역시 중구 동덕로 115, 진석타워즈
              1115호
            </p>
            <p>대표 이주현 사업자등록번호 798-88-02520</p>
            <p>전자지급결제대행업 등록번호 02-004-00209</p>
            <p><span className="sky-text">PHONE: </span> &nbsp; +82 053-267-0880</p>
            <p><span className="sky-text">EMAIL: </span> &nbsp; help@skyclassism.com</p>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 my-3">
          <a href="#!">
            <img
              className="img-fluid img-brand d-block"
              src="/img/logos/google.svg"
              alt="..."
              aria-label="Google Logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterContent;
