import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import tooltipInfoMap from './tooltipInfoMap';

const TextTooltip = ({ text, info: overrideInfo }) => {
    const [hover, setHover] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const defaultInfo = tooltipInfoMap[text];
    const info = overrideInfo || defaultInfo || 'Missing tool-tip!';
    
    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };
    
    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    let shiftBox = false;
    if (typeof window !== 'undefined') {
        // Shift the box if the opened tooltip box is within 300 pixels of the max right border and is not to the left side of the screen.
        shiftBox = position.x + 20 > window.innerWidth - 300 && position.x > (window.innerWidth / 2);
    }

    const hoverBoxStyle = {
        position: 'fixed',
        top: position.y + 20 + 'px',
        left: shiftBox ? position.x - 200 + 'px': position.x + 20 + 'px',
    };
    
    return (
        <span className={styles.tooltipContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>
            <code className={styles.textBox}>{text}</code>
            {hover && <div className={styles.tooltipBox} style ={hoverBoxStyle}>{info}</div>}
        </span>
        );
};

export default TextTooltip;

/*

Usage:

In MD files use the following:

import TextTooltip from '@site/src/components/text/textTooltip/textTooltip';

<TextTooltip text="Example" info="This is an example tooltip." />

or alternatively use
<TextTooltip text="Example"/>

and make sure to add a mapping from Example to an info description in the tootipInfoMap var.

*/