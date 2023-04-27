import React from 'react';
import youtubeIcon from '../Assets/youtube-icon.png';
// AiOutlineMenu ,AiOutlineSearch , AiOutlineBell
const TopRightSection = () => {
  return (
    <div className='icon-container'>
      <img src={youtubeIcon} className='youtubeImg' alt='youtubeIcon'/>
    </div>
  );
}

export default TopRightSection;
