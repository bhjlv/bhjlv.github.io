import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import CustomLandingPage from "./pages/CustomLandingPage.js"


function Index() {
  // React.useEffect(() => {
  //   // document.body.classList.add("index-page");
  //   document.body.classList.add("sidebar-collapse");
  //   document.documentElement.classList.remove("nav-open");
  //   window.scrollTo(0, 0);
  //   document.body.scrollTop = 0;
  //   return function cleanup() {
  //     // document.body.classList.remove("index-page");
  //     document.body.classList.remove("sidebar-collapse");
  //   };
  // });
  return (
    <>
    <CustomLandingPage />
    </>
  );
}

export default Index;
