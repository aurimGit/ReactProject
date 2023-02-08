import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import movieService from "../services/movie.service";

const AddMovie = () => {

    const[mtitle, setMovieTitle] = useState('');
    const[rating, setRating] = useState('');
    const[description, setDescription] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const saveMovie = (e) => {
        e.preventDefault();

        const movie = {mtitle, rating, description, id};
        if (id) {
            movieService.update(movie)
            .then(response => {
                console.log('movie Updated successfully', response.data);
                navigate('/movies');
            })
            .catch(error => {
                console.log('Something went wrong', error);
            });

        } else {

            movieService.create(movie)
            .then(response => {
                console.log("movie added successfully", response.data);
                navigate('/movies');
            })
            .catch(error => {
                console.log('something went wrong', error)
            });
        }
    }

    useEffect(() => {
        if (id) {
            movieService.get(id)
            .then(movie => {
                setMovieTitle(movie.data.mtitle);
                setRating(movie.data.rating);
                setDescription(movie.data.description);
            })
            .catch(error => {
                console.log('something went wrong', error);
            });
        }
    }, [id] )

    return(
        <div className="container">
            <h3>Add movie</h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="mtitle"
                        value={mtitle}
                        onChange={(e) => setMovieTitle(e.target.value)}
                        placeholder="enter title"
                    />

                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        placeholder="enter rating"
                    />
                    
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="enter description"
                    />
                </div>
                <div>
                    <button className="btn btn-primary" onClick={(e) => saveMovie(e)}>Save</button>
                </div>
            </form>
            <hr/>
            <button className="btn btn-primary"><Link to="/movies">Back to List</Link></button>
        </div>
    )
}

export default AddMovie;