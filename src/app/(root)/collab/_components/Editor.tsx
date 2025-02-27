"use client";

import * as Y from "yjs";
import { getYjsProviderForRoom } from "@liveblocks/yjs";
import { useRoom } from "@liveblocks/react";
import { useCallback, useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { MonacoBinding } from "y-monaco";
import { Awareness } from "y-protocols/awareness";

export function CollaborativeEditor() {
  const [editorRef, setEditorRef] = useState<editor.IStandaloneCodeEditor | null>(null);
  const room = useRoom();
  const yProvider = getYjsProviderForRoom(room);

  // Detect system theme
  const [theme, setTheme] = useState("vs-light");
  useEffect(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(darkMode ? "vs-dark" : "vs-light");
  }, []);

  useEffect(() => {
    if (!editorRef) return;

    let binding: MonacoBinding;
    const yDoc = yProvider.getYDoc();
    const yText = yDoc.getText("monaco");
    
    if (editorRef.getModel()) {
      binding = new MonacoBinding(
        yText,
        editorRef.getModel() as editor.ITextModel,
        new Set([editorRef]),
        yProvider.awareness as Awareness
      );
    }
    
    return () => {
      binding?.destroy();
    };
  }, [editorRef, yProvider]);

  // Debounce editor updates to improve performance
  const debounce = (func: Function, delay: number) => {
    let timer: NodeJS.Timeout;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const handleOnMount = useCallback((editorInstance: editor.IStandaloneCodeEditor) => {
    setEditorRef(editorInstance);
  }, []);

  return (
    <Editor
      onMount={handleOnMount}
      height="100vh"
      width="100vw"
      theme={theme}
      defaultLanguage="typescript"
      defaultValue=""
      options={{
        tabSize: 2,
        cursorBlinking: "smooth",
        smoothScrolling: true,
        minimap: { enabled: true },
      }}
    />
  );
}
