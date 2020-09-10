import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import video from '../../assets/videos/header.mp4'
import logo from '../../assets/img/logo.png'

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();


  return (
    <>
      <div className="page-header page-header-small">
        <video
          className="page-header-video"
          src={video}
          autoPlay={true}
          loop={true}
        />
        <div className="content-center">
          <Container>
            <img src={logo} />
            <h3 className="text-center"> Astronomic tech solutions </h3>
            <div className="text-center">
              <button class="btn btn-default btn-lg">
                Fale conosco
              </button>
              {/* <Button
                className="btn-icon btn-round"
                color="info"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <Button
                className="btn-icon btn-round"
                color="info"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-google-plus"></i>
              </Button> */}
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
