import React from 'react';
import QrCodeGen from '../components/QrCodeGen';

function App() {
  const data = 'https://www.youtube.com/watch?v=wqCz3-v3PHA'; // Replace with your data

  return (
    <div className="App">
      <QrCodeGen data={data} />
    </div>
  );
}

export default App;
