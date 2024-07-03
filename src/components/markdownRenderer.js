import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import dynamic from 'next/dynamic';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
const SyntaxHighlighter = dynamic(() => import('react-syntax-highlighter').then(mod => mod.Prism), { ssr: false });
const vs = dynamic(() => import('react-syntax-highlighter/dist/esm/styles/prism').then(mod => mod.vs), { ssr: false });

const customDarcula = {
  ...vs,
  'pre[class*="language-"]': {
    ...vs['pre[class*="language-"]'],
    background: '#2d2d2d', // Темный фон
  },
  'code[class*="language-"]': {
    ...vs['code[class*="language-"]'],
    background: '#2d2d2d', // Темный фон для кода
    color: '#f8f8f2', // Цвет текста
      // background-color:#EEEEEE;
    fontFamily: "Consolas, Monaco,Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New"
  },
  
};

const CodeBlockContainer = styled.div`
  position: relative;
  box-shadow: 0px 5px 22px rgba(0, 0, 0, 0.04), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.03);
  padding: 1rem;
  border-radius: 0.5rem;
  overflow: auto;
`;

const CopyButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: #6363ed;
  color: white;
  border: none;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  &:hover {
    background: #6363edbd;
  }
`;


export function MarkdownRenderer({children}) {
  return (
    <ReactMarkdown
    components={{
      code({ node, inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || '');
        const codeContent = String(children).replace(/\n$/, '');
        return !inline && match ? (
          <CodeBlockContainer>
            <CopyToClipboard text={codeContent}>
              <CopyButton>Скопировать</CopyButton>
            </CopyToClipboard>
            <SyntaxHighlighter style={vs} language={"javascript"} PreTag="div" {...props}>
              {codeContent}
            </SyntaxHighlighter>
          </CodeBlockContainer>
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        );
      },
      strong({ children }) {
        return <strong style={{ color: 'hotpink' }}>{children}</strong>;
      },
      h1({ children }) {
        return <h1 style={{ color: 'hotpink' }}>{children}</h1>;
      },
      h2({ children }) {
        return <h2 style={{ color: 'hotpink' }}>{children}</h2>;
      },
    }}
  >
    {children}
  </ReactMarkdown>
  );
}