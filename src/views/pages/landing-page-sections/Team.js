import React from "react";
import {
    Container,
    Row,
    Col,
    Card, CardTitle, CardImg, CardText, CardFooter
} from "reactstrap";

//assets
import "../../../assets/css/custom.css"

import joao_picture from '../../../assets/img/joao.jpeg'
import lucas_picture from '../../../assets/img/lucas.jpeg'
import bernardo_picture from '../../../assets/img/bernardo.jpeg'
import hugo_picture from '../../../assets/img/hugo.jpeg'
import vitor_picture from '../../../assets/img/vitor.JPG'

const team = [ 
    { 
        name: 'Bernardo Favoreto', 
        role: 'Engenheiro de IA',
        image: bernardo_picture,
        linkedin: "https://www.linkedin.com/in/bernardo-favoreto/",
        github:  "https://github.com/Bernardo-Favoreto"   
    },
    { 
        name: 'Hugo Saito', 
        role: 'Gerente de Projetos',
        image: hugo_picture,
        linkedin: "https://www.linkedin.com/in/hugosaito/",
        github:  "https://github.com/saitoHugo"   
    },
    { 
        name: 'João Pedro Carrilho', 
        role: 'Banco de dados e Back-End',
        image: joao_picture,
        linkedin: "https://www.linkedin.com/in/jpmcarrilho/",
        github:  "https://github.com/JpMCarrilho"   
    },
    { 
        name: 'Lucas Sabbatini', 
        role: 'Back-End e Segurança',
        image: lucas_picture,
        linkedin: "https://www.linkedin.com/in/lucassabbatini/",
        github:  "https://github.com/LucasSabbatini"   
    },
    { 
        name: 'Vitor Bigelli', 
        role: 'UI/UX e Front-End',
        image: vitor_picture,
        linkedin: "https://www.linkedin.com/in/vitor-bigelli/",
        github:  "https://github.com/vitorbigelli"   
    },
] 


function Team () {
    return (
        <>
        <div className="section section-team text-center">
            <Container>
                <h2 className="title">Here is our team</h2>
                <div className="team">
                <Row>
                        {
                            Object.values(team).map( (member, index) => {
                                return (
                                    <Col key={index}>
                                    <Card className='team-member-card'>
                                        <CardImg src={member.image} alt={`SIGIZY - sigizy.com - ${member.name}`} /> 
                                        <CardTitle> { member.name } </CardTitle>
                                        <CardText> { member.role } </CardText>
                                        <CardFooter> 
                                            <a target='_blank'
                                            className="btn btn-icon btn-round"
                                            color="info"
                                            href="https://www.linkedin.com/in/bernardo-favoreto/"
                                            rel="noopener noreferrer"
                                            // onClick={(e) => e.preventDefault()}
                                            >
                                                <i className="fab fa-linkedin"></i>
                                            </a>
                                            <a target='_blank'
                                            className="btn btn-icon btn-round"
                                            color="info"
                                            href="https://github.com/Bernardo-Favoreto"
                                            rel="noopener noreferrer"
                                            // onClick={(e) => e.preventDefault()}
                                            >
                                                <i className="fab fa-github"></i>
                                            </a>

                                        </CardFooter>
                                    </Card>
                                    </Col>
                                )
                            })
                        }
                </Row>
                </div>
            </Container>
        </div>
        </>
    );
}

export default Team