import SimplePage from "./simplePage";

function Terms() {
	return (
		<SimplePage
			eyebrow='Website Terms'
			title='Terms & Conditions'
			body={[
				"By using this website, visitors agree to use the information respectfully and only for lawful purposes. Content on this website is provided to share information about the trust, its seva activities, and ways to support the mission.",
				"Donation and support details should be verified directly with the trust before making any contribution. The trust may update website content, contact details, or program information from time to time.",
			]}
		/>
	);
}

export default Terms;
