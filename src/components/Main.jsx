import alice_hero from "../assets/alice-hero.webp";
import link_img_1 from "../assets/link-img-1.webp";
import link_img_2 from "../assets/link-img-2.webp";
import link_img_3 from "../assets/link-img-3.webp";
import link_img_neutral from "../assets/link-img-neutral.webp";
import sundown_preview from "../assets/sundown.webp";
import flutterwave_preview from "../assets/flutterwave.webp";
import studio_kiln_preview from "../assets/studio-kiln.webp";
import writing_ill from "../assets/writing-ill.webp";
import space_ill from "../assets/space-ill.webp";
import fa_icon from "../assets/fa-icon.webp";
import twitter_icon from "../assets/twitter-icon.webp";
import email_icon from "../assets/email-icon.webp";
import insta_icon from "../assets/insta-icon.webp";
import useIntersection from "../hooks/useIntersection";
import { useRef } from "react";

const Main = () => {
	const text1 = useRef(null);
	const img1 = useRef(null);
	const p1 = useRef(null);
	const p2 = useRef(null);
	const p3 = useRef(null);
	const p5 = useRef(null);
	const hero1 = useRef(null);
	const hero2 = useRef(null);
	const hero3 = useRef(null);
	const hero4 = useRef(null);
	const head1 = useRef(null);
	const head2 = useRef(null);
	const head3 = useRef(null);
	const link1 = useRef(null);
	const link2 = useRef(null);
	const link3 = useRef(null);
	const desc1 = useRef(null);
	const desc2 = useRef(null);
	const desc3 = useRef(null);
	const social1 = useRef(null);
	const social2 = useRef(null);
	const social3 = useRef(null);
	const social4 = useRef(null);

	const text1_visible = useIntersection(text1, "0px");
	const img1_visible = useIntersection(img1, "0px");
	const p1_visible = useIntersection(p1, "-150px");
	const p2_visible = useIntersection(p2, "-150px");
	const p3_visible = useIntersection(p3, "-150px");
	const p5_visible = useIntersection(p5, "-150px");
	const hero1_visible = useIntersection(hero1, "-150px");
	const hero2_visible = useIntersection(hero2, "-150px");
	const hero3_visible = useIntersection(hero3, "-150px");
	const hero4_visible = useIntersection(hero4, "-150px");
	const head1_visible = useIntersection(head1, "-150px");
	const head2_visible = useIntersection(head2, "-150px");
	const head3_visible = useIntersection(head3, "-150px");
	const link1_visible = useIntersection(link1, "-150px");
	const link2_visible = useIntersection(link2, "-150px");
	const link3_visible = useIntersection(link3, "-150px");
	const desc1_visible = useIntersection(desc1, "-150px");
	const desc2_visible = useIntersection(desc2, "-150px");
	const desc3_visible = useIntersection(desc3, "-150px");
	const social1_visible = useIntersection(social1, "-50px");
	const social2_visible = useIntersection(social2, "-50px");
	const social3_visible = useIntersection(social3, "-50px");
	const social4_visible = useIntersection(social4, "-50px");
	return (
		<main>
			<section className="min-h-screen flex justify-end items-center border-black border-b-2 max-lg:flex-col-reverse bg-gradient-to-r from-amber-200 via-orange-200 to-orange-300">
				<div className="flex max-lg:flex-col-reverse max-lg:text-center justify-evenly lg:justify-between lg:ml-16 xl:ml-24 2xl:ml-48 items-center max-lg:flex-grow">
					<div
						className={` flex flex-col items-center lg:items-start fade_up ${
							text1_visible ? "fade_show" : ""
						}`}
						ref={text1}>
						<h1 className="text-5xl md:text-7xl lg:text-6xl xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-primary font-bold text-netutral-900 mb-4 ">
							Hi! I'm Alice Doe!
						</h1>

						<p className="font-secondary text-lg md:text-2xl lg:text-xl xl:text-2xl 3xl:text-3xl 4xl:text-4xl 4xl:leading-normal inline-block rounded-full text-neutral-800 max-sm:max-w-[22rem] max-lg:max-w-[25rem] mb-10 lg:mb-20 ">
							Design is what I'm good at, as it's the best way to express myself
							and create unique works. Nice to meet you!
						</p>
						<a
							href="/hire_me"
							className="text-3xl md:text-4xl 2xl:text-5xl font-primary font-bold text-orange-600 bg-amber-300 py-3 lg:py-4 px-6 lg:px-10 rounded-lg box-highlighted inline-block after:content-['→'] after:ml-3 ">
							Let's work together
						</a>
					</div>
					<img
						width={alice_hero.width}
						height={alice_hero.height}
						src={alice_hero}
						alt="alice doe"
						className={`rounded-full border-yellow-100 border-[8px] max-sm:max-h-[17rem] max-h-[25rem] 2xl:max-h-[40rem] 3xl:h-[100rem] shadow-xl hover:shadow-2xl motion-safe:transition-all mx-8 2xl:mx-12 fade_up ${
							img1_visible ? "fade_show" : ""
						}`}
						ref={img1}
					/>
				</div>
				<nav className=" text-white font-primary max-sm:text-2xl text-3xl md:text-4xl xl:text-5xl flex lg:flex-col items-center justify-evenly self-stretch px-4 max-lg:py-4 max-lg:border-b-2 lg:border-l-2 border-black">
					<div className="max-sm:text-3xl text-4xl md:text-5xl xl:text-6xl">
						alice.doe
					</div>
					<a href="/">home</a>
					<a href="#work">work</a>
					<a href="/about_me">about me</a>
				</nav>
			</section>
			<section className="max-lg:flex-col flex items-center justify-center lg:justify-evenly max-md:py-14 py-10 bg-gradient-to-tr from-amber-200 to-orange-300">
				<p
					className={`max-sm:text-3xl max-xl:text-4xl text-5xl 2xl:text-6xl font-primary font-bold text-neural-900 max-sm:mb-6 max-lg:mb-8 fade_left ${
						p1_visible ? "fade_show" : ""
					}`}
					ref={p1}>
					It's not just good design...
					<br /> But a whole lot more.
				</p>
				<div
					className={` font-hero text-neutral-100 highlighted-special fade_right ${
						hero1_visible ? "fade_show" : ""
					}`}
					ref={hero1}>
					<span className="max-sm:text-4xl max-md:text-5xl max-xl:text-6xl text-7xl 3xl:text-8xl">
						art usability
					</span>
					<br />
					<span className="max-sm:text-3xl max-md:text-4xl max-xl:text-5xl text-6xl 3xl:text-7xl">
						profits web leads
					</span>
					<br />
					<span className="max-sm:text-2xl max-md:text-3xl max-xl:text-4xl text-5xl 3xl:text-6xl">
						accessibility speed
					</span>
					<br />
					<span className="max-sm:text-xl max-md:text-2xl max-xl:text-3xl text-4xl 3xl:text-5xl">
						expression interaction
					</span>
				</div>
			</section>
			<section className="flex relative border-y-2 border-y-black max-lg:flex-col">
				<div className="flex py-10 px-6 max-md:flex-col lg:flex-col lg:border-r-2 max-lg:border-b-2 border-black max-lg:justify-between max-md:items-start max-lg:items-center bg-gradient-to-bl from-amber-200 to-amber-300">
					<h1
						className={`text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-primary font-bold fade_up ${
							head1_visible ? "fade_show" : ""
						}`}
						ref={head1}>
						Sundown Studio
					</h1>
					<a
						ref={link1}
						href="https://www.sundown-studio.com/"
						target="_blank"
						rel="noreferrer"
						className={`fade_up ${
							link1_visible ? "fade_show" : ""
						} max-md:mb-10 mt-2 2xl:mt-4 lg:mb-auto max-lg:mr-auto max-md:ml-0 max-lg:ml-4`}>
						<span className="sr-only">link to Sundown Studio website</span>
						<img
							src={link_img_1}
							width={link_img_1.width}
							height={link_img_1.height}
							className="box-highlighted max-sm:w-6 w-8 2xl:w-10 "
							alt="anchor arrow"
						/>
					</a>
					<p
						className={`font-secondary text-lg lg:text-base xl:text-lg 2xl:text-xl max-w-[30rem] max-md:text-left max-lg:text-right fade_up ${
							desc1_visible ? "fade_show" : ""
						}`}
						ref={desc1}>
						This is one of the projects I took part in as a web designer. Work
						was hard, but rewarding.
					</p>
				</div>
				<div className="w-full lg:w-[80vw] relative flex-grow flex-shrink-0 group">
					<img
						src={sundown_preview}
						width={sundown_preview.width}
						height={sundown_preview.height}
						alt="a preview of the sundown studio website"
					/>
					<a
						className="absolute font-primary text-5xl items-center justify-center left-0 top-0 w-full h-full bg-slate-500 opacity-0 text-white flex group-hover:opacity-40 motion-safe:transition-opacity"
						href="https://www.sundown-studio.com/"
						aria-hidden="true">
						<img
							src={link_img_neutral}
							width={link_img_neutral.width}
							height={link_img_neutral.height}
							alt=""
							className="w-8 md:w-12"
							aria-hidden="true"
						/>
					</a>
				</div>
				<p className="text-sm md:text-base 2xl:text-lg font-secondary text-neutral-700 absolute bottom-3 md:bottom-10 max-md:left-5 md:right-5 note-text">
					Note: This is the property of Sundown Studio, and used solely for this
					mockup website.
				</p>
			</section>
			<section className="font-primary text-center lg:text-right text-3xl sm:text-4xl md:text-5xl xl:text-6xl 3xl:text-7xl border-b-2 border-neutral-900 pt-10 gap-10 flex max-lg:flex-col-reverse justify-evenly max-lg:items-center bg-gradient-to-br from-red-200 to-red-300">
				<img
					src={writing_ill}
					width={writing_ill.width}
					height={writing_ill.height}
					alt="creation of ideas"
					className={`max-w-[25rem] sm:max-w-[30rem] md:max-w-[35rem] xl:max-w-[45rem] 2xl:max-w-[60rem] 4xl:max-w-[100rem] fade_left ${
						hero2_visible ? "fade_show" : ""
					}`}
					ref={hero2}
				/>
				<p
					className={`max-w-[20rem] sm:max-w-[25rem] md:max-w-[35rem] lg:mr-8 fade_right ${
						p2_visible ? "fade_show" : ""
					}`}
					ref={p2}>
					My philosophy is that{" "}
					<span className="italic underline decoration-red-500 ">
						good design
					</span>{" "}
					always starts with a{" "}
					<span className="font-bold text-red-500">good idea.</span>
				</p>
			</section>
			<section className="flex relative border-b-2 border-y-black max-lg:flex-col  flex-row-reverse">
				<div className="flex py-10 px-6 max-md:flex-col lg:flex-col lg:border-l-2 max-lg:border-b-2 border-black max-lg:justify-between max-md:items-start max-lg:items-center bg-gradient-to-tr from-red-300 to-rose-300">
					<h1
						className={`text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-primary font-bold fade_up ${
							head2_visible ? "fade_show" : ""
						}`}
						ref={head2}>
						Send App{" "}
					</h1>
					<a
						ref={link2}
						href="https://send.flutterwave.com/"
						target="_blank"
						rel="noreferrer"
						className={`fade_up ${
							link2_visible ? "fade_show" : ""
						} max-md:mb-10 mt-2 2xl:mt-4 lg:mb-auto max-lg:mr-auto max-md:ml-0 max-lg:ml-4`}>
						<span className="sr-only">link to flutterwave website</span>
						<img
							src={link_img_2}
							width={link_img_2.width}
							height={link_img_2.height}
							className="box-highlighted max-sm:w-6 w-8 2xl:w-10"
							alt="anchor arrow"
						/>
					</a>
					<p
						className={`font-secondary text-lg lg:text-base xl:text-lg 2xl:text-xl max-w-[30rem] max-md:text-left max-lg:text-right fade_up ${
							desc2_visible ? "fade_show" : ""
						}`}
						ref={desc2}>
						Working on the "Send app" project was a big learning experience. I'm
						glad I had the chance to participate!
					</p>
				</div>
				<div className="w-full lg:w-[80vw] relative flex-grow flex-shrink-0 group">
					<img
						src={flutterwave_preview}
						width={flutterwave_preview.width}
						height={flutterwave_preview.height}
						alt="a preview of the send app website"
					/>
					<a
						className="absolute font-primary text-5xl items-center justify-center left-0 top-0 w-full h-full bg-slate-500 opacity-0 text-white flex group-hover:opacity-40 motion-safe:transition-opacity"
						href="https://send.flutterwave.com/"
						aria-hidden="true">
						<img
							src={link_img_neutral}
							width={link_img_neutral.width}
							height={link_img_neutral.height}
							alt=""
							className="w-8 md:w-12"
							aria-hidden="true"
						/>
					</a>
				</div>
				<p className="text-sm md:text-base 2xl:text-lg font-secondary text-neutral-700 absolute bottom-3 md:bottom-10 left-5 note-text">
					Note: This is the property of Flutterwave, and used solely for this
					mockup website.
				</p>
			</section>
			<section className="font-primary font-bold text-3xl md:text-4xl xl:text-5xl 3xl:text-6xl py-8 border-b-2 border-black flex justify-evenly items-center max-lg:flex-col bg-gradient-to-br from-blue-200 to-sky-300">
				<p
					className={`max-md:mb-6 max-lg:mb-8 fade-left ${
						p3_visible ? "fade_show" : ""
					}`}
					ref={p3}>
					Simple, but effective.
					<br /> Nothing more than that.
				</p>
				<img
					src={space_ill}
					width={space_ill.width}
					height={space_ill.height}
					alt="abstract depiction of space"
					className={`max-w-[25rem] sm:max-w-[30rem] md:max-w-[35rem] xl:max-w-[45rem] 2xl:max-w-[60rem] 4xl:max-w-[100rem] fade_right ${
						hero3_visible ? "fade_show" : ""
					}`}
					ref={hero3}
				/>
			</section>
			<section className="flex relative border-b-2 border-y-black max-lg:flex-col">
				<div className="flex py-10 px-6 max-md:flex-col lg:flex-col lg:border-r-2 max-lg:border-b-2 border-black max-lg:justify-between max-md:items-start max-lg:items-center bg-gradient-to-tr from-blue-200 to-sky-300">
					<h1
						className={`fade_up ${
							head3_visible ? "fade_show" : ""
						} text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-primary font-bold`}
						ref={head3}>
						Cycle{" "}
					</h1>
					<a
						ref={link3}
						href="https://www.studio-kiln.com/"
						target="_blank"
						rel="noreferrer"
						className={`max-md:mb-10 mt-2 2xl:mt-4 lg:mb-auto max-lg:mr-auto max-md:ml-0 max-lg:ml-4 fade_up ${
							link3_visible ? "fade_show" : ""
						}`}>
						<span className="sr-only">link to studio kiln website</span>
						<img
							src={link_img_3}
							width={link_img_3.width}
							height={link_img_3.height}
							className="box-highlighted max-sm:w-6 w-8 2xl:w-10"
							alt="anchor arrow"
						/>
					</a>
					<p
						className={`font-secondary text-lg lg:text-base xl:text-lg 2xl:text-xl max-w-[30rem] max-md:text-left max-lg:text-right fade_up ${
							desc3_visible ? "fade_show" : ""
						}`}
						ref={desc3}>
						As one of my last projects, it turned out pretty well. Not without
						hard work, of course.
					</p>
				</div>

				<div className="w-full lg:w-[80vw] relative flex-grow flex-shrink-0 group">
					<img
						src={studio_kiln_preview}
						width={studio_kiln_preview.width}
						height={studio_kiln_preview.height}
						alt="a preview of the cycle website"
					/>
					<a
						className="absolute font-primary text-5xl items-center justify-center left-0 top-0 w-full h-full bg-slate-500 opacity-0 text-white flex group-hover:opacity-40 motion-safe:transition-opacity"
						href="https://www.studio-kiln.com/"
						aria-hidden="true">
						<img
							src={link_img_neutral}
							width={link_img_neutral.width}
							height={link_img_neutral.height}
							alt=""
							className="w-8 md:w-12"
							aria-hidden="true"
						/>
					</a>
				</div>
				<p className="text-sm md:text-base 2xl:text-lg font-secondary text-neutral-700 absolute bottom-3 md:bottom-10 max-md:left-5 md:right-5 note-text">
					Note: This is the property of Studio Kiln, and used solely for this
					mockup website.
				</p>
			</section>
			<section className="py-14 flex flex-col items-center gap-8 2xl:gap-10 font-primary border-black border-b-2 bg-gradient-to-br from-blue-200 to-sky-300">
				<p className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl">
					Want to learn more about me?
				</p>
				<a
					href="/about_me"
					className={`text-xl sm:text-3xl md:text-4xl py-3 md:py-4 px-6 md:px-8 bg-sky-700 text-blue-100 box-highlighted rounded-xl after:content-['→'] after:ml-2 fade_up ${
						hero4_visible ? "fade_show" : ""
					}`}
					ref={hero4}>
					Check out my 'About me' page
				</a>
			</section>
			<section className="flex flex-col px-10 md:px-24 lg:px-32 xl:px-60 py-20 text-center bg-gradient-to-br from-rose-200 to-red-300 border-black border-b-2">
				<p
					className={`font-primary text-3xl md:text-4xl 2xl:text-5xl mb-20 fade_up ${
						p5_visible ? "fade_show" : ""
					}`}
					ref={p5}>
					If you liked my work and want to hire me or have feedback, just send
					me a message. My dm's are always open!
				</p>
				<div className="sm:flex sm:justify-evenly max-sm:grid max-sm:grid-cols-4 max-sm:grid-rows-3 max-sm:justify-items-center gap-8">
					<a
						href="/"
						className={`bg-rose-600 p-4 lg:p-6 rounded-lg box-highlighted col-span-4 fade_up ${
							social1_visible ? "fade_show" : ""
						}`}
						ref={social1}>
						<span className="sr-only">Link to Alice's Facebook account</span>
						<img
							src={fa_icon}
							width={fa_icon.width}
							height={fa_icon.height}
							alt=""
							className="w-10 md:w-12 lg:w-14"
						/>
					</a>
					<a
						ref={social2}
						href="/"
						className={`bg-rose-600 p-4 lg:p-6 rounded-lg box-highlighted col-span-2 fade_up delay-200 ${
							social2_visible ? "fade_show" : ""
						}`}>
						<span className="sr-only">Link to Alice's Instagram account</span>
						<img
							src={insta_icon}
							width={insta_icon.width}
							height={insta_icon.height}
							alt=""
							className="w-10 md:w-12 lg:w-14"
						/>
					</a>
					<a
						ref={social3}
						href="/"
						className={`bg-rose-600 p-4 lg:p-6 rounded-lg box-highlighted col-span-2 fade_up delay-500 ${
							social3_visible ? "fade_show" : ""
						}`}>
						<span className="sr-only">Link to Alice's X account</span>
						<img
							src={twitter_icon}
							width={twitter_icon.width}
							height={twitter_icon.height}
							alt=""
							className="w-10 md:w-12 lg:w-14"
						/>
					</a>
					<a
						ref={social4}
						href="/"
						className={`bg-rose-600 p-4 lg:p-6 rounded-lg box-highlighted col-span-4 fade_up delay-700 ${
							social4_visible ? "fade_show" : ""
						}`}>
						<span className="sr-only">Link to Alice's Email</span>
						<img
							src={email_icon}
							width={email_icon.width}
							height={email_icon.height}
							alt=""
							className="w-10 md:w-12 lg:w-14"
						/>
					</a>
				</div>
			</section>
		</main>
	);
};
export default Main;
