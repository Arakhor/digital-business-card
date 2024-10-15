import { useState } from "react";

const Navbar = () => (
	<nav>
		<h1 className="nav-head-main">Cyryl Smolenski</h1>
		<h3 className="nav-head-secondary">Frontend Developer</h3>
		<a className="nav-website">arakhor.website</a>
		<div className="nav-buttons">
			<a>Email</a>
			<a>Github</a>
		</div>
	</nav>
);

export default Navbar;
