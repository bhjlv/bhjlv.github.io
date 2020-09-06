import React from "react";

import '../../assets/css/custom.css'


// Core components
import TechHeader from "../../components/Headers/TechsHeader";
import CustomNavbar from "../../components/Navbars/CustomNavbar";
import CustomFooter from "../../components/Footers/CustomFooter";
import TechsComponent from "./components/TechsComponent";


function TechPage() {
    

    return (
        <>
            <CustomNavbar />
            <div className="wrapper">
                <TechHeader />
                <TechsComponent />

            </div>
            <CustomFooter />

        </>
    );
}

export default TechPage;