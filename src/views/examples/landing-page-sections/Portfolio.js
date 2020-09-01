import React from "react";
import {
    Container,
    Row,
    Col
} from "reactstrap";

//assets
import "../../../assets/css/custom.css"




function Portfolio () {
    return (
        <>
        <div className="section section-team text-center"></div>
            <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Portfólio</h2>
                <h5 className="description">
                Imagens e descrição dos projetos
                </h5>
            </Col>
            </Row>
            <div className="section-story-overview">
                <Row>
                    <Col md="6">
                    <div
                        className="image-container image-left"
                        style={{
                        backgroundImage:
                            "url(" + require("assets/img/login.jpg") + ")",
                        }}
                    >
                        <p className="blockquote blockquote-info">
                        "Over the span of the satellite record, Arctic sea ice has
                        been declining significantly, while sea ice in the
                        Antarctichas increased very slightly" <br></br>
                        <br></br>
                        <small>-NOAA</small>
                        </p>
                    </div>
                    <div
                        className="image-container"
                        style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg3.jpg") + ")",
                        }}
                    ></div>
                    </Col>
                    <Col md="5">
                    <div
                        className="image-container image-right"
                        style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg1.jpg") + ")",
                        }}
                    ></div>
                    <h3>
                        So what does the new record for the lowest level of winter
                        ice actually mean
                    </h3>
                    <p>
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever happens with climate change. Even if the
                        Arctic continues to be one of the fastest-warming regions of
                        the world, it will always be plunged into bitterly cold
                        polar dark every winter. And year-by-year, for all kinds of
                        natural reasons, there’s huge variety of the state of the
                        ice.
                    </p>
                    <p>
                        For a start, it does not automatically follow that a record
                        amount of ice will melt this summer. More important for
                        determining the size of the annual thaw is the state of the
                        weather as the midnight sun approaches and temperatures
                        rise. But over the more than 30 years of satellite records,
                        scientists have observed a clear pattern of decline,
                        decade-by-decade.
                    </p>
                    <p>
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever happens with climate change. Even if the
                        Arctic continues to be one of the fastest-warming regions of
                        the world, it will always be plunged into bitterly cold
                        polar dark every winter. And year-by-year, for all kinds of
                        natural reasons, there’s huge variety of the state of the
                        ice.
                    </p>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Portfolio