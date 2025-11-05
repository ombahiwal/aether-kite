import React, { useRef } from 'react';
import { Container, Col, Row, Image, Spinner} from 'react-bootstrap';
import NavComponent from '../layout/NavComponent';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getContent } from '../../api/contentful';
import ReactMarkdown from "react-markdown";
import ThreadsCanvas from '../features/ThreadsCanvas';
import Footer from "../layout/Footer";
import TextType from '../ui/TextType';
import ScrollDrawSVG from '../features/ScrollDrawSVG';
import ScrollPath from '../features/ScrollPath';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);



interface ContentItem {
  contentType: string;
  fields: {
    [key: string]: any;
    heroVideo?: string;
    heroImage?: string;
    heroText?: string;
    infoTitle?: string;
    infoDesc?: string;
    infoImage?: string;
    order?: number;
    roleTitle?: string;
    roleDescLong?: string;
    roleImage?: string;
  };
}

const HomePage: React.FC = () => {
    const { t } = useLanguage();
    const [data, setData] = useState<ContentItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isContentLoaded, setIsContentLoaded] = useState<boolean>(false);
    const rolesSectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const dataResp = await getContent();
          setData(dataResp as ContentItem[]);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }, []);

    // Wait for images and content to load
    useEffect(() => {
      if (!isLoading && data.length > 0) {
        // Use a timeout to wait for DOM to fully render
        const checkContentLoaded = () => {
          const images = document.querySelectorAll('img');
          const totalImages = images.length;

          if (totalImages === 0) {
            setIsContentLoaded(true);
            return;
          }

          let loadedCount = 0;

          const cleanup = () => {
            images.forEach((img) => {
              img.removeEventListener('load', checkImageLoad);
              img.removeEventListener('error', checkImageLoad);
            });
          };

          const checkImageLoad = () => {
            loadedCount++;
            if (loadedCount === totalImages) {
              cleanup();
              // Small delay to ensure everything is rendered and ScrollTrigger can calculate positions
              setTimeout(() => {
                setIsContentLoaded(true);
              }, 300);
            }
          };

          const checkAllLoaded = () => {
            let allLoaded = true;
            images.forEach((img) => {
              if (!img.complete) {
                allLoaded = false;
              }
            });
            if (allLoaded && loadedCount === 0) {
              cleanup();
              setTimeout(() => {
                setIsContentLoaded(true);
              }, 300);
            }
          };

          images.forEach((img) => {
            if (img.complete && img.naturalHeight !== 0) {
              checkImageLoad();
            } else {
              img.addEventListener('load', checkImageLoad);
              img.addEventListener('error', checkImageLoad);
            }
          });

          // Fallback: if no images are loading, set as loaded
          setTimeout(() => {
            checkAllLoaded();
          }, 100);
        };

        // Wait for DOM to render before checking images
        const timeoutId = setTimeout(checkContentLoaded, 100);

        return () => clearTimeout(timeoutId);
      }
    }, [isLoading, data]);


  if(isLoading || !data || data.length === 0){
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Spinner animation="border" role="status" style={{ color: 'black', width: '3rem', height: '3rem' }}>
          <span className="visually-hidden">{t('common.loading')}</span>
        </Spinner>
      </div>
    );
  }else{
  return (
    <div style={{ position: 'relative', width: '100%', margin: 0, padding: 0 }}>
 {data && data.map((item, index: number) => {
  if (item.contentType === "hero") {
    const videoUrl = item.fields.heroVideo;
    const imageUrl = item.fields.heroImage;

    return (
      <div key={index} className="hero-image position-relative overflow-hidden" style={{ width: '100%', margin: 0, padding: 0 }}>
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
                text={[item.fields.heroText || "", "Æther Swiss Kite."]}
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
      <ScrollPath color="rgba(135, 206, 250, 0.2)" strokeWidth={1.5} pathComplexity={80} />
<div style={{ height: '350px', position: 'relative', width: '100%', margin: 0, padding: 0, overflow: 'hidden' }}>
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
                  <div style={{ position: 'relative', width: '100%', minHeight: '100%' }}>
                    <div className='kite-div'>
                      <ScrollDrawSVG isContentLoaded={isContentLoaded} />
                    </div>
                    <div className='kite-div-over'>
                      <NavComponent/>
                    </div>
                  </div>
            </Col>
        </Row>
    </Container>
    <Container className="roles-section py-5" fluid ref={rolesSectionRef}>
      
      
    



  {/* Roles grid */}
  <Row className="g-4 g-md-5 justify-content-center">
    {data &&
      data
        .filter((item) => item.contentType === "roleTeams")
        .sort((a, b) => (a.fields.order || 0) - (b.fields.order || 0))
        .map((item, index) => (
              <Col
                key={index}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={3}
                className="role-card-col"
              >
            <div className="role-card">
              {/* Image section */}
              <div className="role-image-wrapper">
                <Image
                  src={item.fields.roleImage}
                  alt={item.fields.roleTitle}
                  fluid
                  className="role-image"
                />
              </div>

              {/* Text section */}
              <div className="role-content">
                <h2 className="role-title">
                  {item.fields.roleTitle}
                </h2>
                <div className="role-description">
                  <ReactMarkdown>{item.fields.roleDescLong}</ReactMarkdown>
                </div>
              </div>
            </div>
          </Col>
        ))}
  </Row>
</Container>
           
            <section id="contact"></section>
            <Footer/>
            
            
        </Container>
        </div>

  );
  }
};

export default HomePage;
