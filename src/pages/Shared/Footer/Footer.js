import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Footer.css";

const Footer = () => {
    const { user } = useAuth();
    return (
        <div className="footer-style py-5">
            <Container>
                <Row>
                    <Col md={6} xs={12} className="my-3">
                        <div>
                            <h1> Car <span className="word-color">Wala</span></h1>
                            <p>
                                Competitive Prices on More Than 100 Million Items. Discover Products Online Now! Promotions on clothing, electronics, sports and more. Check out all the deals!

                            </p>
                            <div className="footer-icon">
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-twitter-square"></i>
                                <i className="fab fa-linkedin"></i>
                                <i className="fab fa-instagram"></i>
                            </div>
                        </div>
                    </Col>

                    <Col md={6} xs={12} className="my-3">
                        <div>
                            <h2 className="mb-3">Our Address</h2>
                            <div>
                                <span> Oss B.V. Angelenweg 141 5349 </span>
                            </div>
                            <div className="my-2">
                                <span>ma t/m vrij 8:00-17:30</span>
                            </div>
                            <div>
                                <span>taherakhanom@gmail.com</span>
                            </div>
                            <div className="mt-2">
                                <span>09.00 AM - 17.00 PM</span>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
            <div className="my-3">
                <p>Copyrights &copy; 2021. All rights reserved by Sawon</p>
            </div>
        </div>
    );
};
export default Footer;
