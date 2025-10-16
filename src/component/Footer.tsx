
import React from 'react';
import { Container, Col, Row, Image} from 'react-bootstrap';

const Footer: React.FC = () => {
    return (
            
            <Container  className='contact-section border-1px' fluid>
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={11} md={4}>
                        <p className="text-left text-section-heading ">Get in touch</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={1}></Col>
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
                    <Col sm={1}></Col>
                     <Col sm={6}>
                    <p className='text-mono-body'>Copyright 2025 | Æther | All Rights Reserved</p>
                    </Col>
                    
                </Row>
            </Container>
            )
        }

export default Footer;