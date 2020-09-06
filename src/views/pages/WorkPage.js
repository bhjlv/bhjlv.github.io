import React from "react";

import '../../assets/css/custom.css'

// Core components
import WorkHeader from "../../components/Headers/WorkHeader";
import CustomNavbar from "../../components/Navbars/CustomNavbar";
import CustomFooter from "../../components/Footers/CustomFooter";
import WorkComponent from "./components/WorkComponent";

function WorkPage() {
    

    return (
        <>
            <CustomNavbar />
            <div className="wrapper">
                <WorkHeader />
                <WorkComponent />

            </div>
            <CustomFooter />

        </>
    );
}

export default WorkPage;