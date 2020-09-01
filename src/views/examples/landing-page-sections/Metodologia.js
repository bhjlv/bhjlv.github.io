
import React from "react";
import {
    Container,
    Row,
    Col
} from "reactstrap";

//assets
import "../../../assets/css/custom.css"
import laptop from '../../../assets/img/laptop.png' 


import brainstorm_svg from '../../../assets/svg/idea.svg'
import communication_svg from '../../../assets/svg/communication.svg'
import dev_svg from '../../../assets/svg/rocket.svg'
import documentation_svg from '../../../assets/svg/browser.svg'
import validation_svg from '../../../assets/svg/finger.svg'
import requirements_svg from '../../../assets/svg/wrench.svg'

function Metodologia () {
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
                    Etiam faucibus ipsum erat, at rutrum lacus tincidunt sed. Phasellus in efficitur mauris. Mauris ac rhoncus enim. Nulla eleifend hendrerit quam, et varius odio elementum. 
                    </h5>
                </Col>
                </Row>
                <Container className="howework">
                <Row>
                    <Col className="workitem">
                    <img src={requirements_svg} className="workimg" alt=""></img>
                    <h5 className="worktitle">Estudo dos requisitos</h5>
                    <h6 className="workdescription"> 
                        Suspendisse vitae velit erat. Quisque volutpat libero id leo convallis, sed consequat nunc scelerisque. Ut.
                    </h6>
                    </Col>
                    <Col className="workitem">
                    <img src={brainstorm_svg} className="workimg" alt=""></img>
                    <h5 className="worktitle">Brainstorm</h5>
                    <h6 className="workdescription">
                        Suspendisse vitae velit erat. Quisque volutpat libero id leo convallis, sed consequat nunc scelerisque. Ut.
                    </h6>
                    </Col>
                    <Col className="workitem">
                    <img src={validation_svg} className="workimg" alt=""></img>
                    <h5 className="worktitle">Validação das ideias</h5>
                    <h6 className="workdescription">
                        Suspendisse vitae velit erat. Quisque volutpat libero id leo convallis, sed consequat nunc scelerisque. Ut.
                    </h6>
                    </Col>
                </Row>
                <Row>
                    <Col className="workitem">
                    <img src={dev_svg} className="workimg" alt=""></img>
                    <h5 className="worktitle">Desenvolvimento</h5>
                    <h6 className="workdescription">
                        Suspendisse vitae velit erat. Quisque volutpat libero id leo convallis, sed consequat nunc scelerisque. Ut.
                    </h6>
                    </Col>
                    <Col className="workitem">
                    <img src={communication_svg} className="workimg" alt=""></img>
                    <h5 className="worktitle">Comunicação e entregas</h5>
                    <h6 className="workdescription">
                        Suspendisse vitae velit erat. Quisque volutpat libero id leo convallis, sed consequat nunc scelerisque. Ut.
                    </h6>
                    </Col>
                    <Col className="workitem">
                    <img src={documentation_svg} className="workimg" alt=""></img>
                    <h5 className="worktitle">Documentação</h5>
                    <h6 className="workdescription">
                        Suspendisse vitae velit erat. Quisque volutpat libero id leo convallis, sed consequat nunc scelerisque. Ut.
                    </h6>
                    </Col>
                </Row>
                </Container>
                <div className="text-center">
                <button class="btn btn-default btn-lg">Saiba mais</button>
                </div>
            </Container>
            </div>
        </>
    );
}

export default Metodologia