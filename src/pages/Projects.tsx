import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      {/* Add project content here */}
      <div className="page-navigation">
        <Link to="/" className="nav-link">
          Back to Home
        </Link>
      </div>
    </div>
  );
}