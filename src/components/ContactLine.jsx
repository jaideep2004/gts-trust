import Icon from "./Icon";

function ContactLine({ icon, text }) {
	return (
		<div className='contact-line'>
			<Icon name={icon} />
			<span>{text}</span>
		</div>
	);
}

export default ContactLine;
