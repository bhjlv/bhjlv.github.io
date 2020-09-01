
import React from "react";
import {
    Container,
    Row,
    Col
} from "reactstrap";

//assets
import "../../../assets/css/custom.css"
import laptop from '../../../assets/img/laptop.png'


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
                    <img src={laptop} className="workimg" alt=""></img>
                    <h5 className="worktitle">Estudo dos requisitos</h5>
                    <h6 className="workdescription">
                        Suspendisse vitae velit erat. Quisque volutpat libero id leo convallis, sed consequat nunc scelerisque. Ut.
                    </h6>
                    </Col>
                    <Col className="workitem">
                    <img src={laptop} className="workimg" alt=""></img>
                    <h5 className="worktitle">Brainstorm</h5>
                    <h6 className="workdescription">
                        Suspendisse vitae velit erat. Quisque volutpat libero id leo convallis, sed consequat nunc scelerisque. Ut.
                    </h6>
                    </Col>
                    <Col className="workitem">
                    <img src={laptop} className="workimg" alt=""></img>
                    <h5 className="worktitle">Validação das ideias</h5>
                    <h6 className="workdescription">
                        Suspendisse vitae velit erat. Quisque volutpat libero id leo convallis, sed consequat nunc scelerisque. Ut.
                    </h6>
                    </Col>
                </Row>
                <Row>
                    <Col className="workitem">
                    <img src={laptop} className="workimg" alt=""></img>
                    <h5 className="worktitle">Desenvolvimento</h5>
                    <h6 className="workdescription">
                        Suspendisse vitae velit erat. Quisque volutpat libero id leo convallis, sed consequat nunc scelerisque. Ut.
                    </h6>
                    </Col>
                    <Col className="workitem">
                    <img src={laptop} className="workimg" alt=""></img>
                    <h5 className="worktitle">Comunicação e entregas</h5>
                    <h6 className="workdescription">
                        Suspendisse vitae velit erat. Quisque volutpat libero id leo convallis, sed consequat nunc scelerisque. Ut.
                    </h6>
                    </Col>
                    <Col className="workitem">
                    <img src={laptop} className="workimg" alt=""></img>
                    <h5 className="worktitle">Documentação</h5>
                    <h6 className="workdescription">
                        Suspendisse vitae velit erat. Quisque volutpat libero id leo convallis, sed consequat nunc scelerisque. Ut.
                    </h6>
                    </Col>
                </Row>
                </Container>
                {/* <div className="section-story-overview">
                <Row>
                    <Col md="12">
                    <div
                        className="section-images"
                        style={{
                        scale: "80%",
                        backgroundImage:
                            "url(" + require("assets/img/comotrabalhamos.png") + ")",
                        }}
                    >
                    </div>
                    </Col>
                </Row>
                </div> */}
                <div className="separator separator-primary"></div>
                <div className="text-center">
                <button class="btn btn-default btn-lg">Saiba mais</button>
                </div>
            </Container>
            </div>
        </>
    );
}

export default Metodologia