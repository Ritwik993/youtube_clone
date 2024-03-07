import React from 'react'

const SearchVideoCard = ({info}) => {
  return (
    <div className='flex m-4 gap-4'>
        <img src={info.snippet.thumbnails.medium.url} alt="" className='rounded-lg'/>
        <div>
            <h1 className='font-bold'>{info.snippet.title}</h1>
            <p className='text-gray-600 p-1'>{info.snippet.channelTitle}</p>
            <p className=' text-[15px] text-gray-600 p-1'>{info.snippet.description}</p>
        </div>
    </div>
  )
}

export default SearchVideoCard;