import React from 'react';
import VideosList from '../../../widgets/VideosList/videosList';

const VideosMain = () => {
    return (
        <VideosList 
            type="card"
            title={false}
            loadmore={true}
            start={3}
            amount={3}
        />
    );
};

export default VideosMain;