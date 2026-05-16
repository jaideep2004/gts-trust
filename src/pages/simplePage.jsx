function SimplePage({ eyebrow, title, body }) {
	return (
		<main className='simple-page'>
			<section className='container page-panel'>
				<p className='section-eyebrow'>{eyebrow}</p>
				<h1>{title}</h1>
				<span className='title-rule' aria-hidden='true' />
				<div className='page-copy'>
					{body.map((paragraph) => (
						<p key={paragraph}>{paragraph}</p>
					))}
				</div>
			</section>
		</main>
	);
}

export default SimplePage;
