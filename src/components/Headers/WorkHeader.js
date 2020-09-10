import React from "react";

// reactstrap components
import { Container } from "reactstrap";

import video from '../../assets/videos/header.mp4'
// core components

function WorkHeader() {
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
            <h1 className="title">Como trabalhamos</h1>
          </Container>
        </div>
      </div>
    </>
  );
}

export default WorkHeader;
