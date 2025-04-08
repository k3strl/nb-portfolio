import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <div className="resume">
      <h1>My Resume</h1>
      {/* Add your resume content here */}
      <div className="page-navigation">
        <Link to="/" className="nav-link">
          Back to Home
        </Link>
      </div>
    </div>
  );
}