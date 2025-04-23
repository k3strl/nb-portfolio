export default function Resume() {
  return (
    <div>
      <div className="download">
        <a href="resume.nic-blaize.pdf">Download as PDF</a>
      </div>
      <div className="resume-container">
        <iframe
          src="/resume.html"
          title="Resume"
          style={{
            width: "50%",
            height: "40vw",
            border: "none",
            backgroundColor: "#e5e5e5",
          }}
        />
      </div>
    </div>
  );
}
