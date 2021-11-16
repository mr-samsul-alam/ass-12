import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AboutDrone.css";

const AboutDrone = () => {
    return (
        <div className="about-deone">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <img
                            className="img-fluid"
                            src="https://i1.wp.com/bestsellingcarsblog.com/wp-content/uploads/2013/07/Car-dealership.-Picture-courtesy-of-speedfactorycars.com_.jpg"
                            alt=""
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="drone-info">
                            <h1>
                                Specializing in car Services, and Aerial
                                Photography
                            </h1>
                            <p>
                            Car rentals — File a complaint with your state consumer protection agency and the Federal Trade Commission. Auto loans or payments — File a complaint with the Consumer Financial Protection Bureau. Car warranty — Contact your state's attorney general. But, if you bought a used car from a private owner, the warranty may not be valid.
                                
                            </p>
                            <h3>- Mobile Device Supported.</h3>
                            <h3>- Easy integrative control.</h3>
                            <h3>- Customized Commands.</h3>
                            <button>Learn More...</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutDrone;
