import Image from "react-bootstrap/Image";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const ProductCard = ({ data }) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const [amountInCart, setAmountInCart] = useState(0);
	return (
		<div className="w-full  lg:!h-[93%] flex flex-col p-1 gap-1 justify-between align-center">
			<div className="flex flex-row">
				<Image
					className="select-none"
					alt={data?.foto_alt}
					src={data?.foto}
					fluid
				/>
				<i
					onClick={() => setIsFavorite(!isFavorite)}
					class={`absolute right-0 text-blue-500 block fa-${
						isFavorite ? "solid" : "regular"
					} fa-heart`}
				></i>
			</div>
			<section>
				{` ${
					data.calificaciones.promedio
						? data.calificaciones.promedio
						: data.calificaciones.promedio_calificaciones
				} `}
				<i class="text-yellow-300 fa-solid fa-star"></i>
				{` (${
					data.calificaciones.cantidad
						? data.calificaciones.cantidad
						: data.calificaciones.cantidad_calificaciones
				} calificaciones)`}
			</section>
			<h6 className="font-semibold text-md">{data?.titulo}</h6>
			<h6 className="font-semibold text-sm text-blue-900">{`Fabricante: ${data?.fabricante?.nombre}`}</h6>
			<h6 className="text-xs">{data?.subtitulo}</h6>
			<section>
				<p className="font-bold text-red-600">
					{data?.datos_oferta?.porcentaje_descuento
						? data?.datos_oferta?.porcentaje_descuento
						: data?.porcentaje_descuento}
					% OFF
				</p>
				<p className="text-sm text-gray-500 line-through">
					{`${data?.moneda} `}
					{data?.precio_mercado}
				</p>
				<p className="font-bold text-blue-900">
					{`${data?.moneda} `}
					{data?.precio[0]}
				</p>
			</section>
			{amountInCart <= 0 ? (
				<Button
					className="text-nowrap !rounded-full !text-sm !font-light !align-baseline flex flex-row justify-center items-center gap-2 mt-3"
					variant="primary"
					size="md"
					active
					onClick={() => {
						setAmountInCart(1);
					}}
				>
					<i class="fa-solid fa-cart-shopping"></i>
					<p>Agregar al carrito</p>
				</Button>
			) : (
				<div className="grid grid-cols-5 items-center mt-3">
					<Button
						className="col-span-1 border-[1px] text-nowrap !rounded-l-full !text-sm !font-light !align-baseline flex flex-row justify-center items-center gap-2 mt-3"
						variant="primary"
						size="md"
						active
						onClick={() => {
							setAmountInCart(amountInCart - 1);
						}}
					>
						-
					</Button>
					<span className="col-span-3  border-y-[1px] border-blue-500 p-1 text-center items-center self-center">
						{amountInCart}
					</span>
					<Button
						className="col-span-1 border-y-blue text-nowrap !rounded-r-full !text-sm !font-light !align-baseline flex flex-row justify-center items-center "
						variant="primary"
						size="md"
						active
						onClick={() => {
							setAmountInCart(amountInCart + 1);
						}}
					>
						+
					</Button>
				</div>
			)}
		</div>
	);
};

export default ProductCard;
