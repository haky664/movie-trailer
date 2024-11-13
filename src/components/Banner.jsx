// @flow
import {useState, useEffect} from 'react';
import {BannerItem} from "./BannerItem";
import axios from 'axios';
import {Carousel} from "flowbite-react";

export function Banner() {

    const [banners, setBanners] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_KEY}`,
            }
        };

        axios
            .request(options)
            .then(res => res.status === 200 && setBanners(res.data.results))
            .catch(err => console.error(err));

    }, [])
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-11/12 mx-auto mt-4">
            <Carousel>
                {banners.slice(0,3).map((banner) => (
                    <BannerItem key={banner.id} overview={banner.overview} vote_average={banner.vote_average} poster_path={banner.poster_path} original_title={banner.original_title} />
                ))}
            </Carousel>
        </div>
    );
};