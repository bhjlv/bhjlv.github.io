import React from "react";

import '../../assets/css/custom.css'


// Core components
import TeamHeader from "../../components/Headers/TeamHeader";
import CustomNavbar from "../../components/Navbars/CustomNavbar";
import CustomFooter from "../../components/Footers/CustomFooter";
import TeamComponent from "./components/TeamComponent";

function TeamPage() {
    

    return (
        <>
            <CustomNavbar />
            <div className="wrapper">
                <TeamHeader />
                <TeamComponent />

            </div>
            <CustomFooter />

        </>
    );
}

export default TeamPage;