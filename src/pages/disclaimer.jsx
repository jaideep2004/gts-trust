import SimplePage from "./simplePage";

function Disclaimer() {
	return (
		<SimplePage
			eyebrow='Disclaimer'
			title='Website Disclaimer'
			body={[
				"This website provides general information about Giani Thakur Singh Ji Charitable Trust and its charitable activities. While care is taken to keep details accurate, visitors should confirm donation, program, and contact information directly with the trust.",
				"The legal and policy pages are professional draft content for website use and are not a substitute for advice from a qualified legal professional.",
			]}
		/>
	);
}

export default Disclaimer;
