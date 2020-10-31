import React from 'react';
import './VideoImagePreview.scss';

export const VideoImagePreview = (props) => {
    return (
        props.videoPosterUrl ?
            <div
                className={`video-preview ${ props.previewOn ? "previewOn" : ""}`}
                style={{ backgroundImage : `url('${ ( process.env.PUBLIC_URL + props.videoPosterUrl ) }')` }}>
            </div>
        : null
    )
}


export default VideoImagePreview;