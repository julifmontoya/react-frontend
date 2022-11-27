import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const HotelEdit = () => {
    const { hotelId } = useParams();
    const navigate = useNavigate();

    const [name, nameSet] = useState("");
    const [description, descriptionSet] = useState("");
    const [checkIn, checkInSet] = useState("");
    const [checkOut, checkOutSet] = useState("");
    const [stars, starsSet] = useState("");
    const [numRooms, numRoomsSet] = useState("");
    const [address, addressSet] = useState("");
    const [latitude, latitudeSet] = useState("");
    const [longitude, longitudeSet] = useState("");

    useEffect(() => {
        if (hotelId) {
            axios.get(`http://localhost:5000/v1/hotels/${hotelId}`)
                .then((response) => {
                    nameSet(response.data.name);
                    descriptionSet(response.data.description);
                    checkInSet(response.data.check_in);
                    checkOutSet(response.data.check_out);
                    numRoomsSet(response.data.num_rooms);
                    starsSet(response.data.stars);
                    addressSet(response.data.address);
                    latitudeSet(response.data.latitude);
                    longitudeSet(response.data.longitude);
                })
        }
    }, [])

/*     useEffect(() => {
        if (hotelId) {
            fetch("http://localhost:5000/v1/hotels/" + hotelId).then((res) => {
                return res.json();
            }).then((resp) => {
                idSet(resp._id);
                nameSet(resp.name);
                descriptionSet(resp.description);
                checkInSet(resp.check_in);
                checkOutSet(resp.check_out);
                numRoomsSet(resp.num_rooms);
                starsSet(resp.stars);
                addressSet(resp.address);
                latitudeSet(resp.latitude);
                longitudeSet(resp.longitude);

            }).catch((err) => {
                console.log(err.message);
            })
        }
    }, []); */

    const handlesubmit = (e) => {
        e.preventDefault();
        const body = {
            "name": name,
            "description": description,
            "check_in": checkIn,
            "check_out": checkOut,
            "num_rooms": numRooms,
            "stars": stars,
            "address": address,
            "latitude": latitude,
            "longitude": longitude
        };

        if (!hotelId) {
            createData(body);
            navigate('/');
        } else {
            updateData(body);
            navigate('/');
        }

        async function createData(body) {
            axios.post(`http://localhost:5000/v1/hotels/`, body)
        }

        async function updateData(body) {
            await axios.put(`http://localhost:5000/v1/hotels/${hotelId}`, body)
        }

        /*      function createData(body) {
                    fetch("http://localhost:5000/v1/hotels/", {
                        method: "POST",
                        headers: { "content-type": "application/json" },
                        body: JSON.stringify(body)
                    }).then((res) => {
                        navigate('/');
                    }).catch((err) => {
                        console.log(err.message)
                    })
                }
        
                function updateData(body) {
                    fetch("http://localhost:5000/v1/hotels/" + hotelId, {
                        method: "PUT",
                        headers: { "content-type": "application/json" },
                        body: JSON.stringify(body)
                    }).then((res) => {
                        navigate('/');
                    }).catch((err) => {
                        console.log(err.message)
                    })
                } */
    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Detalles del Hotel</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input
                                                required
                                                value={name}
                                                onChange={e => nameSet(e.target.value)}
                                                className="form-control"></input>

                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>description</label>
                                            <input value={description}
                                                onChange={e => descriptionSet(e.target.value)}
                                                className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>checkIn</label>
                                            <input value={checkIn}
                                                onChange={e => checkInSet(e.target.value)}
                                                className="form-control"
                                                type="time"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>checkOut</label>
                                            <input value={checkOut}
                                                onChange={e => checkOutSet(e.target.value)}
                                                className="form-control"
                                                type="time"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>stars</label>
                                            <input value={stars}
                                                onChange={e => starsSet(e.target.value)}
                                                className="form-control"
                                                type="number"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>numRooms</label>
                                            <input value={numRooms}
                                                onChange={e => numRoomsSet(e.target.value)}
                                                className="form-control"
                                                type="number"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>address</label>
                                            <input value={address}
                                                onChange={e => addressSet(e.target.value)}
                                                className="form-control"
                                                type="text"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>latitude</label>
                                            <input value={latitude}
                                                onChange={e => latitudeSet(e.target.value)}
                                                className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>longitude</label>
                                            <input value={longitude}
                                                onChange={e => longitudeSet(e.target.value)}
                                                className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Guardar</button>
                                            <Link to="/" className="btn btn-danger">Atras</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default HotelEdit;