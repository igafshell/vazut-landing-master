import site_workers_illustration from "../assets/site-workers-illustration.svg";
import arrow_img from "../assets/arrow-img.svg";
import wave_img from "../assets/wave-img.svg";
import symbol_img from "../assets/symbol-img.svg";
import leaf1_img from "../assets/leaf1-img.svg";
import leaf2_img from "../assets/leaf2-img.svg";
import yellow_obj_img from "../assets/yellow-obj-img.svg";
import circle_img from "../assets/circle-img.svg";
import stone_img from "../assets/stone-img.svg";
import flower_img from "../assets/flower-img.svg";
import website_making_illustration from "../assets/making-website-illustration.svg";
import delivery_illustration from "../assets/delivery-illustration.svg";

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
				</div>
				<div className="reason">
					<div className="reason__text1 text">
						Our websites will highlight the quality of your company and help you
						easily stand out in the market.
					</div>
					<img
						src={website_making_illustration}
						alt="Another illustration of devs making a website"
						className="website_making_illustration"
					/>
					<img
						src={delivery_illustration}
						alt="Illustration of delivery"
						className="delivery_illustration"
					/>
					<div className="text reason__text2 ">
						Also, we assure you of quick delivery of our producs, with
						consistent and frequent updated on the progress.
					</div>
				</div>
				<div className="image-collection-1">
					<img src={yellow_obj_img} alt="" className="yellow_obj_img" />
					<img src={leaf1_img} alt="" className="leaf1_img" />
					<img src={stone_img} alt="" className="stone_img" />
				</div>
				<div className="image-collection-2">
					<img src={leaf2_img} alt="" className="leaf2_img" />
					<img src={flower_img} alt="" className="flower_img" />
					<img src={circle_img} alt="" className="circle_img" />
				</div>
			</section>
			<section className="our-projects">
				<h1>Our Projects</h1>
				<a href="#">
					<img />
				</a>
				<a href="#">
					<img />
				</a>
				<a href="#">
					<img />
				</a>
			</section>
		</main>
	);
};
export default Main;
