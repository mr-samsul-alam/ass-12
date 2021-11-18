import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import "./AddReview.css";

const AddReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const uri = " https://still-inlet-59665.herokuapp.com/reviews";
        fetch(uri, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert("added review successfully");
                    reset();
                }
            });
    };
    return (
        <div className="addreview-form">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-50 mx-auto for-shadow py-3"
            >
                <h2>Please Give a Review</h2>
                <input    {...register("img")} defaultValue={user?.photoURL} />
                <input class="form-control bg-dark" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled {...register("name")} defaultValue={user?.displayName} />
                <textarea
                    {...register("review")}
                    placeholder="Your Review"
                    required
                />
                <input
                    type="number"
                    {...register("rating", { min: 0, max: 5 })}
                    placeholder="Please give Rating (0-5)"
                    required
                />
                <input type="submit" className="confirmbutton" />
            </form>
        </div>
    );
};

export default AddReview;
