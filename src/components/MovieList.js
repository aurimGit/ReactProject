import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import movieService from "../services/movie.service";

const MovieList = () => {
  const [movies, setMovies] = useState ([]);

  useEffect (() =>{
      init();
  }, [])

  const init = () => {
      movieService.getAll()
      .then(response => {
          console.log('Printing the tasks', response.data);
          setMovies(response.data);
      })
      .catch(error => {
          console.log('Something went wrong', error);
      })
  }
  const handleDelete = id => {
    movieService.remove(id)
      .then(response => {
          console.log('Task removed successfully', response.data);
          init();
      })
      .catch(error =>{
          console.log('Something went wrong', error);
      })
  }  

    return (
        <div >
          <div className="container">
          <h1>List of Movies</h1>
          <hr/>
          <div>
            <Link to="/addMovie" className="btn btn-primary mb-2">Add Movie</Link>
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>Title</th>
                  <th>Rating</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              {
                movies.map(movie => (
                  <tr key={movie.id}>
                    <td>{movie.mtitle}</td>
                    <td>{movie.rating}</td>
                    <td>{movie.description}</td>
                    <td>
                      <Link className="btn btn-info" to={`/movie/edit/${movie.id}`}>Update</Link>
                      <button className="btn btn-danger ml-2" onClick={(e) => {
                        handleDelete(movie.id)
                      }}>Delete</button>
                    </td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          </div>
          </div>
        </div>
      );
    }
    
    export default MovieList;