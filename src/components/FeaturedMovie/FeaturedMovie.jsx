import React from 'react'
import './FeaturedMovie.css'
import Svg from '../Header/assets/Info.svg'

export default ({ item }) => {

    console.log(item);

    let description = item.overview;
    if (description.length > 250) {
        description = description.substring(0, 250) + '...'
    }

    let media_type = item.first_air_date ? "tv" : 'movie';

    let Firstdate = new Date(item.first_air_date)

    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    const str = `${item.vote_average}`
    const strNum = str.replace(/[^0-9]/g, '')
    let Classificação = (strNum.substr(0, 2));
    console.log(strNum)

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className='featured--horizontal'>
                    <div className="featured--name">{item.original_name}</div>
                    <div className='featured--info'>
                        <div className="featured--points">{Classificação}% relevante</div>
                        <div className="featured--year">{Firstdate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className='featured--description'>{item.overview}</div>
                    <div className='featured--buttons'>
                        <a href={item.homepage} className="featured--watchbutton">▶ Assistir</a>

                        <a href={`/list/add/${item.id}`} className="featured--mylistbutton">+ Minha Lista</a>

                        <a href={`/info/${media_type}/${item.id}`} className="featured--moreinfobutton">
                            <img src={Svg} width="18px" alt="" style={{ color: "white" }} /> Mais informações
                        </a>
                    </div>
                    <div className="featured--genres"><strong>Gêneros: </strong>{genres.join(', ')}</div>
                </div>
            </div>
        </section>
    );
}