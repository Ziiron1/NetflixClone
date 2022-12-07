// import React from 'react'
// import { getMovieInfo } from '../../Tmdb'
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const MovieSeries = () => {

//     const { type, id } = useParams();
//     const [background, setBackground] = useState("");
//     const [info, setInfo] = useState({});

//     useEffect(() => {
//         const getInfo = async () => {
//             let data = await getMovieInfo(id, type)
//             setBackground(data.backdrop_path)
//             setInfo(data)
//         }
//         getInfo()
//     }, [id, type])

//     return (
//         <div>
//             aaaa
//         </div>
//     )
// };

// export default MovieSeries;