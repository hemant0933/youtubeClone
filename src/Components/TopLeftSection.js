import React from 'react';
import { AiOutlineBell} from 'react-icons/ai';
import {BsCameraVideo} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
const TopLeftSection = () => {
  return (
    <div className='right'>
    <div className='icons'>
        <BsCameraVideo/>
    </div>
    <div className='icons'>
        <AiOutlineBell/>
    </div>
    <div className='icons'>
        <CgProfile/>
    </div>
    </div>
  );
}

export default TopLeftSection;
