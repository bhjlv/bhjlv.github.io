import React from "react";
import {
    Container,
    Row,
    Col,
    Button
} from "reactstrap";

//assets
import "../../../assets/css/custom.css"

import joao_picture from '../../../assets/img/joao.jpeg'
import lucas_picture from '../../../assets/img/lucas.jpeg'
import bernardo_picture from '../../../assets/img/bernardo.jpeg'
import hugo_picture from '../../../assets/img/hugo.jpeg'
import vitor_picture from '../../../assets/img/vitor.JPG'



function Time () {
    return (
        <>
        <div className="section section-team text-center">
            <Container>
                <h2 className="title">Here is our team</h2>
                <div className="team">
                <Row>
                    <Col xs={1}>
                        &nbsp;
                    </Col>
                    <Col md={2}>
                    <div className="team-player">
                        <img
                        alt="..."
                        className="rounded-circle img-fluid img-raised"
                        src={bernardo_picture}
                        ></img>
                        <h4 className="title">Bernardo Favoreto</h4>
                        <p className="category text-info">Engenheiro de Inteligência Artificial</p>
                        {/* <p className="description">
                        You can write here details about one of your team members.
                        You can give more details about what they do. Feel free to
                        add some{" "}
                        <a target='_blank' href="#pablo" onClick={(e) => e.preventDefault()}>
                            links
                        </a>{" "}
                        for people to be able to follow them outside the site.
                        </p> */}
                        <a target='_blank'
                        className="btn btn-icon btn-round"
                        color="info"
                        href="https://www.linkedin.com/in/bernardo-favoreto/"
                        // onClick={(e) => e.preventDefault()}
                        >
                        <i className="fab fa-linkedin"></i>
                        </a>
                        <a target='_blank'
                        className="btn btn-icon btn-round"
                        color="info"
                        href="https://github.com/Bernardo-Favoreto"
                        // onClick={(e) => e.preventDefault()}
                        >
                        <i className="fab fa-github"></i>
                        </a>
                    </div>
                    </Col>
                    <Col md={2}>
                    <div className="team-player">
                        <img
                        alt="..."
                        className="rounded-circle img-fluid img-raised"
                        src={hugo_picture}
                        ></img>
                        <h4 className="title">Hugo Saito</h4>
                        <p className="category text-info">Gerente de Projetos eDesenvolvedor</p>
                        {/* <p className="description">
                        You can write here details about one of your team members.
                        You can give more details about what they do. Feel free to
                        add some{" "}
                        <a target='_blank' href="#pablo" onClick={(e) => e.preventDefault()}>
                            links
                        </a>{" "}
                        for people to be able to follow them outside the site.
                        </p> */}
                        <a target='_blank'
                        className="btn btn-icon btn-round"
                        color="info"
                        href="https://www.linkedin.com/in/hugosaito/"
                        // onClick={(e) => e.preventDefault()}
                        >
                        <i className="fab fa-linkedin"></i>
                        </a>

                        <a target='_blank'
                        className="btn btn-icon btn-round"
                        color="info"
                        href="https://github.com/saitoHugo"
                        // onClick={(e) => e.preventDefault()}
                        >
                        <i className="fab fa-github"></i>
                        </a>

                    </div>
                    </Col>
                    <Col md={2}>
                    <div className="team-player">
                        <img
                        alt="..."
                        className="rounded-circle img-fluid img-raised"
                        src={joao_picture}
                        ></img>
                        <h4 className="title">João Pedro  Carrilho</h4>
                        <p className="category text-info">Back-End e Banco de dados</p>
                        {/* <p className="description">
                        You can write here details about one of your team members.
                        You can give more details about what they do. Feel free to
                        add some{" "}
                        <a target='_blank' href="#pablo" onClick={(e) => e.preventDefault()}>
                            links
                        </a>{" "}
                        for people to be able to follow them outside the site.
                        </p> */}
                        <a target='_blank'
                        className="btn btn-icon btn-round"
                        color="info"
                        href="https://www.linkedin.com/in/jpmcarrilho/"
                        // onClick={(e) => e.preventDefault()}
                        >
                        <i className="fab fa-linkedin"></i>
                        </a>
                        <a target='_blank'
                        className="btn btn-icon btn-round"
                        color="info"
                        href="https://github.com/JpMCarrilho"
                        // onClick={(e) => e.preventDefault()}
                        >
                        <i className="fab fa-github"></i>
                        </a>
                        {/* <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        >
                        <i className="fab fa-twitter"></i>
                        </Button> */}
                    </div>
                    </Col>
                    <Col md={2}>
                    <div className="team-player">
                        <img
                        alt="..."
                        className="rounded-circle img-fluid img-raised"
                        src={lucas_picture}
                        ></img>
                        <h4 className="title">Lucas Sabbatini</h4>
                        <p className="category text-info">Back-end e Segurança</p>
                        {/* <p className="description">
                        You can write here details about one of your team members.
                        You can give more details about what they do. Feel free to
                        add some{" "}
                        <a target='_blank' href="#pablo" onClick={(e) => e.preventDefault()}>
                            links
                        </a>{" "}
                        for people to be able to follow them outside the site.
                        </p> */}
                        <a target='_blank'
                        className="btn btn-icon btn-round"
                        color="info"
                        href="https://www.linkedin.com/in/lucassabbatini/"
                        // onClick={(e) => e.preventDefault()}
                        >
                        <i className="fab fa-linkedin"></i>
                        </a>
                        <a target='_blank'
                        className="btn btn-icon btn-round"
                        color="info"
                        href="https://github.com/LucasSabbatini"
                        // onClick={(e) => e.preventDefault()}
                        >
                        <i className="fab fa-github"></i>
                        </a>
                        {/* <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        >
                        <i className="fab fa-twitter"></i>
                        </Button> */}
                    </div>
                    </Col>

                    <Col md={2}>
                    <div className="team-player">
                        <img
                        alt="..."
                        className="rounded-circle img-fluid img-raised"
                        src={vitor_picture}
                        ></img>
                        <h4 className="title">Vitor  Bigelli</h4>
                        <p className="category text-info">UI/UX e  Front-End</p>
                        {/* <p className="description">
                        You can write here details about one of your team members.
                        You can give more details about what they do. Feel free to
                        add some{" "}
                        <a target='_blank' href="#pablo" onClick={(e) => e.preventDefault()}>
                            links
                        </a>{" "}
                        for people to be able to follow them outside the site.
                        </p> */}
                        <a target='_blank'
                        className="btn btn-icon btn-round"
                        color="info"
                        href="https://www.linkedin.com/in/vitor-bigelli-559380150/"
                        // onClick={(e) => e.preventDefault()}
                        >
                        <i className="fab fa-linkedin"></i>
                        </a>
                        <a target='_blank'
                        className="btn btn-icon btn-round"
                        color="info"
                        href="https://github.com/vitorbigelli"
                        target='_blank'
                        // onClick={(e) => e.preventDefault()}
                        >
                        <i className="fab fa-github"></i>
                        </a>
                        {/* <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="https://twitter.com/bigellivitor"
                        // onClick={(e) => e.preventDefault()}
                        >
                        <i className="fab fa-twitter"></i>
                        </Button> */}
                    </div>
                    </Col>

                    <Col xs={1}>
                        &nbsp;
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
        </>
    );
}

export default Time