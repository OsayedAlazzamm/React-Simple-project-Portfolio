import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#343a40', padding: '15px 0' }}>
      <Container className="text-center">
        <a
          href="https://github.com/OsayedAlazzamm"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#fff', marginRight: '20px', fontSize: '1.5rem' }}
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/osayed-alazzam/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#ffffff', fontSize: '1.5rem' }}
        >
          <FaLinkedin />
        </a>
      </Container>
    </footer>
  );
}

export default Footer;
