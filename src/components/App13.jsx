import React, { useState } from 'react';

function App13() {
  const [num, setNum] = useState(0);

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
      <h2>App13</h2>
      <h3>Assignment</h3>

      {/* Top boxes */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '20px' }}>
        <div style={box}>
          <b>Addition</b>
          <p>100 + {num} = {100 + Number(num)}</p>
        </div>
        <div style={box}>
          <b>Subtraction</b>
          <p>100 - {num} = {100 - Number(num)}</p>
        </div>
      </div>

      {/* Input in middle */}
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        style={{ padding: '10px', fontSize: '16px', width: '100px', marginBottom: '20px' }}
      />

      {/* Bottom boxes */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '20px' }}>
        <div style={box}>
          <b>Multiplication</b>
          <p>100 × {num} = {100 * Number(num)}</p>
        </div>
        <div style={box}>
          <b>Division</b>
          <p>100 ÷ {num || 1} = {(100 / (num || 1)).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

// Reusable box style
const box = {
  border: '2px solid black',
  padding: '20px',
  width: '200px',
  height: '100px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

export default App13;
