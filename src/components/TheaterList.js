import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import theaterService from "../services/theater.service";

const TheaterList = () => {
  const [theaters, setTheater] = useState ([]);

  useEffect (() =>{
      init();
  }, [])

  const init = () => {
      theaterService.getAll()
      .then(response => {
          console.log('Printing the tasks', response.data);
          setTheater(response.data);
      })
      .catch(error => {
          console.log('Something went wrong', error);
      })
  }
  const handleDelete = id => {
      theaterService.remove(id)
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
          <h1>List of Theaters</h1>
          <hr/>
          <div>
            <Link to="/addTheater" className="btn btn-primary mb-2">Add Theater</Link>
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>Name</th>
                  <th>Seats</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              {
                theaters.map(theater => (
                  <tr key={theater.id}>
                    <td>{theater.name}</td>
                    <td>{theater.seats}</td>
                    <td>
                      <Link className="btn btn-info" to={`/theater/edit/${theater.id}`}>Update</Link>
                      <button className="btn btn-danger ml-2" onClick={(e) => {
                        handleDelete(theater.id)
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
    
    export default TheaterList;