import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer-dark animate-footer">
        <div className="container text-center py-4">
            <p className="mb-2 text-light">
            Proyecto desarrollado con 💻 por <strong>Russo</strong> — Front-End Developer
            </p>
                <div className="social-icons mb-2">
                    <a
                        href="https://github.com/oscardjld"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-2 text-light"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/oscardjld"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-2 text-light"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>
            <p className="text-muted" style={{ fontSize: '0.85rem' }}>
            WorkNow es un proyecto personal sin fines comerciales.
            </p>
        </div>
    </footer>
    );
}

export default Footer;