
import React from "react";
import star from "../assets/star.svg"

interface Props {
    rating: number
}

const StarRating: React.FC<Props> = ({ rating }) => {
    return (
        <div>
            {new Array(rating).fill(0).map((_, index) => <img key={index} src={star} alt="" />)}
        </div>
    )
}

export { StarRating }