import axios from "axios";
import { useEffect, useState } from "react";


function Tienda() {

    const [usuarios, setUsuarios] = useState([]);
    const [tablaUsuarios, setTablaUsuarios] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const peticionGet = async () => {
        await axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                setUsuarios(response.data);
                setTablaUsuarios(response.data);
            }).catch(error => {
                console.log(error);
            })
    }

    const handleChange = e => {
        console.log(busqueda)
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (terminoBusqueda) => {
        var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
            if (elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.company.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return elemento;
            }
        });
        setUsuarios(resultadosBusqueda);
    }

    useEffect(() => {
        peticionGet();
    }, [])

    return (
        <div className="my-5 mx-5">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Tipo de porducto" aria-label="Tipo de porducto" aria-describedby="button-addon2" onChange={handleChange} />
            </div>
            <div className="card mx-4 my-4" style={{width: 18 + 'rem'}}>
                {}
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div> 
            <div className="table-responsive">
                <table className="table table-sm table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Teléfono</th>
                            <th>Nombre de Usuario</th>
                            <th>Correo</th>
                            <th>Sitio Web</th>
                            <th>Ciudad</th>
                            <th>Empresa</th>
                        </tr>
                    </thead>

                    <tbody>
                        {usuarios &&
                            usuarios.map((usuario) => (
                                <tr key={usuario.id}>
                                    <td>{usuario.id}</td>
                                    <td>{usuario.name}</td>
                                    <td>{usuario.phone}</td>
                                    <td>{usuario.username}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.website}</td>
                                    <td>{usuario.address.city}</td>
                                    <td>{usuario.company.name}</td>
                                </tr>
                            ))}
                    </tbody>

                </table>

            </div>
        </div>
    );
}

export default Tienda;
