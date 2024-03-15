import logo from "./logo.svg";
import "./App.css";

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

function App() {
  return (
    <div>
      <Nav></Nav>
      <Masthead></Masthead>
      <Services></Services>
      <Contact></Contact>
      {/*<PortfolioGrid></PortfolioGrid>
      <About></About>
      <Team></Team>
      <Clients></Clients>-->*/}
      
      <Footer></Footer>
   
    </div>
  );
}

export default App;
