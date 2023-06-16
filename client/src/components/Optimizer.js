import React, { useState } from 'react';
import FileCode from './FileCode';
import ManualInput from './ManualInput';
import "./Optimizer.css"

function MainComponent() {
  const [showComponent, setShowComponent] = useState('');

  return (
    <div className='Layout'>
      <button onClick={() => setShowComponent('form')}>Form</button>
      <button onClick={() => setShowComponent('file')}>File</button>

      {showComponent === 'form' && <ManualInput />}
      {showComponent === 'file' && <FileCode />}
    </div>
  );
}

export default MainComponent;