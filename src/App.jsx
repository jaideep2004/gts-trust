import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/about";
import Contact from "./pages/contact";
import Disclaimer from "./pages/disclaimer";
import Donate from "./pages/donate";
import Home from "./pages/home";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import "./App.css";

const routes = {
	"/": Home,
	"/about": About,
	"/contact": Contact,
	"/donate": Donate,
	"/terms-and-conditions": Terms,
	"/privacy-policy": Privacy,
	"/disclaimer": Disclaimer,
};

function App() {
	const [path, setPath] = useState(() => window.location.pathname);

	useEffect(() => {
		const handleRoute = () => setPath(window.location.pathname);
		window.addEventListener("popstate", handleRoute);
		return () => window.removeEventListener("popstate", handleRoute);
	}, []);

	const navigate = (to) => {
		if (to === path) {
			window.scrollTo({ top: 0, behavior: "smooth" });
			return;
		}

		window.history.pushState({}, "", to);
		setPath(to);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const navigateToAnchor = (anchor) => {
		const scroll = () => document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });

		if (path !== "/") {
			window.history.pushState({}, "", "/");
			setPath("/");
			window.setTimeout(scroll, 90);
			return;
		}

		scroll();
	};

	const Page = routes[path] ?? Home;

	return (
		<div className='site-shell'>
			<Header path={path} navigate={navigate} navigateToAnchor={navigateToAnchor} />
			<Page navigate={navigate} navigateToAnchor={navigateToAnchor} />
			<Footer navigate={navigate} navigateToAnchor={navigateToAnchor} />
		</div>
	);
}

export default App;
