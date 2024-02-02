import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	const rating = 3.5;
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

export default App;
