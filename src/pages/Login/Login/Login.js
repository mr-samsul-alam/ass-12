import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import useAuth from "../../../hooks/useAuth";
import { Alert, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import "./Login.css";

const Login = () => {
    const { logInError, loading, handleUserLogin, signInWithGoogle } =
        useAuth();
    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };
    const handleLoginSubmit = (e) => {
        handleUserLogin(loginData.email, loginData.password, location, history);
        e.preventDefault();
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    };
    return (
        <>
            <Header></Header>
            <div className="login-style">
                <Container className="py-4">
                    <div className="box-shadows">
                        <Row>
                            <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center">
                                {!loading && (
                                    <>
                                        <Form
                                            className="mx-auto pt-4 pb-4 w-75"
                                            onSubmit={handleLoginSubmit}
                                        >
                                            <h2 className="text-center fw-bold">
                                                LOG IN
                                            </h2>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicEmail"
                                            >
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    onBlur={handleOnBlur}
                                                    placeholder="Your Email"
                                                    required
                                                    className="login-input"
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="BasicPassword"
                                            >
                                                <Form.Control
                                                    type="password"
                                                    name="password"
                                                    onBlur={handleOnBlur}
                                                    placeholder="Your Pass"
                                                    required
                                                    className="login-input"
                                                />
                                            </Form.Group>
                                            {/* <span>{logInError}</span> */}
                                            <div className="d-grid gap-2 my-4 login-input">
                                                <Button
                                                    variant="secondary"
                                                    type="submit"
                                                    className="submit-forms"
                                                >
                                                    Sign In
                                                </Button>
                                            </div>
                                            <p className="text-center">
                                                New User?
                                                <Link
                                                    to="/register"
                                                    style={{
                                                        textDecoration: "none",
                                                    }}
                                                >
                                                    &nbsp;Please Register
                                                </Link>
                                            </p>
                                        </Form>

                                    </>
                                )}

                                {loading && (
                                    <div className="text-center">
                                        <Spinner
                                            animation="border"
                                            variant="info"
                                        />
                                    </div>
                                )}
                                {logInError && (
                                    <Alert
                                        variant="danger"
                                        className="w-75 mx-auto"
                                    >
                                        {logInError}
                                    </Alert>
                                )}
                            </Col>

                            <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center bg-dark">
                                <h3 className="text-info">Or Sign in with</h3>
                                <div>
                                    <span className="fs-1 text-primary"> G</span>
                                    <span className="fs-1 text-danger">O</span>
                                    <span className="fs-1 text-warning">O</span>
                                    <span className="fs-1 text-primary">G</span>
                                    <span className="fs-1 text-primary">L</span>
                                    <span className="fs-1 text-danger">E</span>
                                </div>
                                <button
                                    onClick={handleGoogleSignIn}
                                    className="btn text-white fs-5 fw-bold g-button"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100px" height="100px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" /><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" /><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" /><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" /></svg>


                                </button>

                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;
