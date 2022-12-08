import React, { useEffect, useState } from 'react'
import getHomeList from '../../Tmdb'
import { useParams } from 'react-router-dom';
import './MovieSeries.css'

const MovieSeries = (item) => {

    const [info, setInfo] = useState([]);

    let media_type = item.first_air_date ? "tv" : "movie";

    useEffect(() => {
        const getInfo = async () => {

            /* Pegando lista */
            let data = await getHomeList();
            setInfo(data);
            console.log(data);
        };
        getInfo();
    }, []);


    return (
        <div>
            <div>
                Sem dados suficientes
                {info.title}
            </div>
        </div>
    )
}

export default MovieSeries