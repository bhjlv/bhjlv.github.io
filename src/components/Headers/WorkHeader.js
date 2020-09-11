import React from "react";

// reactstrap components
import { Container } from "reactstrap";

import video from '../../assets/videos/header.mp4'
// core components

function WorkHeader() {

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
            <h1 className="title">COMO TRABALHAMOS</h1>
          </Container>
        </div>
      </div>
    </>
  );
}

export default WorkHeader;
