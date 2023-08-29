import up_arrow from "../assets/up-arrow.webp";

const Footer = () => {
	return (
		<footer className="bg-gradient-to-br from-orange-300 to-amber-300 flex justify-around items-center py-6 sm:py-8 border-black border-b-2">
			<div className="font-primary text-3xl sm:text-4xl lg:text-5xl text-white highlighted">
				alice.doe
			</div>
			<a href="#top">
				<img
					src={up_arrow}
					width={up_arrow.width}
					height={up_arrow.height}
					alt="go to the to of page"
					className="w-8 sm:w-10 lg:w-12 rounded box-highlighted"
				/>
			</a>
		</footer>
	);
};
export default Footer;
