import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FooterComponent } from '../components/FooterComponent.tsx'; 

const About = () => {
  return (
    <>
    <Container>
      {/* Generic Image and Paragraph Section */}
      <Row className="my-5 align-items-center">
        <Col lg={12} className="mb-3 text-center">
          {/* Image placeholder */}
          <img src="https://images.businessnewsdaily.com/app/uploads/2022/04/04074130/teamwork_g-stockstudio_getty.jpg" alt="About Us" className="img-fluid mb-3" width="80%" />
        </Col>
        <Col lg={12}>
          <h2>About Our Company</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vivamus lacinia odio vitae vestibulum. Pellentesque in ipsum id orci porta dapibus. 
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
          </p>
        </Col>
      </Row>

      {/* Testimonials Section */}
      <Row className="my-5">
        <Col>
          <h2 className="text-center mb-4">Testimonials</h2>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Text>
                "This company provided the best service I've experienced in our industry. 
                Their attention to detail and innovative approaches made a significant difference."
              </Card.Text>
            </Card.Body>
          </Card>
          {/* Add more testimonials as Card components here */}
        </Col>
      </Row>


    </Container>
    <FooterComponent/>
    </>
  
  );
};

export default About;
