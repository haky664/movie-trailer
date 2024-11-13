// @flow
import {useState, useEffect} from 'react';
import {MovieItem} from './MovieItem';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import handleTrailer from "./handleTrailer";
import {ModelYouTube} from "./ModelYouTube";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 3000, min: 1500 },
        items: 10
    },
    desktop: {
        breakpoint: { max: 1500, min: 1200 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1200, min: 600 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 2
    }
};

export function MovieList({title, data}) {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [trailerID, setTrailerID] = useState('');

    return (
        <div className='text-back p-10 mb-5'>
            <h2 className='uppercase text-xl'>{title}</h2>
            <Carousel responsive={responsive} className='flex items-center space-x-4 mt-3 z-0'>
                {data.map((item) => (
                    <MovieItem key={item.id} id={item.id} poster_path={item.poster_path} title={item.title} handleTrailer={handleTrailer} setTrailerID={setTrailerID} setModalIsOpen={setModalIsOpen}/>
                ))}
            </Carousel>
            <ModelYouTube modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} trailerID={trailerID}/>
        </div>
    );
};