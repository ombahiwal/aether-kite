import React, { useEffect, useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { getContent, getContentfulLocale } from '../../api/contentful';
import type { ContentItem } from '../../api/contentful';
import { Image, Spinner } from 'react-bootstrap';
import NavComponent from '../layout/NavComponent';
import ThreadsCanvas from '../features/ThreadsCanvas';
import Footer from "../layout/Footer";
import { useLanguage } from '../../context/LanguageContext';

interface PartnerItem extends ContentItem {
  fields: {
    partnerName?: string;
    partnerLogo?: string;
    partnerCategory?: string;
    order?: number | string;
  };
}

const JoinPartnerPage: React.FC = () => {
    const { language } = useLanguage();
    const [data, setData] = useState<ContentItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      setIsLoading(true);
      setError(null);
      const locale = getContentfulLocale(language);
      getContent(undefined, locale)
        .then((data_resp: ContentItem[]) => {
          setData(data_resp);
          console.log("Data response:", data_resp);
        })
        .catch((error) => {
          console.error("Error fetching partner data:", error);
          setError("Failed to load partner data. Please try again later.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, [language]); 
    
    const groupPartnersByCategory = (data: ContentItem[]): Record<string, PartnerItem[]> => {
        console.log("Grouping partners from data:", data);
        if (!Array.isArray(data)) return {};

        // Filter only partners
        const partners = data.filter((item): item is PartnerItem => item.contentType === "partners");

        // Group by partnerCategory
        const grouped = partners.reduce((acc: Record<string, PartnerItem[]>, partner: PartnerItem) => {
            const category = partner.fields.partnerCategory || "Uncategorized";
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(partner);
            return acc;
        }, {});

        // Sort partners within each category by order
        const toNumber = (value?: number | string | null) => {
          const parsed = Number(value);
          return Number.isFinite(parsed) ? parsed : Number.MAX_SAFE_INTEGER;
        };

        for (const category in grouped) {
            grouped[category].sort((a, b) => toNumber(a.fields.order) - toNumber(b.fields.order));
        }
    
        return grouped;
    };

    if (isLoading) {
      return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Spinner animation="border" role="status" style={{ color: 'white', width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      );
    }

    if (error) {
      return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <p style={{ color: 'white' }}>{error}</p>
        </div>
      );
    }
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
                                   {data && Object.entries(groupPartnersByCategory(data)).map(([category, partners]: [string, PartnerItem[]]) => (
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