import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";

import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "./About.css";

const About = () => {
    return (
        <div id="bg">
            <Header></Header>
            <div className="about-style flex-column">
                <h1>About us </h1>

            </div>
            <div className="for-about-back">
                <Container >
                    <Row className='d-flex '>
                        <Col xs={12} md={6}>
                            <div className="container text-white">
                                <h2>Car Wala</h2>
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
                                src="https://www.cnet.com/a/img/7qLSeK9aw5q4oxbLKW_Fzc_mFm4=/1200x675/2020/01/07/cc9de8f0-2cf3-48bc-8a11-02b2457cbe51/ogi1-mercedes-benz-vision-avtr-concept-004.jpg"
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
