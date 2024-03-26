import React from 'react';
import styles from './styles.module.css';

const Video = ({ link }) => {
    return (
        <iframe
            src={link}
            className={styles.video}
            frameborder='0'
            allow='autoplay; encrypted-media'
            allowfullscreen
        />
        );
};

export default Video;

/*

Usage:

In MD files use the following:

import Video from '@site/src/components/video/video';

<Video link="Video_URL_Here"/>

*/