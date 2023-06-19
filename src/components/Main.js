import site_workers_illustration from "../assets/site-workers-illustration.svg";
import arrow_img from "../assets/arrow-img.svg";
import wave_img from "../assets/wave-img.svg";
import symbol_img from "../assets/symbol-img.svg";
import stroke from "../assets/stroke.svg";
import stone_img from "../assets/stone-img.svg";
import flower_img from "../assets/flower-img.svg";
import leaf1_img from "../assets/leaf1-img.svg";
import leaf2_img from "../assets/leaf2-img.svg";
import yellow_obj_img from "../assets/yellow-obj-img.svg";
import circle_img from "../assets/circle-img.svg";

const Main = () => {
	return (
		<main className="main">
			<section className="online-presence">
				<h1>Transform Your Online Presence Today</h1>
				<p>
					Our websites and landing pages will help you scale your business and
					skyrocket your sales
				</p>
				<img
					src={site_workers_illustration}
					alt="Illustration of developers making website"
					className="site-workers-illustration"
				/>
				<div className="image-collection-1">
					<img src={arrow_img} alt="" className="arrow_img" />
					<img src={wave_img} alt="" className="wave_img" />
					<img src={symbol_img} alt="" className="symbol_img" />
				</div>
				<div className="image-collection-2">
					<img src={wave_img} alt="" className="wave_img" />
					<img src={symbol_img} alt="" className="symbol_img" />
					<img src={arrow_img} alt="" className="arrow_img" />
				</div>
			</section>
			<section className="choose-us">
				<div className="choose-us__h1">
					<h1>Why choose us</h1>
					<img src={stroke} alt="" className="stroke" />
				</div>
				<div className="reasons">
					<div className="reasons__1">
						<div className="num">1</div>
						<div className="text">
							<h3>Power</h3>
							<p>
								Our websites will highlight the quality and performance of your
								company, making your offer irresistible.
							</p>
						</div>
					</div>
					<div className="reasons__2">
						<div className="num">2</div>
						<div className="text">
							<h3>Uniqueness</h3>
							<p>
								We create unique designes that will help you easily stand out in
								the market.
							</p>
						</div>
					</div>
					<div className="reasons__3">
						<div className="num">3</div>
						<div className="text">
							<h3>Delivery</h3>
							<p>
								We assure you of quick delivery of our product, with consistent
								and frequent updates on the progress.
							</p>
						</div>
					</div>
				</div>
				<div className="image-collection-1">
					<img src={yellow_obj_img} alt="" className="yellow_obj_img" />
					<img src={stone_img} alt="" className="stone_img" />
					<img src={leaf1_img} alt="" className="leaf1_img" />
				</div>
				<div className="image-collection-2">
					<img src={leaf2_img} alt="" className="leaf2_img" />
					<img src={flower_img} alt="" className="flower_img" />
					<img src={circle_img} alt="" className="circle_img" />
				</div>
			</section>
			<section className="our-projects"></section>
		</main>
	);
};
export default Main;
