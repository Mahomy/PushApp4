import React from 'react';

const Header = ({ title, subtitle }) => {
  return (
    <div style={{
      background: 'linear-gradient(45deg, #667eea, #764ba2)',
      color: 'white',
      padding: '2rem',
      borderRadius: '15px',
      marginBottom: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ margin: '0 0 0.5rem 0', fontSize: '2.5rem' }}>{title}</h1>
      <p style={{ margin: 0, fontSize: '1.2rem', opacity: 0.9 }}>{subtitle}</p>
    </div>
  );
};

export default Header;
