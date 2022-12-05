const API_KEY = '3aa2b05e0b056282256b25c9224ce1c2';
const API_BASE = 'https://api.themoviedb.org/3';

/* 
- originais netflix
- recomendados 
- top rated
- ação
- comédia
- terror
- romance
- documentarios
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: await basicFetch(`/discover/movie?with_genres=99language=pt-BR&api_key=${API_KEY}`),
            },

            {
                slug: 'upcoming',
                title: 'Recém Chegados',
                items: await basicFetch(`/movie/upcoming?api_key=3aa2b05e0b056282256b25c9224ce1c2&language=pt-BR&page=1`)
            },
            {
                slug: 'voteaverage',
                title: 'Mais votados',
                items: await basicFetch(`/movie/top_rated?sort_by=popularity.desc&api_key=3aa2b05e0b056282256b25c9224ce1c2&language=pt-BR&page=1`)
            },
        ]
    }

}
            // {
            //     slug: 'SIMILAR',
            //     title: 'SIMILARES',
            //     items: await basicFetch(`/movie/${movie_id}/similar?api_key=3aa2b05e0b056282256b25c9224ce1c2&language=pt-BR&page=1`),
            // },