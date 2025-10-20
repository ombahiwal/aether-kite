import React, { useEffect, useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { getContent} from '../api/cfclient';
import { Image } from 'react-bootstrap';
import NavComponent from './NavComponent';
import ThreadsCanvas from './ThreadsCanvas';
import Footer from "./Footer";
const JoinPartnerPage: React.FC = () => {
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
    return (<div> 
                <div style={{ height: '300px', position: 'relative' }}>
                           <ThreadsCanvas color={[105,105,105]} amplitude={250} distance={20} numLines={8} />
                        </div>
            
                <Container fluid>  
                <Row className="mb-6">
                    <Col sm={1}></Col>
                    <Col sm={10}>
                    <NavComponent/>
                    <p className='text-mono-body'>Become a partner </p>
                    </Col>
                </Row>
                </Container>
                  {/* Partners section  */}
                            <Container className="partners-section border-1px" fluid>
                                <Row >
                                    <Col sm={1}></Col>
                                    <Col sm={10}><p className="text-left text-section-heading ">Our Partners</p></Col>
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
                            <Footer/>
      </div>)
}

export default JoinPartnerPage;