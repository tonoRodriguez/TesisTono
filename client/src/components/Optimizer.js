import React, { useState } from 'react';
import FileCode from './FileCode';
import ManualInput from './ManualInput';
import "./Optimizer.css"

function MainComponent() {
  const [showComponent, setShowComponent] = useState('');
/// I should change Form for File
  return (
    <div className='Layout'>
      <div className='BOpt'>
        <button className='buttonFF' onClick={() => setShowComponent('file')}>Form</button>
        <button className='buttonFF' onClick={() => setShowComponent('file')}>File</button>
      </div>
      {showComponent === 'form' && <ManualInput />}
      {showComponent === 'file' && <FileCode />}
    </div>
  );
}

export default MainComponent;