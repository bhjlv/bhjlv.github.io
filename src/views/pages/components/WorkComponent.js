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
                        Com os requisitos levantados e validados, partimos para a etapa da brainstorming da solução. Aqui, inicialmente deixamos as ideias fluir sem filtro algum para que possamos levantar diversas formas de como pode ser a solução final. Em seguida, afunilamos para as três melhores possibilidades.
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
                            Com as melhores ideias bem definidas, partimos então para etapa de validação, onde aplicamos metodologias como SWOT, Diagrama Esforço x Recompensa e outras abordagens que se adequam ao tipo de solução, escolhendo a solução mais viável com base na eficácia, potencial em resolver todos os problemas de forma confiável, tempo de desenvolvimento e custo, enxugando qualquer funcionalidade que não seja absolutamente necessária 
                        </p>
                    </Col>
                </Row>
            </Fade>
            <Fade right>
                <Row className='metodologia-item'>
                    <Col className='text-right'>
                        <h4> Desenvolvimento </h4>
                        <p>
                            Quando ambas as partes estão suficientemente satisfeitas com a solução desenhada, e a proposta é aceita pelo cliente, já ciente dos custos de desenvolvimento e implantação, inicia-se a etapa de desenvolvimento. Sua primeira etapa consiste na elaboração de um cronograma, definindo prazos para desenvolvimento de cada funcionalidade, bem como datas para reuniões de acompanhamento do projeto. Em seguida inicia-se a implementação de scripts aplicando metodologia ágil com Scrum.
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
                            Encaramos nossos clientes como parceiros. Por isso, durante o processo de desenvolvimento, pequenas entregas podem ser determinadas, com o intuito do cliente ter total percepção das etapas que foram, estão sendo e serão implementadas. Respeito, comprometimento, foco e aberttransparênciaura são valores que carregamos conosco, e portanto a comunicação aberta é fundamental para todo e qualquer projeto que desenvolvemos. É fundamental para nós que nossos parceiros se sintam seguros e confiantes com a qualidade e eficiência das soluções que construímos. 
                        </p>
                    </Col>
                </Row>
            </Fade>
            <Fade right>
                <Row className='metodologia-item'>
                    <Col className='text-right'>
                        <h4> Documentação </h4>
                        <p>
                            Por fim, com a solução e entregue e devidamente validada e aprovada, iniciamos a última etapa, de documentação do projeto, disponibilizando códigos-fonte e manuais e, caso exista a possibilidade, apresentação de uma prospecção de continuação, otimização ou até mesmo desenvolvimento de novos projetos, com o intuito de deixar as portas abertas novas parcerias. 
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