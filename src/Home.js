import logo from "./logo.svg";
import "./Home.css";

import "bootstrap/dist/css/bootstrap.min.css";


import "./custom/styles.css"; //Core theme CSS (includes Bootstrap)
//import "bootstrap";
import "./custom/scripts";  //Core theme JS
import Nav from "./component/Nav";
import Masthead from "./component/Masthead";
import Services from "./component/Services";
import PortfolioGrid from "./component/PortfolioGrid";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import FooterContent from "./component/FooterContent";

function Home() {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    image: "https://paysm.net/img/navbar-logo.png",
    url: "https://paysm.net",
    logo: "https://paysm.net/img/navbar-logo.png",
    name: "PAYsm",
    description: "결제대행서비스 페이즘 공식홈페이지 입니다.",
    email: "help@skyclassism.com",
    telephone: "+82 053-267-0880",
    address: {
      "@type": "PostalAddress",
      streetAddress: "대구광역시 중구 동덕로 115",
      addressLocality: "대구",
      addressCountry: "KR",
      addressRegion: "대구",
      postalCode: "41940"
    }
  }

  
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <Nav></Nav>
      <Masthead></Masthead>
      <Services></Services>
      <Contact></Contact>
      <PortfolioGrid></PortfolioGrid>
      
      <Footer></Footer>
   
    </div>
  );
}

export default Home;
