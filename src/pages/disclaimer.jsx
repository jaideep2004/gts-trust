const disclaimerSections = [
	{
		title: "General Information",
		body: "This website shares general information about Giani Thakur Singh Ji Charitable Trust, its charitable work, and ways to connect with the organization.",
	},
	{
		title: "No Professional Advice",
		body: "Website content should not be treated as legal, financial, medical, or tax advice. Visitors should consult qualified professionals for advice related to their situation.",
	},
	{
		title: "Donation Verification",
		body: "Please confirm donation instructions, UPI details, QR codes, receipts, and tax-related information directly with the trust before making or claiming any contribution.",
	},
	{
		title: "External Links",
		body: "This website may link to maps, social media, payment tools, or third-party services. The trust is not responsible for changes, downtime, or content on external platforms.",
	},
];

function Disclaimer() {
	return (
		<main className='policy-page disclaimer-page'>
			<section className='policy-hero'>
				<div className='container policy-hero-grid'>
					<div>
						<p className='section-eyebrow'>Website Disclaimer</p>
						<h1>Disclaimer</h1>
						<span className='title-rule' aria-hidden='true' />
						<p>
							This page clarifies the limits of the information shown on this
							website and how visitors should verify important details.
						</p>
					</div>
					<aside className='policy-summary'>
						<strong>Read with care</strong>
						<span>Verify before donating</span>
						<small>For urgent or official details, contact the trust directly.</small>
					</aside>
				</div>
			</section>

			<section className='container policy-content'>
				{disclaimerSections.map((section, index) => (
					<article className='policy-card' key={section.title}>
						<span>{String(index + 1).padStart(2, "0")}</span>
						<h2>{section.title}</h2>
						<p>{section.body}</p>
					</article>
				))}
				<div className='policy-note'>
					<strong>Important</strong>
					<p>
						While care is taken to keep website details accurate, visitors should
						confirm program, donation, and contact information directly with the
						trust.
					</p>
				</div>
			</section>
		</main>
	);
}

export default Disclaimer;
