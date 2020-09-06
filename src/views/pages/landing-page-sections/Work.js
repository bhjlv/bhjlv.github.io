
import React from "react";
import {
    Container,
    Row,
    Button,
    Col
} from "reactstrap";

import { Link } from "react-router-dom";
//assets
import "../../../assets/css/custom.css"
import laptop from '../../../assets/img/laptop.png' 


import brainstorm_svg from '../../../assets/svg/idea.svg'
import communication_svg from '../../../assets/svg/communication.svg'
import dev_svg from '../../../assets/svg/rocket.svg'
import documentation_svg from '../../../assets/svg/browser.svg'
import validation_svg from '../../../assets/svg/finger.svg'
import requirements_svg from '../../../assets/svg/wrench.svg'
import undraw_roadmap from '../../../assets/svg/undraw_roadmap.svg'

function Work () {
    return (
        <>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview"></div>
            <div className="content-center">
            <Container>
                <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                    <h2 className="title">Como trabalhamos</h2>
                    <h5 className="description">
                    Nossa metodologia de trabalho leva em conta todas as etapas necessárias para o desenvolvimento da sua solução. Colocamos você no centro de todo o processo, alinhando as necessidades e expectativas para que a eficiência seja máxima. 
                    </h5>
                </Col>
                </Row>
                <Row> 
                    <Col>
                        <Container className="howework">
                            <Row>
                                <Col className="workitem">
                                <img src={requirements_svg} className="workimg" alt=""></img>
                                <h5 className="worktitle">Estudo dos requisitos</h5>
                                </Col>
                                <Col className="workitem">
                                <img src={brainstorm_svg} className="workimg" alt=""></img>
                                <h5 className="worktitle">Brainstorm</h5>
                                </Col>
                                <Col className="workitem">
                                <img src={validation_svg} className="workimg" alt=""></img>
                                <h5 className="worktitle">Validação das ideias</h5>
                                </Col>
                            </Row> 
                            <Row>
                                <Col className="workitem">
                                <img src={dev_svg} className="workimg" alt=""></img>
                                <h5 className="worktitle">Desenvolvimento</h5>
                                </Col>
                                <Col className="workitem">
                                <img src={communication_svg} className="workimg" alt=""></img>
                                <h5 className="worktitle">Comunicação e entregas</h5>
                                </Col>
                                <Col className="workitem">
                                <img src={documentation_svg} className="workimg" alt=""></img>
                                <h5 className="worktitle">Documentação</h5>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                
                <div className="text-center">
                <Button className="btn btn-default btn-lg" to="/metodologias" tag={Link}>
                        Saiba mais
                </Button>
                </div>
            </Container>
            </div>
        </>
    );
}

export default Work