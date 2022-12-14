const api_key = '3aa2b05e0b056282256b25c9224ce1c2';

const basicFetch = async (endpoint) => {
    const req = await fetch(`https://api.themoviedb.org/3${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?api_key=${api_key}&with_networks=213&language=pt-BR`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?api_key=${api_key}&language=pt-BR`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/trending/all/week?api_key=${api_key}&language=pt-BR&page=5`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?api_key=${api_key}&with_genres=28&language=pt-BR&page=2`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?api_key=${api_key}&with_genres=35&language=pt-BR&page=9`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?language=pt-BR&api_key=${api_key}&with_genres=27&language=pt-BR&page=3`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?api_key=${api_key}&with_genres=10749&language=pt-BR&page=18`)
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: await basicFetch(`/discover/movie?api_key=${api_key}&with_genres=99&language=pt-BR`),
            },
            {
                slug: 'upcoming',
                title: 'Recém Chegados',
                items: await basicFetch(`/movie/upcoming?api_key=3aa2b05e0b056282256b25c9224ce1c2&language=pt-BR&page=1`)
            },
            {
                slug: 'voteaverage',
                title: 'Mais votados',
                items: await basicFetch(`/movie/top_rated?sort_by=popularity.desc&api_key=3aa2b05e0b056282256b25c9224ce1c2&language=pt-BR&page=3`)
            },
            {
                slug: 'constructor',
                title: 'Seriados sobre Construção',
                items: await basicFetch(`/discover/tv?api_key=${api_key}&with_networks=210&language=pt-BR`)
            },
            {
                slug: 'anime',
                title: 'Animes',
                items: await basicFetch(`/discover/tv?api_key=${api_key}&with_networks=1&language=pt-BR`)
            },
            {
                slug: 'desenho',
                title: 'Seriados Jovens',
                items: await basicFetch(`/discover/tv?api_key=${api_key}&with_networks=13&language=pt-BR`)
            },
            {
                slug: 'adult',
                title: 'Para Adultos',
                items: await basicFetch(`/discover/movie?api_key=${api_key}&with_genres=10749&language=pt-BR&page=1`)
            },
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${api_key}`);
                    break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${api_key}`);
                    break;
                default:
                    info = null;
                    break;
            }
        }
        return info;
    }
}