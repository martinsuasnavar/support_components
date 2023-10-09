import React from 'react';

const MyVideo = ({src, width, height}) => {
    return(
        <video controls width={width} height={height}>
        <source src={src} type="video/mp4"/>
            MP4 not supported by your browser.
        </video>
    );
}

export default MyVideo;