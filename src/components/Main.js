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
import projects_shape1_img from "../assets/projects-shape1-img.svg";
import projects_shape2_img from "../assets/projects-shape2-img.svg";
import projects_shape3_img from "../assets/projects-shape3-img.svg";
import projects_shape4_img from "../assets/projects-shape4-img.svg";

const Main = () => {
	return (
		<main className="main">
			<section className="online-presence">
				<h1>The Best Freelancers, at your hand</h1>
				<p>We are the next step towards turning your dreams into reality</p>
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
				<h1>Why choose us</h1>
				<div className="reason">
					<div className="reason__text1 text">
						We will find the best fitting web developers for your business, no
						matter the budget or quality standards.
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
						Also, we assure you of reliable developers for your job and
						glass-like transparency of the process.
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
				<a
					href="/"
					className="ex1"
					aria-labelledby="First example of vazut designs"
				>
					<span class="sr-only">First example of vazut designs</span>
				</a>
				<a
					href="/"
					className="ex2"
					aria-labelledby="Second example of vazut designs"
				>
					<span class="sr-only">Second example of vazut designs</span>
				</a>
				<a
					href="/"
					className="ex3"
					aria-labelledby="Third example of vazut designs"
				>
					<span class="sr-only">Third example of vazut designs</span>
				</a>
				<img src={projects_shape1_img} alt="" className="projects-shape1" />
				<img src={projects_shape3_img} alt="" className="projects-shape3" />
				<img src={projects_shape2_img} alt="" className="projects-shape2" />
				<img src={projects_shape4_img} alt="" className="projects-shape4" />
			</section>
			<section className="consultation">
				<article>
					<h3>Book a call with us</h3>
					<p>
						We'd love to have a chat to see how we can help you. The best first
						step is for us to discuss your project during a free consultation.
						Then we can move forward from there.
					</p>
					<a href="/">Free consultation</a>
				</article>
			</section>
		</main>
	);
};
export default Main;
