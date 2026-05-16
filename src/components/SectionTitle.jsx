function SectionTitle({ eyebrow, title, inverted = false }) {
	return (
		<div className={`section-title ${inverted ? "inverted" : ""}`}>
			<p className='section-eyebrow'>{eyebrow}</p>
			<h2>{title}</h2>
			<span className='title-rule' aria-hidden='true' />
		</div>
	);
}

export default SectionTitle;
