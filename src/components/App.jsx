import React from 'react';
import ReactDOM from 'react-dom';
import Body from './Body';
import Header from './Header';

function App() {
  return (
    <div>
      <style jsx global>{`
        * {
          font-family: monospace;
        }
      `}</style>
      <Header />
      <Body />
    </div>
  );
}

export default App;
