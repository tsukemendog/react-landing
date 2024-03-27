import { Link } from "react-router-dom";

function Nav() {

    return (
        
      <nav
      className={"navbar navbar-expand-lg navbar-dark fixed-top"}
      id="mainNav">
        {/*<!-- Navigation-->*/}
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="/img/navbar-logo.png" alt="..." />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          메뉴
          <i className="fas fa-bars ms-1"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="nav-item">
              <Link to={'/apply'} className="nav-link">
                전자결제신청
              </Link>

            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://docs.skyclassism.com" target="_blank" rel="noopener noreferrer">
                개발가이드
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                업무제휴문의
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                부가서비스
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="mailto: help@skyclassism.com" style={{color : 'orange', textTransform: 'none'}}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}


export default Nav;