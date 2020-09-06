import React from "react";

import '../../assets/css/custom.css'


// Core components
import PortfolioHeader from "../../components/Headers/PortfolioHeader";
import CustomNavbar from "../../components/Navbars/CustomNavbar";
import CustomFooter from "../../components/Footers/CustomFooter";
import PortoflioComponent from "./components/PortfolioComponents";

function PortfolioPage() {
    

    return (
        <>
            <CustomNavbar />
            <div className="wrapper">
                <PortfolioHeader />
                <PortoflioComponent />

            </div>
            <CustomFooter />

        </>
    );
}

export default PortfolioPage;