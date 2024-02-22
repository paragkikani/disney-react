import React, { useEffect, useRef, useState } from 'react'
import GloblalApi from '../Services/GloblalApi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const displayWidth = window.innerWidth;

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
function Slider() {

    const [movieList, setMovieList] = useState([]);
    const elementRefs = useRef();

    useEffect(() => {
        getTrandingMovies();
    }, [])

    const getTrandingMovies = () => {
        GloblalApi.getTrandingVideo.then(resp => {
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        });
    }

    const sliderRight = (element) => {
        element.scrollLeft += displayWidth -125;
    }
    const sliderLeft = (element) => {
        element.scrollLeft -= displayWidth - 125;
    }
    return (
        <div>
            <HiChevronLeft onClick={() => sliderLeft(elementRefs.current)} 
            className='hidden md:block text-white mt-[170px] absolute size-[30px] ml-3 cursor-pointer' />
            <HiChevronRight onClick={() => sliderRight(elementRefs.current)} 
            className='hidden md:block text-white mt-[170px] absolute size-[30px] ml-3 cursor-pointer right-2' />
            <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRefs}>
                {movieList.map((x, index) => (
                    <img key={index.toString()}
                     className='min-w-full md:h-[310px] object-cover object-left-top rounded-md mr-5
                     hover:border-[4px] border-gray-400 transition-all duration-150 ease-linear'
                        src={IMAGE_BASE_URL + x.backdrop_path} alt={index} />
                ))}
            </div>
        </div>
    )
}

export default Slider