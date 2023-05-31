import "./App.css";
import 'animate.css'
import Header from "./components/Header/index";
import Carouselll from "./components/Carouselll/index";
import Aboutus from "./components/Aboutus/index";
import Academic from "./components/Academic/index";
import Packages from "./components/Packages/index";
import Contact from "./components/Contact/index";
import Footer from "./components/Footer/index";
import Services from "./components/Services/index";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter basename={"/magicstudy"}>
        <div className="header-fix">
          <Header />
        </div>
        <div>      
        {/* <div class="spacer">
            &nbsp;
        </div> */}
        <Carouselll />
        <Aboutus />
        <Services /> 
        <Academic />
        {/* <Packages/>  */}
        <Contact />
        <Footer />
        </div>
       </BrowserRouter>
    </div>
  );
}

export default App;
