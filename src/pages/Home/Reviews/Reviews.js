import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import "./Reviews.css";

const showRating = (star) => {
    const stars = [];
    const int = parseInt(star, 10)
    for (let i = 1; i <= int; i++) {
        stars.push(<FontAwesomeIcon className='rating-icon' icon={faStar} />)
    }
    return (
        <div>{stars}</div>
    )
}




const Reviews = () => {
    const { user, loading, setLoading } = useAuth();
    const [reviews, setReviews] = useState([]);
    console.log(reviews)
    useEffect(() => {
        const uri = " https://still-inlet-59665.herokuapp.com/reviews";
        fetch(uri)
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
                setLoading(false);
            });
    }, [setLoading]);
    console.log(reviews.rating);
    if (loading) {
        return (
            <div className="text-center spiner-style">
                <Spinner animation="grow" variant="danger" />
            </div>
        );
    }
    return (
        <div className="reviews-style">
            <h2 className="text-center">Clients Review</h2>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {reviews.map((review) => (
                        <Col key={review?._id}>
                            <Card className="">
                                <span>
                                    <img src={review?.img} alt="" />
                                    <p>{review.rating}</p>
                                    {
                                        showRating(review?.rating)
                                    }
                                </span>
                                <Card.Body>
                                    <Card.Title className="review-card-title">
                                        {review?.name}
                                    </Card.Title>
                                    <Card.Text className="review-card-para">
                                        {review?.review?.slice(0, 80)}...
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;
