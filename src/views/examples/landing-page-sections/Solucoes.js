
//core packages
import React from "react";
import {
    Container,
    Row,
    Col
} from "reactstrap";

//style
import "../../../assets/css/custom.css"

function Solucoes() {


    return (
        <>
            <div className="section section-about-us">
            {/* <------------------------------ O QUE FAZEMOS ------------------------------> */}
            <Container>
                <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                    <h2 className="title">Nossas soluções / O que fazemos</h2>
                    <h5 className="description">
                    Somos um time de programadores com experiência em desenvolvimento de soluções end-to-end personalizadas de alta performance, escalabilidade e segurança. Sempre provendo serviços de alta qualidade e preço justo.
                    </h5>
                </Col>
                </Row>
                <div className="separator separator-primary"></div>

                <Row className="whatwedo">
                <Col className="ml-auto mr-auto text-center" md="4">
                    <h4>Restful APIs e Back-end</h4>
                </Col>
                <Col className="ml-auto mr-auto text-center" md="4">
                    <h4>Aplicações web</h4>
                </Col>
                <Col className="ml-auto mr-auto text-center" md="4">
                    <h4>Ciência de Dados</h4>
                </Col>
                </Row>
                <Row className="whatwedo">
                <Col className="ml-auto mr-auto text-center" md="4">
                    <h4>Aplicações mobile</h4>
                </Col>
                <Col className="ml-auto mr-auto text-center" md="4">
                    <h4>Soluções de Inteligência Artificial</h4>
                </Col>
                <Col className="ml-auto mr-auto text-center" md="4">
                    <h4>Aplicações desktop</h4>
                </Col>
                </Row>
                <div className="text-center">
                <button class="btn btn-default btn-lg">
                    Saiba mais
                </button>
                </div>
                <div className="separator separator-primary"></div>
                <div className="section-story-overview"></div>
                {/* <div className="section-story-overview">
                <Row>
                    <Col md="12">
                    <div
                        className="section-images"
                        style={{
                        scale: "80%",
                        backgroundImage:
                            "url(" + require("assets/img/screenshot.png") + ")",
                        }}
                    >
                    </div>
                    </Col>
                </Row>
                </div> */}
            </Container>
            </div>

                </>
            );
        }
export default Solucoes