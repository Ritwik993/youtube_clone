import React from 'react'
import { value_converter } from '../utils/constant';
import moment from 'moment';

const VideoCard = ({info}) => {
    const {snippet,statistics}=info;

  return (
    <div className='w-72'>
        <img src={snippet.thumbnails.medium.url} alt="thumbnail" className='w-full rounded-lg'/>
        <p className='font-bold'>{snippet.title}</p>
        <p className=' text-gray-500'>{snippet.channelTitle}</p>
        <div className='text-gray-500'><span>{value_converter(statistics.viewCount)} views</span>
         <span className='m-2'>&bull; {moment(snippet.publishedAt).fromNow()}</span>
        </div>   
    </div>
  )
}

export default VideoCard;