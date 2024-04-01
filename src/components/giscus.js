import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
    const { colorMode } = useColorMode();

    return (
        <Giscus    
            repo="lewisscrivens/gamedevforge.github.io"
            repoId="R_kgDOIVqhTg"
            category="General"
            categoryId="DIC_kwDOIVqhTs4CSSET" 
            mapping="url"                        // Important! To map comments to URL
            term="Welcome to @giscus/react component!"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="1"
            inputPosition="top"
            theme={colorMode}
            lang="en"
            loading="lazy"
            crossorigin="anonymous"
            async
        />
        );
}

/*

Taken from:
https://dev.to/m19v/how-to-add-giscus-comments-to-docusaurus-439h

*/