function Icon({ name }) {
	const common = {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 1.8,
		strokeLinecap: "round",
		strokeLinejoin: "round",
	};

	const icons = {
		arrow: <path d='M5 12h13m-5-5 5 5-5 5' />,
		phone: <path d='M6.6 3.8 9 3l2.1 4.7-1.4 1.1a12.4 12.4 0 0 0 5.5 5.5l1.1-1.4L21 15l-.8 2.4a3 3 0 0 1-3.2 2A16.5 16.5 0 0 1 4.6 7a3 3 0 0 1 2-3.2Z' />,
		mail: <><path d='M4 6h16v12H4z' /><path d='m4 7 8 6 8-6' /></>,
		pin: <><path d='M12 21s7-5.3 7-11a7 7 0 0 0-14 0c0 5.7 7 11 7 11Z' /><circle cx='12' cy='10' r='2.3' /></>,
		heart: <path d='M20.8 5.8a5 5 0 0 0-7.1 0L12 7.5l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 21.3l8.8-8.4a5 5 0 0 0 0-7.1Z' />,
		heartFill: <path fill='currentColor' stroke='none' d='M12 21.2 3.4 13A5.4 5.4 0 0 1 11 5.4l1 1 1-1A5.4 5.4 0 0 1 20.6 13L12 21.2Z' />,
		donate: <><path d='M7 11h10v8H7z' /><path d='M9 11V8a3 3 0 0 1 6 0v3' /><path d='M12 14v2' /></>,
		chevronLeft: <path d='m15 18-6-6 6-6' />,
		chevronRight: <path d='m9 18 6-6-6-6' />,
		flower: <><path d='M12 7c2-3 5-2 5 1 0 2.5-2.3 3.6-5 4.3C9.3 11.6 7 10.5 7 8c0-3 3-4 5-1Z' /><path d='M12 12v7' /><path d='M9 16h6' /></>,
		khanda: <><path d='M12 3v18' /><path d='M8 5c-3 4-2.5 10 4 14 6.5-4 7-10 4-14' /><path d='M6 11h12' /></>,
		langar: <><path d='M6 15h12' /><path d='M8 15a4 4 0 0 0 8 0' /><path d='M9 11c-1.5-2 1-3 0-5' /><path d='M14 11c-1.5-2 1-3 0-5' /></>,
		education: <><path d='m3 9 9-5 9 5-9 5-9-5Z' /><path d='M7 12v4c3 2 7 2 10 0v-4' /></>,
		medical: <><path d='M12 21s8-5 8-11a5 5 0 0 0-8-4 5 5 0 0 0-8 4c0 6 8 11 8 11Z' /><path d='M12 8v6M9 11h6' /></>,
		community: <><circle cx='8' cy='9' r='3' /><circle cx='16' cy='9' r='3' /><path d='M3 20c.8-4 4-6 9-6s8.2 2 9 6' /></>,
		temple: <><path d='M4 20h16' /><path d='M6 20v-8h12v8' /><path d='m4 12 8-6 8 6' /><path d='M12 6V3' /><path d='M10 20v-5h4v5' /></>,
		people: <><circle cx='9' cy='8' r='3' /><circle cx='17' cy='9' r='2.5' /><path d='M3 20c.7-4 3-6 7-6 3 0 5.2 1.3 6.2 3.8' /><path d='M14.5 14.5c3 .2 5 1.8 5.5 5.5' /></>,
		seva: <><path d='M12 3v6' /><path d='M8 7c-2 1.3-3 3-3 5.5A7 7 0 0 0 19 12.5c0-2.5-1-4.2-3-5.5' /><path d='M8 17h8' /></>,
	};

	return (
		<svg className='icon' aria-hidden='true' {...common}>
			{icons[name]}
		</svg>
	);
}

export default Icon;
