import React from 'react';
import { Container, Col, Row, Image} from 'react-bootstrap';

import { useEffect, useState } from 'react';
import { getContent} from '../api/cfclient';
import ReactMarkdown from "react-markdown";
import ThreadsCanvas from './ThreadsCanvas';
import Footer from "./Footer";
import TextType from './TextType';
import ScrollDrawSVG from './ScrollDrawrSVG';



const HomePage: React.FC = () => {

    const [data, setData] = useState<object[]>([]);
    useEffect(() => {
    getContent("info_section").then((data_resp: object[])  => {
            setData(data_resp as object[]);
            console.log("Data response:", data_resp);
        });
    console.log("Fetched data:", data);
  }, []);



  return (
  <div>
 {data && data.map((item: any, index: number) => {
  if (item.contentType === "hero") {
    const videoUrl = item.fields.heroVideo;
    const imageUrl = item.fields.heroImage;

    return (
      <div key={index} className="hero-image position-relative overflow-hidden">
        {/* Background video */}
        {videoUrl ? (
          <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
            }}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          /* Fallback image background */
          <div
            className="hero-bg-image"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0), rgba(0,0,0,0.2)), url(${imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          ></div>
        )}

        {/* Text overlay */}
        <div
          className="hero-text position-relative"
          style={{
            zIndex: 1,
            color: "#fff",
            textAlign: "left",
            padding: "10rem 2rem",
          }}
        >
          {/* <div className="logo-image"></div> */}
          {/* <div>{item.fields.heroText}</div> */}
          {/* <div className="logo-image">DRIVING ENERGY TRANSITION, Powered by  Kites</div> */}
          <TextType 
                text={[item.fields.heroText, "Æther Swiss Kite."]}
                typingSpeed={40}
                pauseDuration={2500}
                deletingSpeed={10}
                showCursor={true}
                cursorCharacter=""
                />
        </div>
      </div>
    );
  }
  return null;
})}
<div style={{ height: '350px', position: 'relative' }}>
                <ThreadsCanvas  />
            </div>
  <Container fluid>

    {data &&
  data
    .filter((item) => item.contentType === "infoSection")
    .sort((a, b) => (a.fields.order || 0) - (b.fields.order || 0))
    .map((item, index) => (
      <Container
        key={index}
        fluid
        className="info-section py-6 px-3 px-md-4 mb-5 border-1px "
      >
        {/* Title */}
        <Row className="mb-4">
             <Col sm={1} className="d-flex align-items-center justify-content-center"></Col>
          <Col>
            <h2 className="text-section-heading mb-0">{item.fields.infoTitle}</h2>
          </Col>
        </Row>

        {/* Content */}
        <Row className=" gy-4">
          {/* Image column */}
          <Col sm={1} className="d-flex align-items-center justify-content-center"></Col>
          <Col xs={12} md={6} className="text-center">
            <Image
              src={item.fields.infoImage}
              alt={item.fields.infoTitle || "Section image"}
              fluid
              className="shadow-sm"
            />
          </Col>

          {/* Description column */}
          <Col xs={12} md={4}>
            <div className="text-mono-body text-left fs-6 lh-lg">
              <ReactMarkdown>{item.fields.infoDesc}</ReactMarkdown>
            </div>
          </Col>
        </Row>
      </Container>
    ))}
    <Container fluid className="py-5">
       <Row className="mb-6">
            <Col sm={1}></Col>
                  <Col sm={10}>
                  <div className='kite-div'>
                    <ScrollDrawSVG/>
                  </div>
                  <div className='kite-div-over'>
                    <p className="text-left text-section-heading"><a className="large-link clean-link text-section-heading" href="/join"> JOIN</a></p>              
                    <p className="text-left text-section-heading"><a className="large-link clean-link" href="/team"> THE TEAM</a></p>              
                    <p className="text-left text-section-heading"><a className="large-link clean-link" href="#contact"> GET IN TOUCH </a></p>              
                  </div>
            </Col>
        </Row>
    </Container>
    <Container className="roles-section border-1px py-5" fluid>
      
      
    



  {/* Roles grid */}
  <Row className="g-4 justify-content-center">
    {data &&
      data
        .filter((item) => item.contentType === "roleTeams")
        .sort((a, b) => (a.fields.order || 0) - (b.fields.order || 0))
        .map((item, index) => (
          <Col
            key={index}
            xs={12}
            md={6}
            lg={5}
            className="border-1px  p-3"
          > 
            <Row className="align-items-center">
              {/* Image column */}
              <Col xs={12} sm={5} className="mb-3 mb-sm-0 text-center">
                <Image
                  src={item.fields.roleImage}
                  alt={item.fields.roleTitle}
                  fluid
                  className="shadow-sm"
                />
              </Col>

              {/* Text column */}
              <Col xs={12} sm={7}>
                <h2 className="text-section-heading-sub-role mb-2">
                  {item.fields.roleTitle}
                </h2>
                <div className="text-mono-body small">
                  <ReactMarkdown>{item.fields.roleDescLong}</ReactMarkdown>
                </div>
              </Col>
            </Row>
          </Col>
        ))}
  </Row>
</Container>
           
            <section id="contact"></section>
            <Footer/>
            
            
        </Container>
        </div>

  );
};

export default HomePage;
