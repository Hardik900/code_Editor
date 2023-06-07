import logo from './logo.svg';
import './App.css';
import Editor from './Editor';
import React, {useState, useEffect} from 'react';

function App() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  return (
    <>
      <h1>Hello</h1>
      <div className='pane top-pane'>
        <Editor 
          language = "xml"
          displayname = "HTML"
          value = {html}
          onchange = {setHtml}
        />
        <Editor 
          language = "css"
          displayname = "CSS"
          value = {css}
          onchange = {setCss}
        />
        <Editor 
          language = "javascript"
          displayname = "JS"
          value = {js}
          onchange = {setJs}
        />

      </div>
      <div className='pane'>
        <iframe
          title=''
          frameBorder="0"
          width = "100%"
          height = "100%"
        />
      </div>
    </>

  );
}

export default App;
