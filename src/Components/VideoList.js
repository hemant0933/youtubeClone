import React from 'react';

const VideoList = ({videos, selectedVideo}) => {
    return (
    <div className='video-list'>
        {
            videos.map((video, index) => {
                return (
                        <div className='videoListItem' key={`div${index}`}  onClick={() =>{selectedVideo(video)}}>
                            <div className='listVideoImg'>
                                <img 
                                    className='thumbnailImg'
                                    key={`img${index}`} 
                                    src={video.snippet.thumbnails.medium.url} 
                                    alt="youtube"
                                />
                            </div>
                           <div>
                                <p className='videoListText'>
                                    {video.snippet.title}
                                </p>
                           </div>
                        </div>
                   
                    )
            })
        }
    </div>
  );
}

export default VideoList;
