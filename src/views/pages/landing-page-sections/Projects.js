import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardImg, 
    CardBody, 
    CardTitle, 
    CardText, 
    Button
} from "reactstrap";

//assets
import "../../../assets/css/custom.css"

import raras_logo from '../../../assets/img/projects/raras_logo.png'
import deepwild_logo from '../../../assets/img/projects/deepwild_logo.png'


function Portfolio () {
    return (
        <>
        <div className="section section-team text-center"></div>
        <Container>
            <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Portfólio</h2>
            </Col>
            </Row>
            <div className="section-story-overview">
                <Row>
                    <Col md="6">
                        <Card className='text-center'>
                            <CardImg className='project-card-img' alt="..." src={raras_logo} top></CardImg>
                            <CardBody>
                            <CardTitle tag="h4">Vidas Raras - Q&A</CardTitle>
                            <CardText>
                            O maior grafo relacionado a doenças raras. Raras.org é uma iniciativa de ciência aberta para trazer avanços na inteligência artificial e encontrar respostas para doenças raras.
                            </CardText>
                            <Button
                                color="primary"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                Saiba mais
                            </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card className='text-center'>
                            <CardImg className='project-card-img' alt="..." src={deepwild_logo} top></CardImg>
                            <CardBody>
                            <CardTitle tag="h4">DeepWild</CardTitle>
                            <CardText>
                            A DeepWild é uma ferramenta que auxilia na conservação e monitoramento de espécies selvagens. Aplica inteligência artificial que identifica e classifica animais em vídeos.
                            </CardText>
                            <Button
                                color="primary"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                Saiba mais
                            </Button>
                            </CardBody>
                        </Card>
                    
                    </Col>
                </Row>
            </div>

            </Container>
        </>
    );
}

export default Portfolio