import React from 'react';
import { Container, Col, Row, Image} from 'react-bootstrap';
import Threads from './Threads';
// import ScrollLine from './ScrollDrawComponent';

const HomePage: React.FC = () => {
  return (
  <div>
     <div className="hero-image">
            <div className="hero-text">
                <div className="logo-image"></div>
                <div>Driving energy transition, powered by Kites.</div>
            </div>
        </div>

            <div style={{ height: '250px', position: 'relative' }}>
            <Threads
                amplitude={0.9}
                distance={0.5}
                // color={[, 0, 0]}
                enableMouseInteraction={true}
            />
            </div>
  <Container fluid >
        {/* <Col className="text-center">
        <Row>Hello2</Row>
        <Row>hello2</Row>
        Hello
        </Col> */}
       <Col>
        {/* Section with introduction, problem, etc */}
            <Container className="info-section border-1px" fluid>
                <Row>
                    <p className="text-left text-section-heading ">The Problem</p>
                </Row>
                <Row>
                    <Col sm={8}>
                        <Image src="/images/problem-scaled.jpg" alt="Shipping Emissions" fluid />
                    </Col>
                    <Col sm={4}>
                        <p className="text-mono-body text-left">789 million tons of CO₂ equivalent were produced by shipping in 2021. To tackle the climate emergency, we need to find a solution to accelerate the energy transition.</p>
                    </Col>
                </Row>
            </Container>
            {/* Engineering section  */}
            <Container className="roles-section border-1px" fluid>
                <Row>
                    <p className="text-left text-section-heading ">Teams</p>
                </Row>
            
                <Row>
                    <Col sm={6} className="border-1px">
                        <Row>
                            <Col sm={6}><Image src='/images/problem-scaled.jpg' fluid/></Col>
                            <Col sm={6}>
                                <h1 className='text-section-heading-sub-role'>Prototype</h1>
                                <p className='text-mono-body'>
                                    Design the mechanical systems needed to control the kite.
                                </p>
                            </Col> 
                        </Row>
                    </Col>
                </Row>       
                <Row>
                     <Col sm={6} className="border-1px">
                    </Col>
                     <Col sm={4} className="border-1px">
                    </Col>
                     <Col sm={3} className="border-1px">
                    </Col>
                     <Col sm={4} className="border-1px">
                    </Col>
                     <Col sm={2} className="border-1px">
                    </Col>
                </Row>
            </Container>

             {/* Partners section  */}
            <Container className="partners-section border-1px" fluid>
                <Row >
                    <p className="text-left text-section-heading ">Our Partners</p>
                </Row>
                
                <Row className="">
                    <Container  fluid>
                        <Col sm={2} ><h1 className='text-section-heading-sub'>Mistral</h1></Col>
                        <Col sm={11}>
                            <Row>
                                <Col sm={4}>
                                    <Image className="image-partner" src='/images/problem-scaled.jpg' fluid/>
                                </Col> 
                                <Col sm={4}>
                                    <Image className="image-partner" src='/images/problem-scaled.jpg' fluid/>
                                </Col> 
                              
                            </Row>

                        </Col>
                    </Container>
                </Row>       
          
            </Container>

            {/* Contact section / footer */}
            <Container className='contact-section border-1px' fluid>
                <Row>
                    <Col>
                        <p className="text-left text-section-heading ">Get in touch</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <p className='text-mono-body'>
                            Interested in joining the team or want to  
                            learn more about our project? Reach out to us at <a href="mailto:contact@aetherswisskite.ch">contact@aetherswisskite.ch</a>
                        </p>
                    </Col>
                    
                    <Col sm={4}>
                             <a href="https://youtu.be/DNMRI-zWwSU?feature=share"><Image className='icon-social' width={50} src='/icons/youtube.svg' fluid/></a>
                               <a  href="https://www.instagram.com/reel/DGyQEk8OGNs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA="><Image className='icon-social' src='/icons/instagram.svg' fluid/></a>
                                <a href="https://www.linkedin.com/company/%C3%A6ther-swiss-kite"><Image className='icon-social' width={50} src='/icons/linkedin.svg' fluid/></a>
                    </Col>

                </Row>

                <Row>
                    <p className='text-mono-body'>Copyright 2025 | Æther | All Rights Reserved</p>
                </Row>
            </Container>
            
            {/* <Container>
                        <ScrollLine drawDistance={1200} strokeColor="#CFE9FF" strokeWidth={4} />
            </Container> */}
            </Col>
        </Container>
        </div>

  );
};

export default HomePage;
