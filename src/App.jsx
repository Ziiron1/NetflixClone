import React, { useEffect, useState } from 'react'
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow';


/* Style */
import './App.css'



function App() {

  const [movielist, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      /* Pegando lista */

      let list = await Tmdb.getHomeList();
      setMovieList(list);
      console.log(list);

    }

    loadAll();
  }, [])

  return (
    <div className='page'>
      <section className='lists'>
        {movielist.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  )
}

export default App
