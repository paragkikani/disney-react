import React, { useEffect, useState ,useRef} from 'react'
import GloblalApi from '../Services/GloblalApi';
import MovieCard from './MovieCard';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
const displayWidth = window.innerWidth;

function MovieList({ genreId }) {
    const elementRefs = useRef();
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        getMovieListById();
    }, []);

    const getMovieListById = () => {
        GloblalApi.getMovieByGenreId(genreId).then(resp => {
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        })
    }
    const sliderRight = (element) => {
        element.scrollLeft += displayWidth -250;
    }
    const sliderLeft = (element) => {
        element.scrollLeft -= displayWidth - 250;
    }
    return (
        <div className='relative'>
            <HiChevronLeft onClick={() => sliderLeft(elementRefs.current)}
                className='hidden md:block text-white mt-[170px] absolute size-[30px] cursor-pointer' />
            <HiChevronRight onClick={() => sliderRight(elementRefs.current)}
                className='hidden md:block text-white mt-[170px] absolute size-[30px] cursor-pointer right-2' />
            <div  ref={elementRefs} className='flex overflow-x-auto gap-8 scrollbar-hide py-5 scroll-smooth'>{movieList.map((x, index) => (<MovieCard movie={x} />))}</div>
        </div>
    )
}

export default MovieList