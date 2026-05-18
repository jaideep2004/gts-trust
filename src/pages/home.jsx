import { useEffect, useMemo, useRef, useState } from "react";
import ContactLine from "../components/ContactLine";
import Icon from "../components/Icon";
import SectionTitle from "../components/SectionTitle";
import {
	activities,
	contact,
	initiatives,
	reels,
	stats,
} from "../data/siteData";

function Home({ navigate, navigateToAnchor }) {
	return (
		<main>
			<Hero navigate={navigate} navigateToAnchor={navigateToAnchor} />
			<Initiatives />
			<ImpactStats />
			<ActivitiesSlider />
			<ReelsSlider />
			<SupportMission />
		</main>
	);
}

function Hero({ navigate, navigateToAnchor }) {
	const [english, setEnglish] = useState(false);

	useEffect(() => {
		const interval = window.setInterval(
			() => setEnglish((value) => !value),
			3600,
		);
		return () => window.clearInterval(interval);
	}, []);

	return (
		<section className='hero-section'>
			{/* <div className='hero-bg-mark' aria-hidden='true'>
				ੴ
			</div> */}
			{/* <div className='hero-temple-bg' aria-hidden='true' /> */}
			<div className='container hero-grid'>
				<div className='hero-copy'>
					<p className='hero-kicker'>
						<img src='/images/ngo-logo.png' alt='' />
						ੴ ਸੇਵਾ ਹੀ ਪਰਮ ਧਰਮ ਹੈ
						<img src='/images/ngo-logo.png' alt='' />
					</p>
					<div className='hero-title-frame'>
						<h1
							className={english ? "swap-out" : "swap-in"}
							aria-hidden={english}
							style={{ lineHeight: 1.5 }}>
							ਗਿਆਨੀ ਠਾਕੁਰ ਸਿੰਘ ਜੀ
							<br />
							ਚੈਰੀਟੇਬਲ ਟਰੱਸਟ
						</h1>
						<h1
							className={english ? "swap-in" : "swap-out"}
							aria-hidden={!english}
							style={{ lineHeight: 1.4 }}>
							Giani Thakur Singh Ji
							<br />
							Charitable Trust
						</h1>
					</div>
					<p className='hero-subtitle'>
						Serving Humanity. Spreading Compassion. Building a Better Tomorrow.
					</p>
					<p className='hero-text'>
						We are dedicated to the welfare of society through selfless service,
						education, community support, and humanitarian initiatives.
					</p>
					<div className='hero-actions'>
						<button
							className='primary-action'
							type='button'
							onClick={() => navigate("/about")}>
							About Our Trust
							<Icon name='arrow' />
						</button>
						<button
							className='secondary-action'
							type='button'
							onClick={() => navigate("/contact")}>
							Contact Us
							<Icon name='phone' />
						</button>
					</div>
					<div className='mini-impact'>
						<div className='mini-faces' aria-hidden='true'>
							{/* <span />
							<span />
							<span />
							<span /> */}
							<img
								src='/images/hero-tests.png'
								alt=''
								style={{ width: "110px" }}
							/>
						</div>
						<p>Thousands of lives touched through seva and support</p>
						<Icon name='heartFill' />
					</div>
				</div>

				<div className='hero-visual'>
					<div className='halo halo-one' aria-hidden='true' />
					{/* <div className='halo halo-two' aria-hidden='true' /> */}
					<div className='portrait-card'>
						<img
							src='/images/gianithakursinghji.png'
							alt='Giani Thakur Singh Ji'
						/>
					</div>
				</div>
			</div>
			<button
				className='scroll-donate'
				type='button'
				onClick={() => navigateToAnchor("support")}>
				<Icon name='donate' />
				Donate
			</button>
		</section>
	);
}

function Initiatives() {
	return (
		<section className='section initiatives-section' id='initiatives'>
			<SectionTitle eyebrow='What We Do' title='Our Initiatives' />
			<div className='container initiative-grid'>
				{initiatives.map((item) => (
					<article className='initiative-card' key={item.title}>
						<div className={`initiative-icon ${item.tone}`}>
							<img src={item.image} alt='' />
						</div>
						<h3>{item.title}</h3>
						<p>{item.text}</p>
						<a href='#support'>
							Learn More
							<Icon name='arrow' />
						</a>
					</article>
				))}
			</div>
		</section>
	);
}

