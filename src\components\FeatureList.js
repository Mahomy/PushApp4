import React from 'react';

const FeatureList = () => {
  const features = [
    'React Hooks (useState, useEffect)',
    'Component-based architecture',
    'Real-time clock updates',
    'Interactive counter functionality',
    'Responsive design',
    'Modern CSS styling',
    'Modular component structure',
    'GitHub integration via Python'
  ];

  return (
    <div style={{
      background: '#ecf0f1',
      padding: '2rem',
      borderRadius: '15px',
      margin: '1rem 0',
      textAlign: 'left'
    }}>
      <h3 style={{ color: '#2c3e50', textAlign: 'center', marginBottom: '1rem' }}>
        ✨ Features
      </h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {features.map((feature, index) => (
          <li key={index} style={{
            padding: '0.5rem 0',
            color: '#34495e',
            position: 'relative',
            paddingLeft: '2rem'
          }}>
            <span style={{ position: 'absolute', left: 0 }}>🚀</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureList;
