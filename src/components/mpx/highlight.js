import React from 'react';

export default function Highlight({children, color}) {
    return (
        <span
            style={{
            backgroundColor: color,
                borderRadius: '2px',
                color: '#fff',
                padding: '0.2rem',
            }}>
            {children}
        </span>
        );
}

/*

Usage:

In MD files use the following:

import Highlight from '@site/src/components/mpx/highlight';

<Highlight color="#25c2a0">Highlight text example</Highlight>

*/