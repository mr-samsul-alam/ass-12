import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";

const About = () => {
    return (
        <div className="about-deone d-flex flex-column justify-content-center align-items-center">
            <Container>
                <Row>
                    <Col xs={12} md={6} className="d-flex  justify-content-center align-items-center">
                        <img
                            className="img-fluid border border-4 border-danger rounded"
                            src="https://i1.wp.com/bestsellingcarsblog.com/wp-content/uploads/2013/07/Car-dealership.-Picture-courtesy-of-speedfactorycars.com_.jpg"
                            alt=""
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="drone-info">
                            <h1 className="text-danger">
                                Specializing in car Services, and Aerial
                                Photography
                            </h1>
                            <p className="text-white">
                                Car rentals — File a complaint with your state consumer protection agency and the Federal Trade Commission. Auto loans or payments — File a complaint with the Consumer Financial Protection Bureau. Car warranty — Contact your state's attorney general. But, if you bought a used car from a private owner, the warranty may not be valid.

                            </p>

                            <button>Learn More...</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
