import React,{useState,useEffect} from 'react';
import youtube from '../src/api/youtube';
import SearchBar from './Components/SearchBar';
import VideoDetails from './Components/VideoDetails';
import VideoList from './Components/VideoList';
import './App.css';
import TopRightSection from './Components/TopRightSection';
import TopLeftSection from './Components/TopLeftSection';
import {AiOutlineMenu} from 'react-icons/ai';

const App = () => {
    
    let [video, setVideo] = useState([]);
    let [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        youtube.get('/search',{
            params:{
                q:'React Tutorials',
                type: 'video'
            }
        })
        .then(response => {
            // console.log(response.data.items)
            setVideo(response.data.items)
            setSelectedVideo(response.data.items[0])
            return ;
        })
        .catch(err => console.log(err))
    },[])
 
  
return (
    <div className='main-wrapper'>
        <div className='header-wrapper'>
            <div className='Navcontainer'>
               <AiOutlineMenu className='humburgerIcon'/>
               <TopRightSection />
            </div>
            <div className='searchWrapper'> 
                <SearchBar 
                    addContent={setVideo} 
                    selectedVideo={setSelectedVideo} 
                />
            </div>
            <div>
                <TopLeftSection/>
            </div>
        </div>
       <div className='MainSection'>
           <div className='videoPlayer'>
             <VideoDetails video={selectedVideo}/>
           </div>
           <div className='videoListWrapper'>
              <VideoList videos={video} selectedVideo={setSelectedVideo}/>
           </div>
           
       </div>
       
           
      
    </div>
  );
}

export default App;
