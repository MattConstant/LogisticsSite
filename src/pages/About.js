import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FooterComponent } from '../components/FooterComponent.tsx';
import '../App.css'; // Make sure to import your stylesheet

const About = () => {
  return (
    <>
      <Container>
      <Col lg={12} className="mb-3 text-center">
            {/* Image placeholder */}
            <img src="https://images.businessnewsdaily.com/app/uploads/2022/04/04074130/teamwork_g-stockstudio_getty.jpg" alt="About Us" className="img-fluid mb-3" width="80%" />
          </Col>        <Row className="my-5 align-items-center">
          {/* ... */}
          <Col lg={12}>
            <h2>About Our Company</h2>
            <h3>Our Services</h3>
            <p className="large-font">
              At Focus Logistics, we take pride in offering a comprehensive array of logistics solutions tailored to the unique needs of businesses in the modern landscape. Our unwavering commitment to reliability, efficiency, and customer satisfaction distinguishes us in the highly competitive transportation industry. With years of expertise and a deep understanding of logistics dynamics, we ensure that your goods are handled with the utmost care and professionalism throughout their journey.
            </p>

            <h3>Integrated Logistics Solutions</h3>
            <p className="large-font">
              Recognizing the intricacies of global supply chain management, Focus Logistics provides an integrated approach to logistical services. Our extensive array of offerings includes warehousing, inventory management, multimodal transportation, and innovative freight forwarding solutions. Our dedicated team works around the clock to ensure that your goods transition smoothly from the initial pickup points to their final destinations, eliminating bottlenecks and streamlining the entire process.
            </p>

            <h3>State-of-the-Art Fleet</h3>
            <p className="large-font">
              Our fleet, boasting the latest in transportation technology, is at the forefront of the industry, providing you with real-time tracking capabilities and the assurance of cargo safety. We have a diverse array of vehicles and equipment designed to cater to a wide range of freight types, including specialized transportation for temperature-sensitive and high-value goods, ensuring that we can accommodate your specific product requirements under the most stringent of conditions.
            </p>

            <h3>Customized Freight Services</h3>
            <p className="large-font">
              We understand that each business has its own set of shipping needs and challenges. At Focus Logistics, whether you need less-than-truckload (LTL), full-truckload (FTL), or expedited shipping options, we customize our services to align with your unique requirements. Our logistics experts engage in thorough consultations to devise the most efficient and cost-effective strategies for your shipments, leveraging our industry expertise to enhance your supply chain's performance.
            </p>

            <h3>Global Shipping Network</h3>
            <p className="large-font">
              Our global shipping network is expansive and robust, designed to bridge international markets with ease and agility. Our team of seasoned customs brokers possesses the knowledge and experience to manage the complexities of cross-border regulations, facilitating a seamless and compliant international shipping experience for your business. This global reach ensures that no destination is beyond your reach, providing you with the confidence to expand your market presence worldwide.
            </p>

            <h3>Dedicated Support Team</h3>
            <p className="large-font">
              The cornerstone of our service philosophy is our dedicated support team, committed to delivering exceptional customer service. Available 24/7, our specialists are ready to provide you with the necessary assistance, updates on your shipments, and prompt resolution to any issues that may arise. We believe in building long-term relationships with our clients based on trust, reliability, and mutual success.
            </p>
            <p className="large-font">
              Reach out to us today to discover how Focus Logistics can propel your business to new heights with our customized, cutting-edge logistics services.
            </p>
          </Col>
        </Row>
        {/* ... */}
      </Container>
      <FooterComponent/>
    </>
  );
};

export default About;
