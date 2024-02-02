import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const StarRating = ({ rating }) => {
	return (
		<div>
			{[1, 2, 3, 4, 5].map((star) => (
				<span
					key={star}
					className={star <= rating ? "text-warning" : "text-secondary"}
				>
					★
				</span>
			))}
		</div>
	);
};

export default StarRating;
