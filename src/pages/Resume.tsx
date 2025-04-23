export default function Resume() {
  return (
    <div>
      <div className="download">
        <a href="resume.nic-blaize.pdf">Download PDF copy</a>
      </div>
      <div className="resume-container">
        <iframe
          src="/resume.html"
          title="Resume"
          style={{
            width: "60%",
            height: "60vw",
            border: "none",
            backgroundColor: "white",
          }}
        />
      </div>
    </div>
  );
}
