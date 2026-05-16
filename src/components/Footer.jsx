import ContactLine from "./ContactLine";
import Icon from "./Icon";
import { contact, initiatives } from "../data/siteData";

function Footer({ navigate, navigateToAnchor }) {
	const year = new Date().getFullYear();

	return (
		<footer className='footer'>
			<div className='container footer-grid'>
				<div className='footer-brand'>
					<a
						className='brand footer-logo'
						href='/'
						onClick={(event) => {
							event.preventDefault();
							navigate("/");
						}}>
						<img src='/images/ngo-logo.png' alt='' />
						<span className='brand-text'>
							<strong>Giani Thakur Singh Ji</strong>
							<small>Charitable Trust</small>
						</span>
					</a>
					<p>
						Dedicated to the service of humanity through compassion, education,
						welfare and spiritual guidance.
					</p>
					<div className='social-links' aria-label='Social links'>
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
							<img src="/images/call.png" alt="" />
						</a>
					</div>
				</div>

				<FooterColumn
					title='Quick Links'
					links={[
						["Home", () => navigate("/")],
						["About Us", () => navigate("/about")],
						["Our Initiatives", () => navigateToAnchor("initiatives")],
						["Gallery", () => navigateToAnchor("activities")],
						["Contact Us", () => navigate("/contact")],
					]}
				/>
				<FooterColumn
					title='Our Initiatives'
					links={initiatives.map((item) => [
						item.title,
						() => navigateToAnchor("initiatives"),
					])}
				/>
				<div className='footer-contact'>
					<h3>Contact Us</h3>
					<ContactLine icon='phone' text={contact.phones.join("\n")} />
					<ContactLine icon='mail' text={contact.email} />
					<ContactLine icon='pin' text={contact.address} />
				</div>
				<div className='footer-qr'>
					<h3>Scan & Donate</h3>
					<img src='/images/payQR1.jpeg' alt='Donation QR code' />
					<p>UPI ID: {contact.upi}</p>
				</div>
			</div>
			<div className='footer-bottom'>
				<p>
					© {year} Giani Thakur Singh Ji Charitable Trust. All Rights Reserved.
				</p>
				<div className='footer-policies'>
					<button
						type='button'
						onClick={() => navigate("/terms-and-conditions")}>
						Terms
					</button>
					<button type='button' onClick={() => navigate("/privacy-policy")}>
						Privacy
					</button>
					<button type='button' onClick={() => navigate("/disclaimer")}>
						Disclaimer
					</button>
				</div>
			</div>
		</footer>
	);
}

function FooterColumn({ title, links }) {
	return (
		<div className='footer-column'>
			<h3>{title}</h3>
			{links.map(([label, action]) => (
				<button type='button' key={label} onClick={action}>
					{label}
				</button>
			))}
		</div>
	);
}

export default Footer;
