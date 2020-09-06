import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function SolucoesHeader() {
  let pageHeader = React.createRef();


  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg.png") + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">Soluções header</h1>
            <h3 className="text-center">
                Conquiste os resultados que você deseja de forma descomplicada. 
            </h3>
          </Container>
        </div>
      </div>
    </>
  );
}

export default SolucoesHeader;
