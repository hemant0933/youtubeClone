import React,{useState} from 'react';
import youtube from '../api/youtube';
import {AiOutlineSearch} from 'react-icons/ai';

const SearchBar = ({addContent,selectVideo}) => {
 
    let [searchTerm, setSearchTerm] = useState('')

    function getVideos(){
        youtube.get('/search', {
            params:{
                q: searchTerm,
                type:'video'
            }
        }).then(response => {
            // console.log(response.data.items);
            addContent(response.data.items)
            selectVideo(response.data.items[0])
            return ;
        })
        .catch(err => console.log(err))
    }
 
    return (
     <div style={{display:'flex',width:'100%', alignItems:'center',justifyContent:'center'}}> 
        <div className="input-group">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Search"
                style={{outlineColor:'none',borderRadius:'50px 0px 0px 50px'}}
                onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <button 
                    className="btn btn-outline-dark" 
                    style={{display:'flex',width:'64px',height:'40px',alignItems:'center',justifyContent:'center',borderRadius:'0px 50px 50px 0px'}} 
                    type="button" id="button-addon2"
                    onClick={getVideos} > 
                    <AiOutlineSearch style={{width:'24px',height:'24px'}}/> 
                </button>
        </div>
        </div>
    
  );
}

export default SearchBar;
