import { useState } from "react";
import emailjs from "@emailjs/browser";
import Icon from "../components/Icon";
import { contact } from "../data/siteData";

const quickCards = [
	{
		icon: "phone",
		title: "We're Just a Call Away",
		text: contact.phones[0],
		href: `tel:${contact.phones[0].replaceAll(" ", "")}`,
		tone: "purple",
	},
	{
		icon: "mail",
		title: "Send Us an Email",
		text: contact.email,
		href: `mailto:${contact.email}`,
		tone: "saffron",
	},
];

const contactRows = [
	{
		icon: "phone",
		title: "Call Us",
		lines: contact.phones,
	},
	{
		icon: "mail",
		title: "Email Us",
		lines: [contact.email],
	},
	{
		icon: "pin",
		title: "Visit Us",
		lines: ["2063/5, Lehal Colony,", "Patiala - 147001 (Punjab)"],
	},
	{
		icon: "clock",
		title: "Timings",
		lines: ["Monday - Sunday", "8:00 AM - 8:00 PM"],
	},
	{
		icon: "people",
		title: "Follow Us",
		lines: [],
		social: true,
	},
];

const donationPoints = [
	"100% Transparent",
	"Secure Donations",
	"Direct Impact",
	"Tax Exempted",
];

const EMAILJS_CONFIG = {
	serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
	templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
	publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const contactHighlights = [
	{ icon: "clock", label: "Every day", text: "8:00 AM - 8:00 PM" },
	{ icon: "pin", label: "Visit us", text: "Lehal Colony, Patiala" },
];

function Contact({ navigateToAnchor }) {
	const [formStatus, setFormStatus] = useState({
		type: "idle",
		message: "",
	});

	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		const isConfigured = Object.values(EMAILJS_CONFIG).every(Boolean);

		if (!isConfigured) {
			setFormStatus({
				type: "error",
				message:
					"EmailJS keys missing. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in .env.",
			});
			return;
		}

		setFormStatus({ type: "sending", message: "Sending your message..." });

		try {
			await emailjs.sendForm(
				EMAILJS_CONFIG.serviceId,
				EMAILJS_CONFIG.templateId,
				form,
				{ publicKey: EMAILJS_CONFIG.publicKey },
			);
			form.reset();
			setFormStatus({
				type: "success",
				message: "Message sent. Our team will contact you soon.",
			});
		} catch {
			setFormStatus({
				type: "error",
				message:
					"Message could not be sent. Please try again or email us directly.",
			});
		}
	};

	return (
		<main className='contact-page'>
			<ContactHero />
			<section className='contact-content-section'>
				<div className='container contact-layout'>
					<ContactInfoCard />
					<ContactForm onSubmit={handleSubmit} status={formStatus} />
				</div>
				<div className='container contact-lower-grid'>
					<MapCard />
					<DonationCard />
				</div>
				<div className='container contact-cta-band'>
					<div className='contact-cta-mark'>
						<Icon name='khanda' />
					</div>
					<div>
						<h2>Together, We Can Create a Better Tomorrow</h2>
						<p>
							Your support helps us continue our seva and uplift many lives.
						</p>
					</div>
					<button
						className='secondary-action contact-cta-button'
						type='button'
						onClick={() => navigateToAnchor("support")}>
						Support the Mission
						<Icon name='heartFill' />
					</button>
				</div>
			</section>
		</main>
	);
}

