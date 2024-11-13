// @flow
import {useState, useEffect} from 'react';
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 10
    },
    desktop: {
        breakpoint: {max: 3000, min: 1200},
        items: 7
    },
    tablet: {
        breakpoint: {max: 1200, min: 600},
        items: 3
    },
    mobile: {
        breakpoint: {max: 600, min: 0},
        items: 2
    }
};

export function MovieItem({id, poster_path, title, handleTrailer, setTrailerID, setModalIsOpen}) {
    return (
        <div className='w-[200px] h-[300px] relative group' onClick={() => handleTrailer(id, setTrailerID, setModalIsOpen)}>
            <div
                className='group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer'>
                <div className='absolute top-0 left-0 w-full h-full bg-black/30'/>
                <img className='w-full h-full object-cover'
                     src={`${import.meta.env.VITE_IMG_URL}/${poster_path}`}
                     alt={`${title}` || 'null'}/>
                <div className='absolute bottom-2 w-full text-center bg-black/60'>
                    <p className='uppercase text-md truncate mx-3 text-yellow-400'>{title}</p>
                </div>
            </div>
        </div>
    );
};