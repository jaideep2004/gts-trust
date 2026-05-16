import { useState } from "react";
import Icon from "./Icon";
import { navItems } from "../data/siteData";

function Header({ path, navigate, navigateToAnchor }) {
	const [open, setOpen] = useState(false);

	const handleNav = (item) => {
		setOpen(false);
		if (item.anchor) {
			navigateToAnchor(item.anchor);
			return;
		}
		navigate(item.to);
	};

	return (
		<header className='header'>
			<a
				className='brand'
				href='/'
				onClick={(event) => {
					event.preventDefault();
					navigate("/");
				}}>
				{/* <span className='brand-mark' aria-hidden='true'>
					<Icon name='khanda' />
				</span> */}
				<img src="/images/ngo-logo.png" alt="" />
				<span className='brand-text'>
					<strong>Giani Thakur Singh Ji</strong>
					<small>Charitable Trust</small>
				</span>
			</a>

			<button
				className='menu-button'
				type='button'
				aria-label='Toggle menu'
				onClick={() => setOpen((value) => !value)}>
				<span />
				<span />
				<span />
			</button>

			<nav className={`nav ${open ? "nav-open" : ""}`} aria-label='Primary navigation'>
				{navItems.map((item) => {
					const active = item.to ? path === item.to : false;
					return (
						<a
							key={item.label}
							className={active ? "active" : ""}
							href={item.anchor ? `/#${item.anchor}` : item.to}
							onClick={(event) => {
								event.preventDefault();
								handleNav(item);
							}}>
							{item.label}
						</a>
					);
				})}
			</nav>

			<button className='support-button' type='button' onClick={() => navigateToAnchor("support")}>
				Support the Mission
				<Icon name='heart' />
			</button>
		</header>
	);
}

export default Header;
