import React from 'react';
import ThreadsCanvas from './ThreadsCanvas';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getContent} from '../api/cfclient';
import { Image } from 'react-bootstrap';
import ReactMarkdown from "react-markdown";
import Footer from "./Footer";
import NavComponent from './NavComponent';
const TeamPage: React.FC = () => {

    const [data, setData] = useState<object[]>([]);
      useEffect(() => {
      getContent("info_section").then((data_resp: object[])  => {
              setData(data_resp as object[]);
              console.log("Data response:", data_resp);
          });
      console.log("Fetched data:", data);
    }, []);


    let groupTeamsByCategory = (data) => {
        console.log("Grouping teams from data:", data);
        if (!Array.isArray(data)) return {};

        // Filter only partners
        const teams = data.filter(item => item.contentType === "teams");

        // Group by partnerCategory
        const grouped = teams.reduce((acc, team) => {
            const category = team.fields.teamCategory || "Uncategorized";
            if (!acc[category]) {
                acc[category] = [];
            }
                acc[category].push(team);
            return acc;
        }, []);

        // Optional: sort partners within each category by order
        for (const category in grouped) {
            grouped[category].sort((a, b) => (a.fields.order || 0) - (b.fields.order || 0));
        }
        console.log("Grouped teams:", grouped);
        return grouped;
    };

  return (<div>
    <div style={{ height: '300px', position: 'relative' }}>
                <ThreadsCanvas />
            </div>
  
    <Container fluid>
      <Row>
        <Col sm={1}></Col>
        <Col sm={10}>
          <NavComponent/>
        </Col>
      </Row>
      <Row>
        <Col sm={6}></Col>
        <Col sm={6}>
           <h1 className='text-section-heading'>The Æther Swiss Kite team </h1>
        </Col>
      </Row>
</Container>

        {data && Object.entries(groupTeamsByCategory(data)).map(([category, teams]) => (
                        <Container key={category} fluid className="partners-section mb-5">
                          <Row>
                            <Col sm={1}></Col>
                            <Col sm={3}>
                                <h1 className="text-section-heading-sub">{category}</h1>
                            </Col>
                          </Row>
                            <Row className="align-items-center">
                              <Col sm={1}></Col>
                              <Col sm={10}>
                                  <Row className="gy-4">
                                  {teams.map((team) => (
                                      <Col key={team.id} sm={4} className="text-center">
                                          <Image
                                              className="image-partner"
                                              src={team.fields.teamMemberImage}
                                              alt={team.fields.teamMemberName}
                                              fluid
                                          />
                                          <p className="text-mono-body mt-2">{team.fields.teamMemberName}</p>
                                          <span className="text-mono-body mt-2"><ReactMarkdown>{team.fields.teamMemberTitle}</ReactMarkdown></span>
                                      </Col>
                                  ))}
                                  </Row>
                              </Col>
                            </Row>

                        </Container>
                        
                        ))}

    <Footer/>
    </div>
  );
};

export default TeamPage;