function ContactHero() {
	return (
		<section className='contact-hero'>
			<div className='container contact-hero-grid'>
				<div className='contact-hero-copy'>
					<p className='hero-kicker'>
						<img src='/images/ngo-logo.png' alt='' />
						ੴ ਸੇਵਾ ਹੀ ਪਰਮ ਧਰਮ ਹੈ
						<img src='/images/ngo-logo.png' alt='' />
					</p>
					<h1>
						Get In Touch
						<span>We're Here to Help</span>
					</h1>
					<span className='title-rule' aria-hidden='true' />
					<p className='contact-hero-text'>
						We would love to hear from you. Whether you have a question, want to
						volunteer, or wish to support our initiatives, our team is here to
						assist you.
					</p>
					<div className='contact-quick-grid'>
						{quickCards.map((card) => (
							<a
								className='contact-quick-card'
								href={card.href}
								key={card.title}>
								<span className={`contact-quick-icon ${card.tone}`}>
									<Icon name={card.icon} />
								</span>
								<span>
									<strong>{card.title}</strong>
									<small>{card.text}</small>
								</span>
							</a>
						))}
					</div>
					<div
						className='contact-highlight-row'
						aria-label='Contact highlights'>
						{contactHighlights.map((item) => (
							<span key={item.label}>
								<Icon name={item.icon} />
								<strong>{item.label}</strong>
								<small>{item.text}</small>
							</span>
						))}
					</div>
				</div>

				<div className='contact-hero-visual'>
					<div className='contact-hero-rings' aria-hidden='true' />
					<div className='contact-portrait'>
						<img
							src='/images/gianithakursinghji.png'
							alt='Giani Thakur Singh Ji'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

function ContactInfoCard() {
	return (
		<aside className='contact-info-card'>
			<h2>Get in Touch</h2>
			<span className='title-rule' aria-hidden='true' />
			<div className='contact-info-list'>
				{contactRows.map((row) => (
					<div className='contact-info-row' key={row.title}>
						<span className='contact-info-icon'>
							<Icon name={row.icon} />
						</span>
						<div>
							<h3>{row.title}</h3>
							{row.lines.map((line) => (
								<p key={line}>{line}</p>
							))}
							{row.social && (
								<div className='contact-socials' aria-label='Social links'>
									<a href={`mailto:${contact.email}`} aria-label='Email'>
										<img src='/images/gmail.png' alt='' />
									</a>
									<a
										href='https://www.instagram.com/gts.trust/'
										aria-label='Instagram'>
										<img src='/images/instagram.png' alt='' />
									</a>
									<a
										href={`tel:${contact.phones[0].replaceAll(" ", "")}`}
										aria-label='Call'>
										<img src='/images/call.png' alt='' />
									</a>
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</aside>
	);
}

function ContactForm({ onSubmit, status }) {
	const isSending = status.type === "sending";

	return (
		<section className='contact-form-card'>
			<h2>Send Us a Message</h2>
			<span className='title-rule' aria-hidden='true' />
			<form className='contact-form' onSubmit={onSubmit}>
				<label className='contact-field'>
					<span>Your Name</span>
					<input name='from_name' placeholder='Enter full name' required />
				</label>
				<label className='contact-field'>
					<span>Email Address</span>
					<input
						name='reply_to'
						type='email'
						placeholder='name@example.com'
						required
					/>
				</label>
				<label className='contact-field'>
					<span>Phone Number</span>
					<input name='phone' type='tel' placeholder='+91' />
				</label>
				<label className='contact-field'>
					<span>Subject</span>
					<input name='subject' placeholder='Website enquiry' />
				</label>
				<label className='contact-field contact-field-wide'>
					<span>Message</span>
					<textarea
						name='message'
						placeholder='Type your message here...'
						required
					/>
				</label>
				<button type='submit' disabled={isSending}>
					{isSending ? "Sending..." : "Send Message"}
					<Icon name='send' />
				</button>
			</form>
			{status.message && (
				<p
					className={`contact-form-status ${status.type}`}
					role={status.type === "error" ? "alert" : "status"}
					aria-live='polite'>
					{status.message}
				</p>
			)}
			<p className='contact-form-note'>
				<Icon name='lock' />
				Your information is safe with us. We respect your privacy.
			</p>
		</section>
	);
}

function MapCard() {
	return (
		<section className='contact-map-card'>
			<iframe
				className='contact-map-iframe'
				title='Giani Thakur Singh Ji Charitable Trust location'
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3295.3170272150455!2d76.38907417526399!3d30.34327170435112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910289463d2cecb%3A0x303e2d3157bfb098!2s2063%2F5%2C%20Lehal%20Colony%2C%20Sewak%20Colony%2C%20Patiala%2C%20Punjab%20147001!5e1!3m2!1sen!2sin!4v1779111585867!5m2!1sen!2sin'
				allowFullScreen
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
			/>
			<div className='contact-map-caption'>
				<span>
					<Icon name='temple' />
				</span>
				<div>
					<h2>Find Us Here</h2>
					<p>{contact.address}</p>
				</div>
				<a
					href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`}
					target='_blank'
					rel='noreferrer'>
					Get Directions
					<Icon name='arrow' />
				</a>
			</div>
		</section>
	);
}

function DonationCard() {
	return (
		<section className='contact-donation-card'>
			<div>
				<h2>Support Our Mission</h2>
				<span className='title-rule' aria-hidden='true' />
				<div className='contact-donation-body'>
					<div className='contact-qr'>
						<strong>Scan & Donate</strong>
						<small>UPI / QR Code</small>
						<img src='/images/payQR1.jpeg' alt='Donation QR code' />
						<p>UPI ID: {contact.upi}</p>
					</div>
					<ul>
						{donationPoints.map((point) => (
							<li key={point}>
								<Icon name='heartFill' />
								{point}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Contact;
