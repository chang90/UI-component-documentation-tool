
import MonacoEditor, { OnChange } from '@monaco-editor/react';
import React, { useRef } from 'react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
import './code-editor.css';

interface CodeEditorProps {
  initialValue: string;
  onChange: OnChange;
}
const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {

  const editorRef = useRef<any>();
  const onFormatClick = () => {
    const unformatted = editorRef.current.getModel().getValue();
    console.log(unformatted)
    const formatted = prettier.format(unformatted, {
      parser: 'babel',
      plugins: [parser],
      useTabs: false,
      semi: true,
      singleQuote: true
    }).replace(/\n$/, '');
    editorRef.current.setValue(formatted);
  }
  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor; 
  }

  return (
    <div className="editor-wrapper">
      <button onClick={ onFormatClick } className="button button-format is-primary is-small">Format</button>
      <MonacoEditor
        onChange={onChange}
        value={initialValue}
        onMount={handleEditorDidMount}
        height="500px"
        options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2
        }}
        theme="vs-dark"
        language="javascript" />
    </div>
    )
};

export default CodeEditor;
