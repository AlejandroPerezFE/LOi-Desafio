import { Image } from "react-bootstrap";

const Footer = () => {
	return (
		<div className="w-full bg-yellow-300 flex justify-center py-14">
			<section className="flex flex-col gap-5 text-center w-[50%]">
				<section className="flex flex-row justify-center align-center">
					<Image
						alt="logo de facebook"
						src="https://d391ci4kxgasl8.cloudfront.net/filters:fill(FFFFFF):quality(91):format(webp)/logos_redes_sociales/Facebook.png"
					/>
					<Image
						alt="logo de instagram"
						src="https://d391ci4kxgasl8.cloudfront.net/filters:fill(FFFFFF):quality(91):format(webp)/logos_redes_sociales/Instagram.png"
					/>
					<Image
						alt="logo de tiktok"
						src="https://d391ci4kxgasl8.cloudfront.net/filters:fill(FFFFFF):quality(91):format(webp)/logos_redes_sociales/Tiktok.png"
					/>
				</section>
				<Image
					src="https://d391ci4kxgasl8.cloudfront.net/_img_empresas/loi-la-oferta-irresistible.png"
					alt="logo de LOi"
					className="h-20 w-56 self-center"
				/>
				<div className="flex flex-col">
					<h3 className="font-bold text-lg">
						Si pagas de mas es porque quieres.
					</h3>
					<p>
						Somos La Oferta Irresistible (LOI) el primer sitio de e-commerce de
						ofertas y descuentos del Uruguay con verdaderos FANS
					</p>
				</div>
				<div className="flex flex-row gap-3 justify-center">
					<p className="font-bold text-lg">LOi en otros países:</p>
					<Image
						src="https://d391ci4kxgasl8.cloudfront.net/filters:fill(FFFFFF):quality(90):format(webp)/_img_empresas/banderas/chile.png"
						alt="logo de facebook"
					/>
					<Image
						src="https://d391ci4kxgasl8.cloudfront.net/filters:fill(FFFFFF):quality(90):format(webp)/_img_empresas/banderas/brazil.png"
						alt="logo de facebook"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<button className="hover:text-white hover:bg-blue-800 p-2 rounded-md border-[1px] border-blue-500">
						Consulta aqui tu factura electronica hasta xx/xx/xx
					</button>
					<button className="hover:text-white hover:bg-blue-800 p-2 rounded-md border-[1px] border-blue-500">
						Consulta aqui tu factura electronica hasta xx/xx/xx
					</button>
					<hr />
					<a href="">Politicas de garantia</a>
					<a href="">Terminos y condiciones</a>
				</div>
			</section>
		</div>
	);
};

export default Footer;
