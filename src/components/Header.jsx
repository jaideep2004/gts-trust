import { useEffect, useId, useState } from "react";
import Icon from "./Icon";
import { navItems } from "../data/siteData";

function Header({ path, navigate, navigateToAnchor }) {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const menuId = useId();

	useEffect(() => {
		let ticking = false;

		const updateHeader = () => {
			const currentScrollY = Math.max(window.scrollY, 0);

			setScrolled(currentScrollY > 14);
			ticking = false;
		};

		const handleScroll = () => {
			if (ticking) return;
			window.requestAnimationFrame(updateHeader);
			ticking = true;
		};

		updateHeader();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (!open) return undefined;

		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				setOpen(false);
			}
		};

		const handleResize = () => {
			if (window.innerWidth > 1120) {
				setOpen(false);
			}
		};

		document.body.classList.add("menu-lock");
		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("resize", handleResize);

		return () => {
			document.body.classList.remove("menu-lock");
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("resize", handleResize);
		};
	}, [open]);

	const handleNav = (item) => {
		setOpen(false);
		if (item.anchor) {
			navigateToAnchor(item.anchor);
			return;
		}
		navigate(item.to);
	};

	return (
		<header className={`header ${scrolled ? "is-scrolled" : ""}`}>
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
				className={`menu-button ${open ? "is-open" : ""}`}
				type='button'
				aria-label={open ? "Close menu" : "Open menu"}
				aria-controls={menuId}
				aria-expanded={open}
				onClick={() => setOpen((value) => !value)}>
				<span />
				<span />
				<span />
			</button>

			<div
				className={`mobile-menu-backdrop ${open ? "is-visible" : ""}`}
				aria-hidden='true'
				onClick={() => setOpen(false)}
			/>

			<nav
				id={menuId}
				className={`nav ${open ? "nav-open" : ""}`}
				aria-label='Primary navigation'>
				<div className='mobile-menu-head'>
					<span>Menu</span>
					<button
						type='button'
						aria-label='Close menu'
						onClick={() => setOpen(false)}>
						<span aria-hidden='true'>X</span>
					</button>
				</div>
				{navItems.map((item, index) => {
					const active = item.to ? path === item.to : false;
					return (
						<a
							key={item.label}
							className={active ? "active" : ""}
							style={{ "--item-index": index }}
							href={item.anchor ? `/#${item.anchor}` : item.to}
							onClick={(event) => {
								event.preventDefault();
								handleNav(item);
							}}>
							{item.label}
						</a>
					);
				})}
				<button
					className='mobile-support-button'
					type='button'
					onClick={() => {
						setOpen(false);
						navigateToAnchor("support");
					}}>
					Support the Mission
					<Icon name='heart' />
				</button>
			</nav>

			<button className='support-button' type='button' onClick={() => navigateToAnchor("support")}>
				Support the Mission
				<Icon name='heart' />
			</button>
		</header>
	);
}

export default Header;
