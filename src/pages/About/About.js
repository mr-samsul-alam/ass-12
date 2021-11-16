import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";

import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "./About.css";

const About = () => {
    return (
        <div>
            <Header></Header>
            <div className="about-style">
                <h1>About us </h1>
            </div>
            <div className="for-about-back">
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <div>
                                <h2>Car dealership</h2>
                                <h6>
                                    The early cars were sold by automakers to customers directly or through a variety of channels, including mail order, department stores, and traveling representatives. The first dealership in the United States was established in 1898 by William E. Metzger.
                                </h6>
                                <p>
                                    A car dealership, or vehicle local distribution, is a business that sells new or used cars at the retail level, based on a dealership contract with an automaker or its sales subsidiary. It can also carry a variety of Certified Pre-Owned vehicles. It employs automobile salespeople to sell their automotive vehicles.Today, direct sales by an automaker to consumers are limited by most states in the U.S. through franchise laws that require new cars to be sold only by licensed and bonded, independently owned dealerships
                                </p>
                                <p>
                                    Most automotive manufacturers have shifted the focus of their franchised retailers to branding and technology. New or refurbished facilities are required to have a standard look for its dealerships and have product experts to liaise with customers.
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <img
                                className="img-fluid"
                                src="https://www.effortlessoutdoormedia.com/wp-content/uploads/2019/06/Car-dealership.jpg"
                                alt=""
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;
