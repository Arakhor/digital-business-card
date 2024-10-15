import { useState } from "react";
import twitterIcon from "./../assets/twitter.svg";
import facebookIcon from "./../assets/facebook.svg";
import instagramIcon from "./../assets/instagram.svg";
import githubIcon from "./../assets/github.svg";

const Footer = () => (
	<footer>
		<a>
			<img className="footer-icon" src={twitterIcon} />
		</a>
		<a>
			<img className="footer-icon" src={facebookIcon} />
		</a>
		<a>
			<img className="footer-icon" src={instagramIcon} />
		</a>
		<a>
			<img className="footer-icon" src={githubIcon} />
		</a>
	</footer>
);

export default Footer;
