import Icon from "../components/Icon";
import { contact } from "../data/siteData";

function Donate({ navigate }) {
	return (
		<main className='donate-page'>
			<section className='donate-hero'>
				<div className='donate-aura' aria-hidden='true' />
				<div className='container donate-shell'>
					<div className='donate-copy'>
						<p className='hero-kicker'>
							<img src='/images/ngo-logo.png' alt='' />
							ੴ ਦਾਨ ਸੇਵਾ
							<img src='/images/ngo-logo.png' alt='' />
						</p>
						<h1>Support the Mission</h1>
						<span className='title-rule' aria-hidden='true' />
						<p>
							Scan the QR code to contribute directly toward seva, welfare,
							education, and community support.
						</p>
					</div>

					<div className='donate-card'>
						<div className='donate-card-mark' aria-hidden='true'>
							ੴ
						</div>
						<div className='donate-qr-frame'>
							<img src='/images/payQR1.jpeg' alt='Donation QR code' />
						</div>
						<div className='donate-upi'>
							<span>UPI ID</span>
							<strong>{contact.upi}</strong>
						</div>
						<div className='donate-trust-row'>
							<span>
								<Icon name='lock' />
								Secure
							</span>
							<span>
								<Icon name='heartFill' />
								Direct Seva
							</span>
							<span>
								<Icon name='khanda' />
								Transparent
							</span>
						</div>
					</div>

					<button
						className='secondary-action donate-back'
						type='button'
						onClick={() => navigate("/")}>
						Back to Home
						<Icon name='arrow' />
					</button>
				</div>
			</section>
		</main>
	);
}

export default Donate;
