import React from "react";

import '../../assets/css/custom.css'

// Components
import SolucoesHeader from "../../components/Headers/SolucoesHeader";
import CustomNavbar from "../../components/Navbars/CustomNavbar";
import CustomFooter from "../../components/Footers/CustomFooter";
import SolucoesComponent from "./components/SolucoesComponent";

function SolutionsPage() {

    return (
        <>
        <CustomNavbar />
        <div className="wrapper">
            <SolucoesHeader />
            <SolucoesComponent />
        </div>
        <CustomFooter />

        </>
    );
}

export default SolutionsPage;