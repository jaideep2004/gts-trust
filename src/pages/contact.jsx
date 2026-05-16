import { contact } from "../data/siteData";
import SimplePage from "./simplePage";

function Contact() {
	return (
		<SimplePage
			eyebrow='Contact Us'
			title='Reach the Trust'
			body={[
				`Phone: ${contact.phones.join(" / ")}`,
				`Email: ${contact.email}`,
				`Address: ${contact.address}`,
				"For donations, seva support, volunteering, or program information, please contact the trust directly through the details above.",
			]}
		/>
	);
}

export default Contact;
