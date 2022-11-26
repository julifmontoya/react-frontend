import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HotelListing = () => {
    const [hoteldata, hoteldatachange] = useState(null);
    const navigate = useNavigate();

    const LoadEdit = (id) => {
        navigate("/hotel/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Deseas Eliminar?')) {
            fetch("http://localhost:5000/v1/hotels/" + id, {
                method: "DELETE"
            }).then((res) => {
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    useEffect(() => {
        fetch("http://localhost:5000/v1/hotels/").then((res) => {
            return res.json();
        }).then((resp) => {
            hoteldatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Listado de hoteles</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="hotel/create" className="btn btn-success">Crear (+)</Link>
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
                            {hoteldata &&
                                hoteldata.map(item => (
                                    <tr key={item._id}>
                                        <td>{item._id}</td>
                                        <td>{item.name}</td>
                                        <td><a onClick={() => { LoadEdit(item._id) }} className="btn btn-success">Editar</a>
                                            <a onClick={() => { Removefunction(item._id) }} className="btn btn-danger">Eliminar</a>
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

export default HotelListing;