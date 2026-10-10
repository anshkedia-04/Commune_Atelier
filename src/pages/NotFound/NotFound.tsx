import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div style={{
      paddingTop: 'calc(var(--header-height) + 5rem)',
      paddingBottom: '8rem',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      backgroundColor: 'var(--bg-primary)'
    }}>
      <div className="container" style={{ maxWidth: '640px' }}>
        <div className="eyebrow-tag" style={{ justifyContent: 'center' }}>
          Error 404 • Spatial Anomaly
        </div>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(3.5rem, 8vw, 6rem)',
          fontWeight: 300,
          color: 'var(--text-primary)',
          lineHeight: 1,
          margin: '0.5rem 0 1.5rem 0'
        }}>
          Silhouette <em>Not Found</em>
        </h1>
        <p style={{
          fontSize: '1.05rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
          marginBottom: '2.5rem'
        }}>
          The room coordinate you are seeking does not exist in our digital showroom archive or may have been relocated.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            <ArrowLeft size={16} />
            <span>Return to Grand Atelier</span>
          </Link>
          <Link to="/collections" className="btn btn-outline">
            <Compass size={16} />
            <span>Browse Collections</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
