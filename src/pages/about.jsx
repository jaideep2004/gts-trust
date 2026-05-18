import Icon from "../components/Icon";
import { stats } from "../data/siteData";

const storyPillars = [
	{
		image: "/images/abt3.png",
		title: "Selfless Service",
		text: "Committed to humanity without any discrimination.",
	},
	{
		image: "/images/abt4.png",
		title: "Community First",
		text: "Working together for a stronger and kinder society.",
	},
	{
		image: "/images/abt5.png",
		title: "Faith & Values",
		text: "Guided by Sikh principles of love, equality, and seva.",
	},
];

const values = [
	{
		image: "/images/abt1.png",
		title: "Compassion",
		text: "We serve with kindness and empathy for every individual in need.",
		tone: "saffron",
	},
	{
		image: "/images/abt2.png",
		title: "Education",
		text: "Empowering minds through education and knowledge sharing.",
		tone: "purple",
	},
	{
		image: "/images/abt6.png",
		title: "Equality",
		text: "We believe in equality, respect, and honor for all human beings.",
		tone: "saffron",
	},
	{
		image: "/images/abt9.png",
		title: "Integrity",
		text: "Transparency, honesty, and dedication in every step we take.",
		tone: "purple",
	},
];

function About({ navigateToAnchor }) {
	return (
		<main className='about-page'>
			<AboutHero navigateToAnchor={navigateToAnchor} />
			<OurStory />
			<OurValues />
			<AboutImpact />
		</main>
	);
}

function AboutHero({ navigateToAnchor }) {
	return (
		<section className='hero-section about-hero'>
			<div className='container hero-grid'>
				<div className='hero-copy about-hero-copy'>
					<p className='hero-kicker'>
						<img src='/images/ngo-logo.png' alt='' />
						ੴ ਸੇਵਾ ਹੀ ਪਰਮ ਧਰਮ ਹੈ
						<img src='/images/ngo-logo.png' alt='' />
					</p>
					<div className='about-hero-title'>
						<h1>
							About
							<span>Our Trust</span>
						</h1>
					</div>
					<span className='title-rule' aria-hidden='true' />
					<p className='hero-text'>
						Giani Thakur Singh Ji Charitable Trust is dedicated to seva,
						compassion, and the upliftment of society through education,
						welfare, and humanitarian initiatives.
					</p>
					<div className='hero-actions'>
						<button
							className='primary-action'
							type='button'
							onClick={() => navigateToAnchor("support")}>
							Join Us in This Mission
							<Icon name='arrow' />
						</button>
					</div>
				</div>

				<div className='hero-visual about-hero-visual'>
					<div className='halo halo-one' aria-hidden='true' />
					<div className='portrait-card'>
						<img
							src='/images/gianithakursinghji.png'
							alt='Giani Thakur Singh Ji'
						/>
					</div>
					<div className='about-hero-blessing' aria-hidden='true'>
						<span>ੴ</span>
						<strong>Service with faith</strong>
					</div>
				</div>
			</div>
		</section>
	);
}

function OurStory() {
	return (
		<section className='about-story-section' id='story'>
			<div className='container about-story-grid'>
				<figure className='about-story-image'>
					<img src='/images/goldentempleabt.png' alt='Golden Temple' />
				</figure>

				<div className='about-story-copy'>
					<p className='section-eyebrow'>Our Story</p>
					<h2>A Legacy of Seva and Faith</h2>
					<span className='title-rule' aria-hidden='true' />
					<p>
						The Trust was founded with a noble vision to serve humanity
						selflessly, inspired by the teachings of Sri Guru Granth Sahib Ji.
						For years, we have been continuously working for the betterment of
						society through welfare programs and community support initiatives.
					</p>
					<div className='about-story-note'>
						<span>ੴ</span>
						<strong>Serving people with humility, dignity, and faith.</strong>
					</div>
					<div className='about-pillar-row'>
						{storyPillars.map((pillar) => (
							<article className='about-pillar' key={pillar.title}>
								<div className='about-icon-badge'>
									<img src={pillar.image} alt='' />
								</div>
								<h3>{pillar.title}</h3>
								<p>{pillar.text}</p>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

function OurValues() {
	return (
		<section className='about-values-section'>
			<div className='container about-values-panel'>
				<img
					className='about-values-watermark'
					src='/images/ngo-logo.png'
					alt=''
					aria-hidden='true'
				/>
				<div className='about-values-heading'>
					<p className='section-eyebrow'>Our Values</p>
					<h2>Principles That Guide Us</h2>
					<span className='title-rule' aria-hidden='true' />
				</div>
				<div className='about-values-grid'>
					{values.map((value) => (
						<article className='about-value-card' key={value.title}>
							<div className={`about-value-icon ${value.tone}`}>
								<img src={value.image} alt='' />
							</div>
							<h3>{value.title}</h3>
							<p>{value.text}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

function AboutImpact() {
	return (
		<section className='about-impact-section'>
			<div className='container about-impact-panel'>
				<div className='about-impact-heading'>
					<p className='section-eyebrow'>Our Impact</p>
					<h2>Serving With Dedication</h2>
					<span className='title-rule' aria-hidden='true' />
				</div>
				<div className='about-impact-grid'>
					{stats.map((stat) => (
						<article className='about-impact-item' key={stat.label}>
							<div className='about-impact-icon'>
								<img src={stat.image} alt='' />
							</div>
							<div>
								<strong>
									{stat.value.toLocaleString()}
									{stat.suffix}
								</strong>
								<p>{stat.label}</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export default About;
