
//core packages
import React from "react";
import {
    Container,
    Row,
    Col
} from "reactstrap";

//style
import "../../../assets/css/custom.css"


import api_svg from '../../../assets/svg/api.svg'
import web_svg from '../../../assets/svg/www.svg'
import desktop_svg from '../../../assets/svg/html.svg'
import data_science_svg from '../../../assets/svg/statistics.svg'
import ai_svg from '../../../assets/svg/student.svg'
import mobile_svg from '../../../assets/svg/tablet.svg'


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
                    <img src={api_svg} className='tech-icon'/>
                    <h4>RESTful APIs e Back-end</h4>
                </Col>
                <Col className="ml-auto mr-auto text-center" md="4">
                    <img src={web_svg} className='tech-icon'/>
                    <h4>Aplicações web</h4>
                </Col>
                <Col className="ml-auto mr-auto text-center" md="4">
                    <img src={data_science_svg} className='tech-icon'/>
                    <h4>Ciência de Dados</h4>
                </Col>
                </Row>
                <Row className="whatwedo">
                <Col className="ml-auto mr-auto text-center" md="4">
                    <img src={mobile_svg} className='tech-icon'/>
                    <h4>Aplicações mobile</h4>
                </Col>
                <Col className="ml-auto mr-auto text-center" md="4">
                    <img src={ai_svg} className='tech-icon'/>
                    <h4>Soluções de Inteligência Artificial</h4>
                </Col>
                <Col className="ml-auto mr-auto text-center" md="4">
                    <img src={desktop_svg} className='tech-icon'/>
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