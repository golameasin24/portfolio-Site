'use client';

import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';

// ✅ Prism imports
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';

// ✅ Prism টাইপ ডিক্লেয়ার
declare global {
  interface Window {
    Prism: typeof import('prismjs');
  }
}

type CodeEditorProps = {
  language?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
};

const CodeEditor: React.FC<CodeEditorProps> = ({
  language = 'Frontend',
  defaultValue = `const coder = {
  name: 'Golam Easin',
  skills: ['Javascript', 'React', 'NextJS', 'Express', 'MongoDB', 'Tailwind CSS', 'Firebase', 'Figma'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }};`,
  onChange,
}) => {
  const [code, setCode] = useState(defaultValue);

  const handleChange = (newCode: string) => {
    const wrapped = `\`\`\`\n${newCode}\n\`\`\``;
    setCode(wrapped);
    onChange?.(wrapped);
  };

  return (
    <div className="flex items-center justify-center p-5 sm:p-10">
      <div
        className="rounded-2xl overflow-hidden shadow-2xl border  bg-[#1A173C] text-white  w-full max-w-2xl sm:max-w-xl"
        style={{ height: '70vh' }}
      >
        {/* Header bar */}
        <div className="flex items-center gap-2 px-4 py-2 bg-[#1A173C]">
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          <span className="w-3 h-3 bg-yellow-400 rounded-full" />
          <span className="w-3 h-3 bg-green-500 rounded-full" />
          <span className="ml-2 text-sm font-medium tracking-wide text-white opacity-90">
            {language.toUpperCase()} Developer
          </span>
        </div>

        {/* Editor area */}
        <Editor
          value={code}
          onValueChange={handleChange}
          highlight={(code) => {
            if (typeof window !== 'undefined' && window.Prism) {
              return window.Prism.highlight(
                code,
                window.Prism.languages[language] || window.Prism.languages.jsx,
                language
              );
            }
            return code;
          }}
          padding={16}
          textareaId="codeArea"
          className="font-mono text-sm leading-6 outline-none h-[calc(70vh-48px)] overflow-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900"
          style={{
            color: '#e2e8f0',
            fontFamily:
              'ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Fira Code", monospace',
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
