import React from 'react';
import { marked } from "marked";

export const renderMarkdown = (markdownData: string) => {
  const rawMarkup = marked(markdownData, { sanitize: false });
  return { __html: rawMarkup };
};

export const getHighlights = (highlights: string[]): JSX.Element[] => {
  return highlights.map((item) => (
    <li key={item}>
      <span className="label">{item}</span>
    </li>
  ));
};