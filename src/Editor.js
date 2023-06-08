import React from "react";
import "./index.css";
// import {Controlled as ControlledEditor} from 'react-codemirror-2'

function Editor(props){
    const { language, displayName, value, onchange} = props

    function handleChange(editor, data, value){
        onchange(value)
    }

    return(
        <div className="editor-container">
            <div className="editor-title">
                {displayName}
                <button>O/C</button>
            </div>
               
        </div>
    )
}

export default Editor;