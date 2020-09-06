import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function TechsHeader() {
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
            <h1 className="title">Techs header</h1>
            <h3 className="text-center">
                Sed ac mi vitae libero mollis gravida ut eu justo. Nam laoreet lacinia enim, eget.
            </h3>
          </Container>
        </div>
      </div>
    </>
  );
}

export default TechsHeader;
