import React, { useEffect, useState } from 'react'
import Tmdb from '../../Tmdb'
import { useParams } from 'react-router-dom';
import './MovieSeries.css'

const MovieSeries = (item) => {

    const { type, id } = useParams();
    const [info, setInfo] = useState([]);

    let media_type = item.first_air_date ? "tv" : "movie";

    useEffect(() => {
        const getInfo = async () => {

            /* Pegando lista */
            let data = await Tmdb.getHomeList(id, type);
            setInfo(data);
            console.log(data);
        };
        getInfo();
    }, []);


    return (
        <div>
            <div>
                OI GENTE TESTANDO
            </div>
            <p>{info.title}</p>
            <img src={info.poster_path} alt="A" />
        </div>
    )
}

export default MovieSeries