import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<footer>
			<h2>văzut</h2>
			<div className="icons">
				<a href="/">
					<FontAwesomeIcon icon={faFacebook} />
					<span className="sr-only">Link to vazut's facebook page</span>
				</a>
				<a href="/">
					<FontAwesomeIcon icon={faInstagram} />
					<span className="sr-only">Link to vazut's instagram page</span>
				</a>
				<a href="/">
					<FontAwesomeIcon icon={faTwitter} />
					<span className="sr-only">Link to vazut's twitter page</span>
				</a>
			</div>
		</footer>
	);
};
export default Footer;
