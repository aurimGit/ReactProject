import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import theaterService from "../services/theater.service";

const AddTheater = () => {

    const[name, setName] = useState('');
    const[seats, setSeats] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const saveTheater = (e) => {
        e.preventDefault();

        const theater = {name, seats, id};
        if (id) {
            theaterService.update(theater)
            .then(response => {
                console.log('theater Updated successfully', response.data);
                navigate('/theaters');
            })
            .catch(error => {
                console.log('Something went wrong', error);
            });

        } else {

            theaterService.create(theater)
            .then(response => {
                console.log("theater added successfully", response.data);
                navigate('/theaters');
            })
            .catch(error => {
                console.log('something went wrong', error)
            });
        }
    }

    useEffect(() => {
        if (id) {
            theaterService.get(id)
            .then(theater => {
                setName(theater.data.name);
                setSeats(theater.data.seats);
            })
            .catch(error => {
                console.log('something went wrong', error);
            });
        }
    }, [id] )

    return(
        <div className="container">
            <h3>Add theater</h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="enter name"
                    />

                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="seats"
                        value={seats}
                        onChange={(e) => setSeats(e.target.value)}
                        placeholder="enter seat"
                    />
                    
                </div>
                <div>
                    <button className="btn btn-primary" onClick={(e) => saveTheater(e)}>Save</button>
                </div>
            </form>
            <hr/>
            <button className="btn btn-primary"><Link to="/theaters">Back to List</Link></button>
        </div>
    )
}

export default AddTheater;