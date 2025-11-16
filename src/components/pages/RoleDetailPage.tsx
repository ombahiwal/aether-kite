import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Container, Button, Spinner, Image, Row, Col } from "react-bootstrap";
import { getContent } from "../../api/contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { useLanguage } from '../../context/LanguageContext';
import Footer from "../layout/Footer";
import NavComponent from "../layout/NavComponent";
import "../../styles/roledetail.css";

interface RoleItem {
  id: string;
  contentType: string;
  fields: {
    roleTitle?: string;
    roleDescLong?: any; // Rich text document
    roleImage?: string;
    order?: number;
  };
}

const RoleDetailPage: React.FC = () => {
  const { t } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [role, setRole] = useState<RoleItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text: React.ReactNode) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text: React.ReactNode) => <u>{text}</u>,
      [MARKS.CODE]: (text: React.ReactNode) => <code>{text}</code>,
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => <h1>{children}</h1>,
      [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => <h2>{children}</h2>,
      [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => <h3>{children}</h3>,
      [BLOCKS.HEADING_4]: (node: any, children: React.ReactNode) => <h4>{children}</h4>,
      [BLOCKS.HEADING_5]: (node: any, children: React.ReactNode) => <h5>{children}</h5>,
      [BLOCKS.HEADING_6]: (node: any, children: React.ReactNode) => <h6>{children}</h6>,
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => <p>{children}</p>,
      [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => <ul>{children}</ul>,
      [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => <ol>{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => <li>{children}</li>,
      [BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => (
        <blockquote className="role-blockquote">
          {children}
        </blockquote>
      ),
      [BLOCKS.HR]: () => <hr />,
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const asset = node.data.target;
        let imageUrl = null;
        let altText = '';
        
        // Handle asset object structure
        if (asset?.fields?.file?.url) {
          imageUrl = `https:${asset.fields.file.url}`;
          altText = asset.fields.title || asset.fields.description || '';
        } 
        // Fallback: handle if target is already a URL string
        else if (typeof asset === 'string') {
          imageUrl = asset;
        }
        
        if (imageUrl) {
          return (
            <Image
              src={imageUrl}
              alt={altText}
              fluid
              className="my-3 rounded shadow-sm"
            />
          );
        }
        return null;
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
        const entry = node.data.target;
        if (!entry) return null;
        
        const contentType = entry.sys?.contentType?.sys?.id;
        const fields = entry.fields || {};
        
        // Handle embedded role entries
        if (contentType === 'roleTeams') {
          return (
            <div className="role-embedded-entry role-embedded-role">
              {fields.roleTitle && (
                <h4 className="role-embedded-title">
                  <Link to={`/role/${entry.id}`}>
                    {fields.roleTitle}
                  </Link>
                </h4>
              )}
            </div>
          );
        }
        
        // Generic fallback for other entry types
        return (
          <div className="role-embedded-entry">
            <p className="role-embedded-fallback">
              [Embedded content: {contentType || 'unknown'}]
            </p>
          </div>
        );
      },
      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
      [INLINES.ENTRY_HYPERLINK]: (node: any, children: React.ReactNode) => {
        const entry = node.data.target;
        if (!entry) return <span>{children}</span>;
        
        const contentType = entry.sys?.contentType?.sys?.id;
        const entryId = entry.id;
        
        if (contentType === 'roleTeams') {
          return (
            <Link to={`/role/${entryId}`} className="role-entry-link">
              {children}
            </Link>
          );
        }
        
        return <span>{children}</span>;
      },
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getContent();
        
        // Find the role by matching the ID from URL params
        const foundRole = data.find(
          (item: any) => 
            item.contentType === "roleTeams" && 
            String(item.id) === String(id)
        );
        
        setRole(foundRole || null);
      } catch (error) {
        console.error("Error fetching role data:", error);
        setRole(null);
      } finally {
        setLoading(false);
      }
      
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Spinner animation="border" role="status" style={{ color: 'white', width: '3rem', height: '3rem' }}>
          <span className="visually-hidden">{t('common.loading')}</span>
        </Spinner>
      </div>
    );
  }

  if (!role) {
    return (
      <Container className="text-center mt-5">
        <h2 className="text-white">Role not found</h2>
        <Button variant="primary" className="mt-3" onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </Container>
    );
  }

  const { roleTitle, roleDescLong, roleImage } = role.fields;

  return (
    <div className="role-detail-page">
      <NavComponent />
      
      <div className="role-detail-content">
        {/* Back Button */}
        <Container className="pt-4 pb-2">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
        </Container>

        {/* Hero Image */}
        {roleImage && (
          <div className="role-hero-image">
            <Image src={roleImage} fluid className="w-100" />
          </div>
        )}

        <Container>
          <Row className="justify-content-center">
            {/* Main Content */}
            <Col xs={12} lg={8} xl={7}>
              {/* Role Header */}
              <div className="role-header">
                <h1 className="role-title-main">{roleTitle}</h1>
              </div>

              {/* Role Description Body */}
              <div className="role-body">
                {roleDescLong && typeof roleDescLong === 'object' && roleDescLong.nodeType ? (
                  documentToReactComponents(roleDescLong, options)
                ) : (
                  <p>{roleDescLong}</p>
                )}
              </div>

              {/* Footer */}
              <div className="role-footer">
                <Link to="/" className="back-link-footer">
                  ← Back to Home
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
      <Footer />
    </div>
  );
};

export default RoleDetailPage;
