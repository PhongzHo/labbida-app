import React from 'react'
import { ctrinh1 } from '../assets';

function NewsGrid() {
    return (
        <div className='columns-2 border-b-2 border-r-2 border-white'>
            <img src={ctrinh1} className='p-2' alt='news-ctrinh-trung-thuong'/>
            <div className='text-white'>
                Info news is here!!!
            </div>
        </div>
    );
};


const News = () => {
  return (
    <div className='bg-black'>
        <div className='border rounded border-white p-2 mx-6 justify-center relative flex cursor-default text-white text-3xl font-semibold'>
        Tin tức và Sự Kiện
        </div>
        <div className='grid grid-cols-2 p-6 '>
            <NewsGrid />
            <NewsGrid />
            <NewsGrid />
            <NewsGrid />
        </div>
    </div>
    
  )
}

export default News
