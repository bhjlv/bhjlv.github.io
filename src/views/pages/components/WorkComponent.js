import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

import undraw_requirements from '../../../assets/svg/undraw_requirements.svg'
import undraw_brainstorm from '../../../assets/svg/undraw_brainstorm.svg'
import undraw_idea from '../../../assets/svg/undraw_idea.svg'
import undraw_programming from '../../../assets/svg/undraw_programming.svg'
import undraw_delivery from '../../../assets/svg/undraw_delivery.svg'
import undraw_documentation from '../../../assets/svg/undraw_documentation.svg' 



import Fade from 'react-reveal/Fade'


function WorkComponent() {

    return (
        <>

        <Container className='metodologia-container'>
            <Row>
                <Col className='page-title'>
                    <h1> Como trabalhamos</h1>
                    <p>Todo projeto começa com uma conversa. É quando os clientes conhecem a sigizy e nós exploramos e entendemos quais as suas dores e já começamos a imaginar possíveis formas de ajudar nos desafios apresentados.</p>
                </Col>
            </Row>
            <Fade left>
                <Row className='metodologia-item'> 
                        <Col>
                            <img src={undraw_requirements} />
                        </Col>
                        <Col className='text-left'>
                            <h4> Estudo de requisitos</h4>
                            <p>
                                Após a conversa inicial, é feita uma reunião interna onde revisamos as notas feitas no primeiro contato e então listamos as funcionalidades que precisarão ser implementadas sem ainda entrar em detalhes do <b>como</b>. Isso é feito para que possamos alinhar com os clientes se a solução que será desenhada de fato resolve os problemas apresentados. Essa etapa pode ser realizada mais de uma vez, até que ambas as partes estejam completamente alinhadas e satisfeitas.
                            </p>
                        </Col>
                </Row>
            </Fade>
            <Fade right>
                <Row className='metodologia-item'>
                    <Col className='text-right'>
                        <h4> Brainstorming </h4>
                        <p>
                        Com os requisitos levantados e validados, partimos para a etapa da brainstorming da solução. Aqui, inicialmente deixamos as ideias fluir sem filtro algum para que possamos levantar diversas formas de como pode ser a solução final. Em seguida, afunilamos para as três melhores possibilidades para que então, utilizando metodologias de (pensei naquele framework de esforço vs recompensa, algo assim) escolhemos a melhor solução com base na eficácia da solução, visando resolver todos os problemas de forma confiável, tempo de desenvolvimento para que o cliente tenha a solução no menor tempo possível e o custo, enxugando qualquer funcionalidade que não seja absolutamente necessária.
                        </p>
                    </Col>
                    <Col>
                        <img src={undraw_brainstorm} />
                    </Col>
                </Row>
            </Fade>
            <Fade left>
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
            </Fade>
            <Fade right>
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
            </Fade>
            <Fade left>
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
            </Fade>
            <Fade right>
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
            </Fade>
        </Container>
        
        </>
    );
}

export default WorkComponent;