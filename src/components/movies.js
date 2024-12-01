import MovieItem from "./movieitem";
//pass the reload function as a prop

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