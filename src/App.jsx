import {Header} from "./components/Header";
import {Banner} from "./components/Banner";
import {MovieList} from "./components/MovieList";
import {useState, useEffect} from 'react';
import axios from 'axios';
import {MovieSearch} from "./components/MovieSearch.jsx";


function App() {

    const [moviesHot, setMoviesHot] = useState([]);
    const [moviesRated, setMoviesRated] = useState([]);
    const [movieSearch, setMovieSearch] = useState([]);

    // arrow function search
    const handleSearch = async (searchVal) => {
        try{
            const options = {
                method: 'GET',
                url: `https://api.themoviedb.org/3/search/movie?query=${searchVal}&include_adult=false&language=en-US&page=1`,
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_KEY}`,
                }
            };

            axios
                .request(options)
                .then(res => res.status === 200 && setMovieSearch(res.data.results))
                .catch(err => console.error(err));
        }catch (e) {
            console.error(e);
        }
    }
    // call api movie hot
    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/popular?language=vi-VN&page=1',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_KEY}`,
            }
        };
        axios
            .request(options)
            .then(res => res.status === 200 && setMoviesHot(res.data.results))
            .catch(err => console.error(err));
    }, [])
    // call api movie rate
    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/top_rated?language=vi-VN&page=1',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_KEY}`,
            }
        };

        axios
            .request(options)
            .then(res => res.status === 200 && setMoviesRated(res.data.results))
            .catch(err => console.error(err));
    }, [])

    return (
        <>
            <Header onSearch={handleSearch}></Header>
            <Banner></Banner>
            {movieSearch.length > 0 ? <MovieSearch title={'Kết quả tìm kiếm'} data={movieSearch}/> : (
                <>
                    <MovieList title={'phim hot'} data={moviesHot}></MovieList>
                    <MovieList title={'phim de cuu'} data={moviesRated}></MovieList>
                </>
            )}
        </>
    )
}

export default App
