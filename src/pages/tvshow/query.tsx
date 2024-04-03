export const fetchTvShowDetails = async (tvShowId: string) => {
    const res = await fetch(
        `https://api.themoviedb.org/3/tv/${tvShowId}?language=en-US&page=1`,
        {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDUzNjFmNTYyOGRlODQ1NjE4ZjI2NjM3N2E3ZWU0YiIsInN1YiI6IjY2MDdkZWQxNTkwMDg2MDE2M2I3YWJiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GinXlOggE0WstpQKN3Hk1iNX-hLlwAXVBFnCSDC7xvA'
            },

        }
    );

    const data = await res.json();

    return data;
}
