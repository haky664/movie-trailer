import axios from "axios";

export default async function handleTrailer(id, setTrailerID, setModalIsOpen) {

    setTrailerID('')
    try{
        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_KEY}`,
            }
        };
        axios
            .request(options)
            .then(res => {
                if(res.status === 200){
                    setTrailerID(res.data.results[0].key)
                    setModalIsOpen(true)
                }
            })
            .catch(err => alert('Khong co trailer') && console.error(err));
    }catch (e) {
        setModalIsOpen(false)
        console.error(e);
    }
}

