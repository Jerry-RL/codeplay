import React, { useEffect, useState } from 'react';
import MonacoEditor from '@monaco-editor/react';

export const Editor = () => {
  // useEffect(() => {
  //   if (code && code?.length >= 1)
  //     dispatch(update_editor_code({ type: tab, content: code }));
  // }, [code, dispatch, tab]);

  return (
    <MonacoEditor
      onChange={onChange}
      onMount={onMount}
      language={monacoLanguage}
      theme="vs-dark"
      options={options}
      className="h-full"
      // @ts-ignore
      // value={monacoInputValue.tabs[tab].data}
    />
  );
};
