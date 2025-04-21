// import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <div className="resume-container">
      <iframe
        src="/resume.html"
        title="Resume"
        style={{
          width: '60%',
          height: '60vw',
          border: 'none',
          backgroundColor: 'white'
        }}
      />
    </div>
  );
}