//core packages
import React from "react";
import {
    Container,
    Row,
    Col
} from "reactstrap";

//style
import "../../../assets/css/custom.css"
import undraw_code_svg from '../../../assets/svg/undraw_code.svg'

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
                    Aplicamos tecnologias do estado-da-arte no desenvolvimento de nossas soluções. Sempre atualizados com lançamentos e atualizações de frameworks e ferramentas, buscamos sempre entregar o melhor produto possível para nossos clientes.
                    </h5>
                </Col>
                </Row>
                <Container className="technologies">
                    <Row>
                        <Col xs={6}> 
                            <img src={undraw_code_svg}  />
                        </Col>
                        <Col xs={2}>
                        <ul className="technologies-list">
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                        </Col>
                        <Col xs={2}>
                        <ul className="technologies-list">
                            <li>React</li>
                            <li>React Native</li>
                            <li>NodeJS</li>
                            <li>Neo4j</li>
                        </ul>
                        </Col>
                        <Col xs={2}>
                        <ul className="technologies-list">
                            <li>MongoDB</li>
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