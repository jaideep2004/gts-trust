import SimplePage from "./simplePage";

function Privacy() {
	return (
		<SimplePage
			eyebrow='Privacy'
			title='Privacy Policy'
			body={[
				"The trust respects the privacy of visitors, donors, volunteers, and supporters. Information shared through calls, email, contact forms, or donation communication may be used only to respond to requests, coordinate seva, and maintain trust records.",
				"Personal details are not intended to be sold or shared for unrelated commercial use. Visitors should avoid submitting sensitive information unless it is necessary for direct communication with the trust.",
			]}
		/>
	);
}

export default Privacy;
