import MovieItem from "./movieitem";

function Movies(props) {
    return (
        <>
            {props.myMovies.map((movie) => (
                <MovieItem
                    myMovie={movie}
                    key={movie._id}
                    Reload={props.ReloadData}
                />
            ))}
        </>
    );
}

export default Movies;