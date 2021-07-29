import React, { useEffect, useState } from 'react';
import MonacoEditor from '@monaco-editor/react';
import { useEditor } from '../../hooks/useEditor';

let defaultContent = `

//jsx模版
import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello ReactTree</h1>
      <h2>You clicked {count} times!</h2>

      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);`;

export const Editor = () => {
  const [value, setValue] = useState(defaultContent);
  const onChange = (val) => {
    setValue(val);
  };
  return (
    <MonacoEditor
      onChange={onChange}
      // onMount={onMount}
      language={'javascript'}
      theme="vs-dark"
      // options={options}
      className="h-full"
      // @ts-ignore
      value={value}
    />
  );
};
