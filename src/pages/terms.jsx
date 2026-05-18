const termSections = [
	{
		title: "Use of This Website",
		body: "Visitors may use this website to learn about the trust, its seva activities, donation options, and contact details. Please do not misuse the website, copy content for misleading purposes, or attempt to disrupt its operation.",
	},
	{
		title: "Donations and Support",
		body: "Donation details are shared to help supporters contribute to the mission. Before making a contribution, visitors should verify bank, UPI, QR, or payment details directly with the trust.",
	},
	{
		title: "Information Accuracy",
		body: "We try to keep programs, timings, contact details, and trust information current. Content may be updated, corrected, or removed without prior notice.",
	},
	{
		title: "Respectful Conduct",
		body: "Messages, volunteer requests, and public communication should remain respectful, lawful, and aligned with the spirit of seva and community welfare.",
	},
];

function Terms() {
	return (
		<main className='policy-page terms-page'>
			<section className='policy-hero'>
				<div className='container policy-hero-grid'>
					<div>
						<p className='section-eyebrow'>Website Terms</p>
						<h1>Terms & Conditions</h1>
						<span className='title-rule' aria-hidden='true' />
						<p>
							These terms explain how visitors may use this website and how
							information shared by Giani Thakur Singh Ji Charitable Trust should
							be treated.
						</p>
					</div>
					<aside className='policy-summary'>
						<strong>Last updated</strong>
						<span>May 18, 2026</span>
						<small>Draft website terms for public visitors and supporters.</small>
					</aside>
				</div>
			</section>

			<section className='container policy-content'>
				{termSections.map((section, index) => (
					<article className='policy-card' key={section.title}>
						<span>{String(index + 1).padStart(2, "0")}</span>
						<h2>{section.title}</h2>
						<p>{section.body}</p>
					</article>
				))}
				<div className='policy-note'>
					<strong>Legal note</strong>
					<p>
						These terms are website draft content and do not replace advice from
						a qualified legal professional.
					</p>
				</div>
			</section>
		</main>
	);
}

export default Terms;
