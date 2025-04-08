// src/components/Navbar.tsx
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="navbar">
			<div className="navbar-container">
				<Link to="/" className="navbar-logo">
					Nic Blaize
				</Link>
				<ul className="nav-menu">
					<li className="nav-item">
						<Link to="/" className="nav-links">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/resume" className="nav-links">
							Resume
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/projects" className="nav-links">
							Projects
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
