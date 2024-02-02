import React from "react";

const CategoryHeader = ({ category }) => {
	return (
		<>
			<div className="flex gap-1 justify-center align-center pt-2 pb-1 items-center">
				<h5 className="text-blue-500">{`Nuevas Ofertas en`}</h5>
				<span className="text-blue-800 font-bold">{category}</span>
			</div>
		</>
	);
};

export default CategoryHeader;
