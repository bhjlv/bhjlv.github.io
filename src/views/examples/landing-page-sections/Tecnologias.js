//core packages
import React from "react";
import {
    Container,
    Row,
    Col
} from "reactstrap";

//style
import "../../../assets/css/custom.css"

function Tecnologias () {
    return (
        <>
            <div className="section section-about-us">
            <Container>
                {/* <------------------------------ TECNOLOGIAS ------------------------------> */}
                <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                    <h2 className="title">Tecnologias (a discutir essa ordem)</h2>
                    <h5 className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim, tellus vitae elementum volutpat, neque sapien varius erat, quis eleifend purus risus porttitor elit. Donec. 
                    </h5>
                </Col>
                </Row>
                <Container className="technologies">
                <Row>
                    <Col>
                    <ul className="technologies-list">
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>NodeJS</li>
                    </ul>
                    </Col>
                    <Col>
                    <ul className="technologies-list">
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                    </Col>
                    <Col>
                    <ul className="technologies-list">
                        <li>MongoDB</li>
                        <li>Neo4j</li>
                        <li>React Native</li>
                    </ul>
                    </Col>
                    <Col>
                    <ul className="technologies-list">
                        <li>Docker</li>
                        <li>Kubernetes</li>
                        <li>Tensorflow/PyTorch</li>
                    </ul>
                    </Col>
                </Row>
                </Container>
                <div className="separator separator-primary"></div>
                
                {/* <Row>
                    <Col md="12">
                    <div
                        className="section-images"
                        style={{
                        scale: "80%",
                        backgroundImage:
                            "url(" + require("assets/img/technologies.png") + ")",
                        }}
                    >
                    </div>
                    </Col>
                </Row> */}
                {/* <div className="separator separator-primary"></div> */}
                <div className="text-center">
                <button class="btn btn-default btn-lg">Detalhes</button>
                </div>
            </Container>
            </div>
        </>
    );
}
export default Tecnologias