import React from 'react';

const Highlight = ({ children, color }) => {
    return (
        <span style={{ backgroundColor: color, borderRadius: '2px', color: '#fff', padding: '0.2rem' }}>
            { children }
        </span>
        );
};

export default Highlight;

/*

Usage:

In MD files use the following:

import Highlight from '@site/src/components/text/highlight';

<Highlight color="#25c2a0">Highlight text example</Highlight>

*/