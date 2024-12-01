import MovieItem from "./movieitem";

//passing the reload function as a prop to MovieItem
const Movies = (props)=>{
    return props.myMovies.map(
        (movie)=>{
            return <MovieItem mymovie={movie} key={movie._id} Reload={props.ReloadData} />
        }
    );
}

export default Movies;