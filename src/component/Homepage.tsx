import React from 'react';
import { Container, Col, Row, Image} from 'react-bootstrap';
const HomePage: React.FC = () => {
  return (<div>
        <div className="hero-image">
            <div className="hero-text">
                <div className="logo-image"></div>
                <div>Driving energy transition, powered by Kites.</div>
            </div>
        </div>
            <Container className="info-section" fluid>
                    {/* <Row>
                        <Col>1 of 3</Col>
                        <Col xs={6}>2 of 3 (wider)</Col>
                        <Col>3 of 3</Col>
                    </Row>
                    <Row>
                        <Col>1 of 3</Col>
                        <Col xs={5}>2 of 3 (wider)</Col>
                        <Col>3 of 3</Col>
                    </Row> */}
                <Row>
                    <p className="text-left text-section-heading ">The Problem</p>
                </Row>
                <Row>
                    <Col sm={6}>
                        <Image src="/images/problem-scaled.jpg" alt="Shipping Emissions" fluid />
                    </Col>
                    <Col sm={6}>
                        <p className="text-mono-body text-left">789 million tons of CO₂ equivalent were produced by shipping in 2021. To tackle the climate emergency, we need to find a solution to accelerate the energy transition.</p>
                    </Col>
                </Row>
            </Container>
            <Container className="info-section" fluid>
                <Row>
                    <p className="text-left text-section-heading ">Our Solution</p>
                    
                </Row>
                <Row>
                    <Col sm={6}>
                        <Image src="/images/8a-scaled.jpg" alt="Kite System" fluid />
                    </Col>
                    <Col sm={6}>
                        <p className="text-section-heading-sub">The wind of innovation, in plug-and-play.</p>
                        <p className="text-mono-body text-left">Aether's innovative kite system harnesses wind power to significantly reduce fuel consumption and emissions for ships, offering a sustainable solution to the maritime industry's environmental challenges.</p>
                    </Col>
                </Row>
            </Container> 
            <Container className="info-section" fluid>
                <Row>
                    <p className="text-left text-section-heading ">Why Kites?</p>
                </Row>
                <Row>
                    <Col sm={6}>
                        <Image src="/images/6c-scaled.jpg" alt="Kite System" fluid />
                    </Col>
                    <Col sm={6}>
                         <p className="text-mono-body text-section-heading-sub"><b>Kites for the future.</b></p> 
                        <p className="text-mono-body text-left">
                        <ul>
                            <li><b>More Power:</b> Generate more energy than stationary sails.</li>
                            <li><b>Easy Integration:</b> Lightweight, non-intrusive, and plug-and-play.</li>
                            <li><b>Lower Costs:</b> Minimal materials, no major modifications.</li>
                            <li><b>Sustainable:</b> A simple way to cut emissions.</li>
                        </ul>
                        </p>
                    </Col>
                </Row>
            </Container> 
        </div>

  );
};

export default HomePage;
