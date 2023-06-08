import logo from './logo.svg';
import './App.css';
import "./index.css";
import Editor from './Editor';
import React, {useState, useEffect} from 'react';

function App() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setSrcDoc( `
        <html>
          <body>${html}</body>
          <body>${css}</body>
          <body>${js}</body>
        </html>
      `)
    },260)

    return () => clearTimeout(timeout)
  },[html, css, js])

  

  return (
    <>
      <h1>Hello Hardik saini</h1>
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
        srcDoc={srcDoc}
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
