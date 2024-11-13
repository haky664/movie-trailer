// @flow
import {useState, useEffect} from 'react';
import {MovieItem} from "./MovieItem";
import handleTrailer from "./handleTrailer";
import {ModelYouTube} from "./ModelYouTube.jsx";

export function MovieSearch({title, data}) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [trailerID, setTrailerID] = useState('');

    return (
        <div className='text-back p-10 mb-5'>
            <h2 className='uppercase text-xl'>{title}</h2>
            <div className='mt-3 grid sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:gap-6 xl:grid-cols-8 '>
                {data.map((item) => (
                    <MovieItem key={item.id} id={item.id} poster_path={item.poster_path} title={item.title} handleTrailer={handleTrailer} setTrailerID={setTrailerID} setModalIsOpen={setModalIsOpen}/>
                ))}
            </div>
            <ModelYouTube modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} trailerID={trailerID}/>
        </div>
    );
};