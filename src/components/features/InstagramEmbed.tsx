import React from 'react';

interface InstagramEmbedProps {
  url: string;
  title?: string;
}

const normalizeEmbedUrl = (url: string): string => {
  if (!url) return '';
  const trimmed = url.endsWith('/') ? url : `${url}/`;
  return trimmed.includes('embed') ? trimmed : `${trimmed}embed`;
};

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ url, title }) => {
  const embedUrl = normalizeEmbedUrl(url);

  if (!embedUrl) {
    return null;
  }

  return (
    <div className="instagram-embed-wrapper">
      <iframe
        src={embedUrl}
        title={title || 'Instagram embed'}
        allow="autoplay; clipboard-write"
        allowTransparency
        loading="lazy"
        frameBorder={0}
        scrolling="no"
      />
    </div>
  );
};

export default InstagramEmbed;
