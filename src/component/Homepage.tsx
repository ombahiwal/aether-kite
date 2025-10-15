import React from 'react';
import { Container, Col, Row, Image} from 'react-bootstrap';
import Threads from './Threads';
import { useEffect, useState } from 'react';
import { getContent} from '../api/cfclient';
import ReactMarkdown from "react-markdown";



const HomePage: React.FC = () => {

    const [data, setData] = useState<object[]>([]);
    useEffect(() => {
    getContent("info_section").then((data_resp: object[])  => {
            setData(data_resp as object[]);
            console.log("Data response:", data_resp);
        });
    console.log("Fetched data:", data);
  }, []);

    let groupPartnersByCategory = (data) => {
        console.log("Grouping partners from data:", data);
        if (!Array.isArray(data)) return {};

        // Filter only partners
        const partners = data.filter(item => item.contentType === "partners");

        // Group by partnerCategory
        const grouped = partners.reduce((acc, partner) => {
            const category = partner.fields.partnerCategory || "Uncategorized";
            if (!acc[category]) {
                acc[category] = [];
            }
                acc[category].push(partner);
            return acc;
        }, []);

        // Optional: sort partners within each category by order
        for (const category in grouped) {
            grouped[category].sort((a, b) => (a.fields.order || 0) - (b.fields.order || 0));
        }
    
        return grouped;
    };

  return (
  <div>
    {data && data.map((item:object, index)=> {
    if(item.contentType === "hero")
    return (
     <div key={index} style={{ backgroundImage: `linear-gradient(rgb(255, 255, 255, 0), rgba(0, 0, 0, 0.2)), url(${item.fields.heroImage})` }} className="hero-image" key={index}>
            <div className="hero-text">
                <div className="logo-image"></div>
                <div>{item.fields.heroText}</div>
            </div>
        </div>);
            
    })}
<div style={{ height: '250px', position: 'relative' }}>
                <Threads
                    amplitude={0.9}
                    distance={0.5}
                    // color={[, 0, 0]}
                    enableMouseInteraction={true}
                />
            </div>
  <Container fluid>
       <Col> 
        {data && data.map((item: object, index) => {
            if(item.contentType === "infoSection"){
                return (
                    <Container key={index} className="info-section border-1px" fluid>
                        <Row>
                            <p className="text-left text-section-heading ">{item.fields.infoTitle}</p>
                        </Row>
                        <Row>
                            <Col sm={8}>
                                <Image src={item.fields.infoImage} alt="Shipping Emissions" fluid />
                            </Col>
                            <Col sm={4}>
                                <span className="text-mono-body text-left"> <ReactMarkdown>{item.fields.infoDesc}</ReactMarkdown></span>
                            </Col>
                        </Row>
                    </Container>
                );
            }
                
        })}
                
            {/* Engineering section  */}
            <Container className="roles-section border-1px" fluid>
                <Row>
                    <p className="text-left text-section-heading ">Teams</p>
                </Row>

        <Row >
                 {data && data.map((item: object, index) => {
                        if(item.contentType === "roleTeams"){
                            return (
                                        <Col key={index} sm={5} className="border-1px">
                                            <Row>
                                                <Col md={5}><Image src={item.fields.roleImage} fluid/></Col>
                                                <Col md={7}>
                                                    <h1 className='text-section-heading-sub-role'>{item.fields.roleTitle}</h1>
                                                    <span className='text-mono-body'>
                                                       <ReactMarkdown>{item.fields.roleDescLong}</ReactMarkdown>
                                                    </span>
                                                </Col> 
                                            </Row>
                                        </Col>
                                    
                            );
                        }   
                    })}
                    
           </Row> 
                <Row>
                     <Col sm={6} className="border-1px">
                    </Col>
                     <Col sm={4} className="border-1px">
                    </Col>

                </Row>
            </Container>

             {/* Partners section  */}
            <Container className="partners-section border-1px" fluid>
                <Row >
                    <p className="text-left text-section-heading ">Our Partners</p>
                </Row>
                
                <Row className="">
                   {data && Object.entries(groupPartnersByCategory(data)).map(([category, partners]) => (
                        <Container key={category} fluid className="partners-section mb-5">
                            <Row className="align-items-center">
                            <Col sm={2}>
                                <h1 className="text-section-heading-sub">{category}</h1>
                            </Col>

                            <Col sm={10}>
                                <Row className="gy-4">
                                {partners.map((partner) => (
                                    <Col key={partner.id} sm={4} className="text-center">
                                    <Image
                                        className="image-partner"
                                        src={partner.fields.partnerLogo}
                                        alt={partner.fields.partnerName}
                                        fluid
                                    />
                                    <p className="text-mono-body mt-2">{partner.fields.partnerName}</p>
                                    </Col>
                                ))}
                                </Row>
                            </Col>
                            </Row>
                        </Container>
                        ))}
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
