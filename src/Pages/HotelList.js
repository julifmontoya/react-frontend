import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const HotelList = () => {
    const [hotelData, setAPIData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/v1/hotels`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const sendId = (id) => {
        navigate("/hotel/" + id);
    }

    const onDelete = (id) => {
        if (window.confirm('Deseas Eliminar?')) {
            axios.delete(`http://localhost:5000/v1/hotels/${id}`)
                .then(() => {
                    getData();
                })
        }
    }

    const getData = () => {
        axios.get(`http://localhost:5000/v1/hotels`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Listado de hoteles</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="hotel/" className="btn btn-success">Crear (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>Id</td>
                                <td>Nombre</td>
                                <td>Acciones</td>
                            </tr>
                        </thead>
                        <tbody>
                            {hotelData &&
                                hotelData.map(item => (
                                    <tr key={item._id}>
                                        <td>{item._id}</td>
                                        <td>{item.name}</td>
                                        <td><a onClick={() => { sendId(item._id) }} className="btn btn-success">Editar</a>
                                            <a onClick={() => { onDelete(item._id) }} className="btn btn-danger">Eliminar</a>
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

export default HotelList;