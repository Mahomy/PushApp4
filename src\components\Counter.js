import React from 'react';

const Counter = ({ value, onIncrement, onDecrement, onReset }) => {
  return (
    <div style={{
      background: '#f8f9fa',
      padding: '2rem',
      borderRadius: '15px',
      margin: '1rem 0',
      border: '2px solid #e9ecef'
    }}>
      <h2 style={{ color: '#2c3e50', marginBottom: '1rem' }}>
        Counter: <span style={{ color: '#3498db' }}>{value}</span>
      </h2>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button 
          onClick={onIncrement}
          style={{
            background: '#27ae60',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}
        >
          ➕ Increment
        </button>
        <button 
          onClick={onDecrement}
          style={{
            background: '#e74c3c',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}
        >
          ➖ Decrement
        </button>
        <button 
          onClick={onReset}
          style={{
            background: '#f39c12',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
