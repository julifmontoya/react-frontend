import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const HotelEdit = () => {
    const { hotelId } = useParams();

    useEffect(() => {
        fetch("http://localhost:5000/v1/hotels/" + hotelId).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp._id);
            namechange(resp.name);
            descriptionchange(resp.description);
            checkInchange(resp.check_in);
            checkOutchange(resp.check_out);
            numRoomschange(resp.num_rooms);
            starschange(resp.stars);
            addresschange(resp.address);
            latitudechange(resp.latitude);
            longitudechange(resp.longitude);

        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [description, descriptionchange] = useState("");
    const [checkIn, checkInchange] = useState("");
    const [checkOut, checkOutchange] = useState("");
    const [stars, starschange] = useState("");
    const [numRooms, numRoomschange] = useState("");
    const [address, addresschange] = useState("");
    const [latitude, latitudechange] = useState("");
    const [longitude, longitudechange] = useState("");
    const [validation, valchange] = useState(false);

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const hoteldata = {
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


        fetch("http://localhost:5000/v1/hotels/" + hotelId, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(hoteldata)
        }).then((res) => {
            navigate('/');
        }).catch((err) => {
            console.log(err.message)
        })

    }
    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Editar Hotel</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input
                                                value={id}
                                                disabled="disabled"
                                                className="form-control">
                                            </input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name}
                                                onMouseDown={e => valchange(true)}
                                                onChange={e => namechange(e.target.value)}
                                                className="form-control"></input>
                                            {name.length == 0 && validation && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>description</label>
                                            <input value={description}
                                                onChange={e => descriptionchange(e.target.value)}
                                                className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>checkIn</label>
                                            <input value={checkIn}
                                                onChange={e => checkInchange(e.target.value)}
                                                className="form-control"
                                                type="time"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>checkOut</label>
                                            <input value={checkOut}
                                                onChange={e => checkOutchange(e.target.value)}
                                                className="form-control"
                                                type="time"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>stars</label>
                                            <input value={stars}
                                                onChange={e => starschange(e.target.value)}
                                                className="form-control"
                                                type="number"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>numRooms</label>
                                            <input value={numRooms}
                                                onChange={e => numRoomschange(e.target.value)}
                                                className="form-control"
                                                type="number"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>address</label>
                                            <input value={address}
                                                onChange={e => addresschange(e.target.value)}
                                                className="form-control"
                                                type="text"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>latitude</label>
                                            <input value={latitude}
                                                onChange={e => latitudechange(e.target.value)}
                                                className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>longitude</label>
                                            <input value={longitude}
                                                onChange={e => longitudechange(e.target.value)}
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