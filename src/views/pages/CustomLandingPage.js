import React from "react";

import '../../assets/css/custom.css'
// core components
import CustomNavbar from "components/Navbars/CustomNavbar.js";
import CustomPageHeader from "components/Headers/CustomPageHeader.js";
import CustomFooter from "components/Footers/CustomFooter.js";

// landing page sections
import Solucoes from "./landing-page-sections/Solucoes.js";
import Tecnologias from "./landing-page-sections/Tecnologias.js";
import Work from "./landing-page-sections/Work.js";
import Projects from "./landing-page-sections/Projects.js";
import Team from "./landing-page-sections/Team.js";
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
        <Work />
        <Projects />
        <Team />
        <Contato />
        <CustomFooter />
      </div>
    </>
  );
}

export default CustomLandingPage;
