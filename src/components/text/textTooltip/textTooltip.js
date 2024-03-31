import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import tooltipInfoMap from './tooltipInfoMap';

const TextTooltip = ({ text, info: overrideInfo }) => {
    const [hover, setHover] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const defaultInfo = tooltipInfoMap[text.toLowerCase()];
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

    // This will just shift the tooltip box a given amount based off how far over to the right the mouse cursor is.
    // I can imagine there is a proper way to do this but I am not a web developer so ¯\_(ツ)_/¯
    let leftPosition = position.x + 20 + 'px';
    if (typeof window !== 'undefined') {
        if (position.x + 20 > window.innerWidth - 300) {
            let ShiftAmount = position.x / window.innerWidth;
            leftPosition = position.x - (200 * ShiftAmount) + 'px';
        }
    }

    const hoverBoxStyle = {
        position: 'fixed',
        top: position.y + 20 + 'px',
        left: leftPosition,
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