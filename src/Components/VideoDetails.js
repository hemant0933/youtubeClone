import React from 'react';

const VideoDetails = ({video}) => {
  
  if(!video){
    return <div>Loading...</div>
  }

  let videoId = video.id.videoId;
  let videosrc = `https://www.youtube.com/embed/${videoId}`
  let videoTitle = video.snippet.title;
  let videoDescription = video.snippet.description;
  let videoChannel = video.snippet.channelTitle; 

    return (
    <div style={{padding:'24px 24px 0px 0px'}}>
        {
            <div className='VideoContainer'>
              <iframe width="740" height="380" src={videosrc} title="YouTube video player"></iframe>
            </div> 
        }
         <div className='videoDescp'>
              <p 
              style={{fontSize: '2rem',
                      lineHeight: '0.8rem',
                      fontWeight: '600',
                      whiteSpace:'normal'}}
                      >
                          {videoTitle}
                      </p>
              <p>{videoDescription} </p>
              <p>Channel : <b>{videoChannel}</b></p>
         </div>
    </div>
  );
}

export default VideoDetails;
