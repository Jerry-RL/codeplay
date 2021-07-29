import React from 'react';
import Split from '@uiw/react-split';
import { Editor } from '../CodeEditor';
const Container = () => (
  <Split
    style={{ height: '80%', border: '1px solid #d5d5d5', borderRadius: 3 }}
  >
    <div style={{ width: '50%', minWidth: 100 }}>
      <Editor />
    </div>
    <div style={{ width: '50%', minWidth: 100 }}>
      <iframe
        srcDoc="<div>hrml content</div>"
        style={{ width: '100%', height: '100%' }}
        title="Code Preview"
        sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts"
      />
    </div>
  </Split>
);

export default Container;
