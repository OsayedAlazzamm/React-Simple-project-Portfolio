import { Container, Form, Button } from 'react-bootstrap';
import "./Contact-style.css"

function ContactForm() {
  return (
<div className="contact" id="contact">
    <Container style={{ maxWidth: '600px', marginTop: '40px' }}>
      <h2 className="mb-4 text-center">Contact Me</h2>
      <Form
        action="https://formsubmit.co/osayedalazzam@gmail.com"
        method="POST"
      >
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter your name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter your email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" name="message" rows={4} placeholder="Type your message" required />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </div>
      </Form>
    </Container>
</div>
  );
}

export default ContactForm;
