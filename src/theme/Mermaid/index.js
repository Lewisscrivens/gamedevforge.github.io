import React from 'react';
import Mermaid from '@theme-original/Mermaid';

// Swizzled mermaid so we can center diagrams by default via a Div...
export default function MermaidWrapper(props) {
  return (
    <div align="center">
      <Mermaid {...props} />
    </div>
  );
}