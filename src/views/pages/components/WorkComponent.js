import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

import undraw_requirements from '../../../assets/svg/undraw_requirements.svg'
import undraw_brainstorm from '../../../assets/svg/undraw_brainstorm.svg'
import undraw_idea from '../../../assets/svg/undraw_idea.svg'
import undraw_programming from '../../../assets/svg/undraw_programming.svg'
import undraw_delivery from '../../../assets/svg/undraw_delivery.svg'
import undraw_documentation from '../../../assets/svg/undraw_documentation.svg'

function WorkComponent() {

    return (
        <>

        <Container className='metodologia-container'>
            <Row>
                <Col className='page-title'>
                    <h1> Como trabalhamos</h1>
                </Col>
            </Row>
            <Row className='metodologia-item'>
                <Col>
                    <img src={undraw_requirements} />
                </Col>
                <Col className='text-left'>
                    <h4> Estudo de requisitos</h4>
                    <p>
                        Suspendisse a nulla gravida, congue metus at, aliquam augue. Aenean congue vulputate egestas. Donec vulputate dui id sapien aliquet congue. Quisque quis erat vitae elit porttitor fringilla id sed nibh. Suspendisse eget ligula bibendum, aliquam quam in, efficitur lectus. Praesent lobortis, ante at suscipit sagittis, neque sapien pulvinar odio, sed.
                    </p>
                </Col>
            </Row>
            <Row className='metodologia-item'>
                <Col className='text-right'>
                    <h4> Brainstorming </h4>
                    <p>
                        Suspendisse a nulla gravida, congue metus at, aliquam augue. Aenean congue vulputate egestas. Donec vulputate dui id sapien aliquet congue. Quisque quis erat vitae elit porttitor fringilla id sed nibh. Suspendisse eget ligula bibendum, aliquam quam in, efficitur lectus. Praesent lobortis, ante at suscipit sagittis, neque sapien pulvinar odio, sed.
                    </p>
                </Col>
                <Col>
                    <img src={undraw_brainstorm} />
                </Col>
            </Row>
            <Row className='metodologia-item'>
                <Col>
                    <img src={undraw_idea} />
                </Col>
                <Col className='text-left'>
                    <h4> Validação de Ideias </h4>
                    <p>
                        Suspendisse a nulla gravida, congue metus at, aliquam augue. Aenean congue vulputate egestas. Donec vulputate dui id sapien aliquet congue. Quisque quis erat vitae elit porttitor fringilla id sed nibh. Suspendisse eget ligula bibendum, aliquam quam in, efficitur lectus. Praesent lobortis, ante at suscipit sagittis, neque sapien pulvinar odio, sed.
                    </p>
                </Col>
            </Row>
            <Row className='metodologia-item'>
                <Col className='text-right'>
                    <h4> Desenvolvimento </h4>
                    <p>
                        Suspendisse a nulla gravida, congue metus at, aliquam augue. Aenean congue vulputate egestas. Donec vulputate dui id sapien aliquet congue. Quisque quis erat vitae elit porttitor fringilla id sed nibh. Suspendisse eget ligula bibendum, aliquam quam in, efficitur lectus. Praesent lobortis, ante at suscipit sagittis, neque sapien pulvinar odio, sed.
                    </p>
                </Col>
                <Col>
                    <img src={undraw_programming} />
                </Col>
            </Row>
            <Row className='metodologia-item'>
                <Col>
                    <img src={undraw_delivery} />
                </Col>
                <Col className='text-left'>
                    <h4>Comunicação e Entregas </h4>
                    <p>
                        Suspendisse a nulla gravida, congue metus at, aliquam augue. Aenean congue vulputate egestas. Donec vulputate dui id sapien aliquet congue. Quisque quis erat vitae elit porttitor fringilla id sed nibh. Suspendisse eget ligula bibendum, aliquam quam in, efficitur lectus. Praesent lobortis, ante at suscipit sagittis, neque sapien pulvinar odio, sed.
                    </p>
                </Col>
            </Row>
            <Row className='metodologia-item'>
                <Col className='text-right'>
                    <h4> Documentação </h4>
                    <p>
                        Suspendisse a nulla gravida, congue metus at, aliquam augue. Aenean congue vulputate egestas. Donec vulputate dui id sapien aliquet congue. Quisque quis erat vitae elit porttitor fringilla id sed nibh. Suspendisse eget ligula bibendum, aliquam quam in, efficitur lectus. Praesent lobortis, ante at suscipit sagittis, neque sapien pulvinar odio, sed.
                    </p>
                </Col>
                <Col>
                    <img src={undraw_documentation} />
                </Col>
            </Row>
        </Container>
        
        </>
    );
}

export default WorkComponent;