import React from 'react';

const Clock = ({ time }) => {
  return (
    <div style={{
      background: '#3498db',
      color: 'white',
      padding: '1.5rem',
      borderRadius: '10px',
      margin: '1rem 0',
      textAlign: 'center'
    }}>
      <h2 style={{ margin: 0, fontSize: '1.8rem' }}>
        🕐 Current Time: {time}
      </h2>
    </div>
  );
};

export default Clock;
