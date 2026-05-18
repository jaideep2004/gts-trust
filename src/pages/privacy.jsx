const privacySections = [
	{
		title: "Information We Receive",
		body: "The trust may receive details shared through calls, email, contact forms, donation communication, or volunteer requests. This can include name, phone number, email address, message details, and donation-related communication.",
	},
	{
		title: "How We Use Details",
		body: "Shared information is used to respond to enquiries, coordinate seva, manage support requests, maintain trust records, and communicate with visitors, donors, volunteers, and supporters.",
	},
	{
		title: "Respect for Privacy",
		body: "Personal details are not intended to be sold or shared for unrelated commercial use. Access is kept limited to communication and trust-related work.",
	},
	{
		title: "Sensitive Information",
		body: "Visitors should avoid submitting sensitive personal information unless it is necessary for direct communication with the trust or a specific seva-related request.",
	},
];

function Privacy() {
	return (
		<main className='policy-page privacy-page'>
			<section className='policy-hero'>
				<div className='container policy-hero-grid'>
					<div>
						<p className='section-eyebrow'>Privacy</p>
						<h1>Privacy Policy</h1>
						<span className='title-rule' aria-hidden='true' />
						<p>
							This page explains how Giani Thakur Singh Ji Charitable Trust
							treats information shared by visitors, donors, volunteers, and
							supporters.
						</p>
					</div>
					<aside className='policy-summary'>
						<strong>Privacy first</strong>
						<span>Used for seva communication</span>
						<small>For official details, contact the trust directly.</small>
					</aside>
				</div>
			</section>

			<section className='container policy-content'>
				{privacySections.map((section, index) => (
					<article className='policy-card' key={section.title}>
						<span>{String(index + 1).padStart(2, "0")}</span>
						<h2>{section.title}</h2>
						<p>{section.body}</p>
					</article>
				))}
				<div className='policy-note'>
					<strong>Care note</strong>
					<p>
						Please share only the information needed for your enquiry,
						volunteer request, or donation-related communication.
					</p>
				</div>
			</section>
		</main>
	);
}

export default Privacy;
