export const mutationLogin = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/authentication/guest_session/new",
        {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDUzNjFmNTYyOGRlODQ1NjE4ZjI2NjM3N2E3ZWU0YiIsInN1YiI6IjY2MDdkZWQxNTkwMDg2MDE2M2I3YWJiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GinXlOggE0WstpQKN3Hk1iNX-hLlwAXVBFnCSDC7xvA'
            },

        }
    );

    console.log(res.json());

    return res.json();
    
}