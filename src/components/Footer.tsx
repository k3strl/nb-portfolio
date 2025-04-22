export default function Footer() {
    return (
        <footer className="footer">
            <section className="email">
                <ul>
                Send me <a href="mailto:nblaize@pm.me">an email</a>, or find me on:
                </ul>
            </section>
            <section className="social">
                <ul>
                    <a href="https://www.linkedin.com/in/nic-blaize/">LinkedIn</a>
                </ul>
                <ul>
                    <a href="https://github.com/k3strl">GitHub</a>
                </ul>
                <ul>
                    <a href="https://bsky.app/profile/k3strl.bsky.social">BlueSky</a>
                </ul>
            </section>
            <section className="copyright">
                <p>&copy; 2025 Nic Blaize</p>
            </section>
        </footer>
    );
}