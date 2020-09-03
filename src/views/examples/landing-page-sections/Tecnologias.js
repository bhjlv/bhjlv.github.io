//core packages
import React from "react";
import {
    Container,
    Row,
    Col
} from "reactstrap";

//style
import "../../../assets/css/custom.css"


import {
    DiNodejsSmall,
    DiReact, 
    DiJavascript, 
    DiPython,
    DiMongodb,
    DiHtml5,
    DiCss3,
} from 'react-icons/di'
import {
    SiKubernetes,
    SiRabbitmq,
    SiNeo4J,
    SiTensorflow,
    SiPytorch,
    SiPostgresql,
    SiFlask,
    SiDocker,
    SiNodeDotJs,
    SiReact
} from 'react-icons/si'



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
                        <Col xs={12} md={6}> 
                            <img src={undraw_code_svg} className='technologies-image'  />
                        </Col>
                        <Col xs={12} md={6}>
                            <Container className='technologies-list'>
                                <Row>
                                    <Col>
                                        <DiPython />
                                        <p> Python </p>
                                    </Col>
                                    <Col>
                                        <DiJavascript/>
                                        <p> JavaScript </p>
                                    </Col>
                                    <Col>
                                        <DiHtml5/>
                                        <p>HTML</p>
                                    </Col>
                                    <Col> 
                                        <DiCss3 />                               
                                        <p>CSS</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>   
                                        <SiReact />
                                        <p>React</p>
                                    </Col>
                                    <Col>
                                        <SiReact />
                                        <p>React Native</p>
                                    </Col>
                                    <Col>
                                        <SiNodeDotJs />
                                        <p>NodeJS</p>
                                    </Col>
                                    <Col>  
                                        <SiFlask />          
                                        <p>Flask</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <DiMongodb />
                                        <p>MongoDB</p>
                                    </Col>
                                    <Col>
                                        <SiNeo4J />          
                                        <p>Neo4j</p>
                                    </Col>
                                    <Col>
                                        <SiPostgresql />
                                        <p>PostgressQL</p>
                                    </Col>
                                    <Col>      
                                        <SiRabbitmq />      
                                        <p>RabbitMQ</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <SiDocker />
                                        <p>Docker</p>
                                    </Col>
                                    <Col>
                                        <SiKubernetes />
                                        <p>Kubernetes</p>
                                    </Col>
                                    <Col>
                                        <SiTensorflow />      
                                        <p>Tensorflow</p>
                                    </Col>
                                    <Col>      
                                        <SiPytorch />      
                                        <p> PyTorch</p>
                                    </Col>
                                </Row>
                            </Container>
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