function ImpactStats() {
	const sectionRef = useRef(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return undefined;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.35 },
		);

		observer.observe(section);
		return () => observer.disconnect();
	}, []);

	return (
		<section className='impact-section' ref={sectionRef}>
			<div className='impact-overlay' aria-hidden='true' />
			<SectionTitle
				eyebrow='Our Impact'
				title='Serving With Dedication'
				inverted
			/>
			<div className='container impact-grid'>
				{stats.map((stat) => (
					<article className='impact-item' key={stat.label}>
						<div className='impact-icon'>
							<img src={stat.image} alt='' />
						</div>
						<div>
							<CountUp active={visible} end={stat.value} suffix={stat.suffix} />
							<p>{stat.label}</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}

function CountUp({ active, end, suffix }) {
	const [value, setValue] = useState(0);

	useEffect(() => {
		if (!active) return undefined;

		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		if (prefersReducedMotion) {
			const timeout = window.setTimeout(() => setValue(end), 0);
			return () => window.clearTimeout(timeout);
		}

		let animationFrame = 0;
		let startTime = 0;
		const duration = 1850;

		const animate = (time) => {
			if (!startTime) startTime = time;
			const elapsed = Math.min((time - startTime) / duration, 1);
			const eased = elapsed === 1 ? 1 : 1 - Math.pow(2, -10 * elapsed);
			setValue(Math.round(end * eased));

			if (elapsed < 1) {
				animationFrame = window.requestAnimationFrame(animate);
				return;
			}

			setValue(end);
		};

		animationFrame = window.requestAnimationFrame(animate);
		return () => window.cancelAnimationFrame(animationFrame);
	}, [active, end]);

	return (
		<strong>
			{value.toLocaleString()}
			{suffix}
		</strong>
	);
}

function ActivitiesSlider() {
	const [index, setIndex] = useState(0);
	const prefersReducedMotion = useMemo(
		() =>
			typeof window !== "undefined" &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches,
		[],
	);

	useEffect(() => {
		if (prefersReducedMotion) return undefined;
		const interval = window.setInterval(
			() => setIndex((value) => (value + 1) % activities.length),
			3600,
		);
		return () => window.clearInterval(interval);
	}, [prefersReducedMotion]);

	const ordered = [...activities.slice(index), ...activities.slice(0, index)];

	return (
		<section className='section activities-section' id='activities'>
			<div className='container activities-layout'>
				<div className='activities-copy'>
					<p className='section-eyebrow'>Our Activities</p>
					<h2>Glimpses of Seva</h2>
					<span className='title-rule' aria-hidden='true' />
					<p>
						Moments of compassion, happiness and togetherness in service of
						humanity.
					</p>
					<div className='slider-controls' aria-label='Gallery controls'>
						<button
							type='button'
							aria-label='Previous activity'
							onClick={() =>
								setIndex((index - 1 + activities.length) % activities.length)
							}>
							<Icon name='chevronLeft' />
						</button>
						<button
							type='button'
							aria-label='Next activity'
							onClick={() => setIndex((index + 1) % activities.length)}>
							<Icon name='chevronRight' />
						</button>
					</div>
				</div>
				<div className='activity-track'>
					{ordered.map((activity, activityIndex) => (
						<figure className='activity-card' key={activity.title}>
							<img src={activity.image} alt={activity.alt} />
							<figcaption>{activity.title}</figcaption>
							<span>{String(activityIndex + 1).padStart(2, "0")}</span>
						</figure>
					))}
				</div>
			</div>
		</section>
	);
}

function ReelsSlider() {
	const [index, setIndex] = useState(0);
	const prefersReducedMotion = useMemo(
		() =>
			typeof window !== "undefined" &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches,
		[],
	);

	useEffect(() => {
		if (prefersReducedMotion) return undefined;
		const interval = window.setInterval(
			() => setIndex((value) => (value + 1) % reels.length),
			4200,
		);
		return () => window.clearInterval(interval);
	}, [prefersReducedMotion]);

	const ordered = [...reels.slice(index), ...reels.slice(0, index)];

	return (
		<section className='section reels-section' id='reels'>
			<div className='container reels-layout'>
				<div className='reels-copy'>
					<p className='section-eyebrow'>Latest Reels</p>
					<h2>Seva in Motion</h2>
					<span className='title-rule' aria-hidden='true' />
					<p>
						Short glimpses from trust activities, community support, and
						everyday moments of compassion.
					</p>
					<div className='slider-controls' aria-label='Reels controls'>
						<button
							type='button'
							aria-label='Previous reel'
							onClick={() =>
								setIndex((index - 1 + reels.length) % reels.length)
							}>
							<Icon name='chevronLeft' />
						</button>
						<button
							type='button'
							aria-label='Next reel'
							onClick={() => setIndex((index + 1) % reels.length)}>
							<Icon name='chevronRight' />
						</button>
					</div>
				</div>
				<div className='reels-track'>
					{ordered.map((reel, reelIndex) => (
						<article className='reel-card' key={reel.title}>
							<video
								src={reel.video}
								poster={reel.poster}
								muted
								loop
								playsInline
								preload='metadata'
								controls
							/>
							<span className='reel-play' aria-hidden='true'>
								<Icon name='chevronRight' />
							</span>
							<div>
								<strong>{reel.title}</strong>
								<p>{reel.caption}</p>
							</div>
							<small>{String(reelIndex + 1).padStart(2, "0")}</small>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

function SupportMission() {
	return (
		<section className='section support-section' id='support'>
			<div className='container support-panel'>
				<div className='support-copy'>
					<p className='section-eyebrow'>Support Our Mission</p>
					<h2>Your Support Can Change Lives</h2>
					<span className='title-rule' aria-hidden='true' />
					<p>
						Every contribution helps us continue our seva and support those in
						need.
					</p>
					<a
						className='primary-action'
						href={`mailto:${contact.email}?subject=Donation Support`}>
						Donate Now
						<Icon name='heartFill' />
					</a>
				</div>
				<div className='qr-card'>
					<h3>Scan & Donate</h3>
					<p>UPI / QR Code</p>
					<img src='/images/payQR1.jpeg' alt='Donation QR code' />
					<strong>UPI ID: {contact.upi}</strong>
				</div>
				<div className='contact-card'>
					<h3>Other Ways to Help</h3>
					<ContactLine icon='phone' text={contact.phones.join("\n")} />
					<ContactLine icon='mail' text={contact.email} />
					<ContactLine icon='pin' text={contact.address} />
				</div>
			</div>
		</section>
	);
}

export default Home;
