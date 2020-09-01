import React from "react";

import '../../assets/css/custom.css'
// core components
import CustomNavbar from "components/Navbars/CustomNavbar.js";
import CustomPageHeader from "components/Headers/CustomPageHeader.js";
import CustomFooter from "components/Footers/CustomFooter.js";

// landing page sections
import Solucoes from "./landing-page-sections/Solucoes.js";
import Tecnologias from "./landing-page-sections/Tecnologias.js";
import Metodologia from "./landing-page-sections/Metodologia.js";
import Portfolio from "./landing-page-sections/Portfolio.js";
import Time from "./landing-page-sections/Time.js";
import Contato from "./landing-page-sections/Contato.js";




function CustomLandingPage() {
  // React.useEffect(() => {
  //   document.body.classList.add("landing-page");
  //   document.body.classList.add("sidebar-collapse");
  //   document.documentElement.classList.remove("nav-open");
  //   window.scrollTo(0, 0);
  //   document.body.scrollTop = 0;
  //   return function cleanup() {
  //     document.body.classList.remove("landing-page");
  //     document.body.classList.remove("sidebar-collapse");
  //   };
  // }, []);
  return (
    <>
      <CustomNavbar />
      <div className="wrapper">
        <CustomPageHeader />
        <Solucoes />
        <Tecnologias />
        <Metodologia />
        <Portfolio />
        <Time />
        <Contato />
        <CustomFooter />
      </div>
    </>
  );
}

export default CustomLandingPage;
