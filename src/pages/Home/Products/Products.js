import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Products.css";

const Products = () => {
    const { loading, setLoading } = useAuth();
    const [drones, setDrones] = useState([]);

    useEffect(() => {
        const uri = " https://still-inlet-59665.herokuapp.com/products";
        fetch(uri)
            .then((res) => res.json())
            .then((data) => {
                setDrones(data);
                setLoading(false);
            });
    }, [setLoading]);
    if (loading) {
        return (
            <div className="text-center spiner-style">
                <Spinner animation="grow" variant="danger" />
            </div>
        );
    }
    // setIsLoading
    return (
        <div className="bg-dark">
            <h1 className="text-center text-white py-2">Your Favourite Car</h1>

            <Container className="text-center pb-2">
                <Row xs={1} md={2} lg={3} className="g-4 pb-5 ">
                    {drones.slice(0, 6).map((drone) => (
                        <Col key={drone._id}>

                            <Card className="border border-4 border-danger rounded p-2 h ">
                                <Card.Img variant="top" className="h border border-2 rounded" src={drone.img} />
                                <Card.Body>
                                    <Card.Title>{drone.name}</Card.Title>
                                    <Card.Text>
                                        {drone.description?.slice(0, 70)}...
                                    </Card.Text>
                                    <Card.Text>
                                        {drone.price}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Link to={`/placeorder/${drone._id}`}>
                                        <button type="button" class="btn btn-outline-primary w-100"> Order Now</button>

                                    </Link>
                                </Card.Footer>
                            </Card>


                        </Col>
                    ))}
                </Row>
                <Link to="/explore">
                    <button type="button" class="btn btn-outline-primary w-25 mx-auto">See more</button>

                </Link>
            </Container>
        </div>
    );
};

export default Products;
