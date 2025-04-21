// import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <div className="resume-container">
      <iframe
        src="/resume.html"
        title="Resume"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
      />
    </div>
  );
}