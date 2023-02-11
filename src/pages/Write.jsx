import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function Write() {

  const [value, setValue] = useState('');

  return (
    <div className='add'>
      <div className='content'>
        <input type='text' placeholder='Title'/>
        <div className='editorContainer'>
          <ReactQuill theme="snow" value={value} onChange={setValue} />;
        </div>
      </div>
      <dvi className="menu">
        <div className="item">i1</div>
        <div className="item">i2</div>
      </dvi>
    </div>
  )
}

export default Write