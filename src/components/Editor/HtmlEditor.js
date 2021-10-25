import React from 'react'
import AceEditor from 'react-ace'

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-min-noconflict/ext-language_tools";

export default function HtmlEditor() {
    return (
        <AceEditor
            placeholder="Write your HTML codes here!"
            mode = "html"
            theme = "monokai" 
            name = "editor_html"
            fontSize = "16"
            height = {"100%"}
            width = {"100%"}
            showPrintMargin = {false}
            showGutter = {false}
            highlightActiveLine = {true}
            setOptions = {{
                enableBasicAutocompletion : true,
                enableLiveAutocompletion : true,
                enableSnippets : true,
                tabSize : 2
            }}
        />
    )
}
