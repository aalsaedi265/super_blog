import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function Write() {

  const [value, setValue] = useState('');
  console.log(value)
  return (
    <div className='add'>
      <div className='content'>
        <input type='text' placeholder='Title'/>
        <div className='editorContainer'>
          <ReactQuill className='box_edit' theme="snow" value={value} onChange={setValue} />;
        </div>
      </div>
      <dvi className="menu">
        <div className="item_top">
          <h1>Publish</h1>
          <span>
            <b>status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{display:'none'}} type="file" id="file" />
          <label file="file" htmlFor='file'>UPLOAD IMG</label>
          <div className='buttons'>
            <button>Save as a Draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Caregory</h1>
          <input type="radio" name="category" value="art" id="art"/>
          <label htmlFor="art">Art</label><br></br>

          <input type="radio" name="category" value="science" id="science"/>
          <label htmlFor="science">Science</label><br></br>

          <input type="radio" name="category" value="technology" id="technology"/>
          <label htmlFor="technology">Technology</label><br></br>

          <input type="radio" name="category" value="cinema" id="cinema"/>
          <label htmlFor="cinema">Cinema</label><br></br>

          <input type="radio" name="category" value="design" id="design"/>
          <label htmlFor="dsign">Design</label><br></br>

          <input type="radio" name="category" value="food" id="food"/>
          <label htmlFor="food">Food</label><br></br>

        </div>
      </dvi>
    </div>
  )
}

export default Write