import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider.jsx';
import { Navbar } from '../components/Navbar.jsx';

export const Login = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [error, setError] = useState(false);
    const [user, setUser] = useState({
        correo: "",
        password: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (user.correo === "" || user.password === "") {
            setError(true);
            return;
        } else {
            setError(false);
        }

        try {
            const response = await axios.post("http://localhost:4000/api/usuario/login", {
                correo: user.correo,
                password: user.password
            });

            if (response.status === 200) {
                // Autenticación exitosa, llamar a la función de login del contexto
                login({ token: response.data.token }); // Envía el token al contexto

                localStorage.setItem("token", response.data.token); // Guarda el token en el localStorage

                navigate("/");
            } else {
                setError(true);
            }
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            setError(true);
        }
    };

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className='body'>
              <Navbar />
            <main className='MainRL'>
                <div className="form-container">
                    <h1>Iniciar sesión</h1>
                    <p>¡Qué bueno que estés de vuelta!</p>
                    <Link to={'/'} >Volver al Inicio</Link>
                    <form className="FromRL" id="login-form" onSubmit={handleSubmit}>
                        <label htmlFor="correo" className="sr-only">Correo electrónico</label>
                        <input
                            type="text"
                            name="correo"
                            id="user"
                            placeholder="Correo electrónico"
                            value={user.correo}
                            onChange={handleChange}
                        />
                        <label htmlFor="password" className="sr-only">Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Contraseña"
                            value={user.password}
                            onChange={handleChange}
                        />
                        <button type="submit">Iniciar sesión</button>
                        {error && <p className="error">Error al iniciar sesión</p>}
                    </form>
                    <p>¿Todavía no tenés una cuenta? - <Link to={'/registro'}>Regístrate</Link></p>
                    {error && <p>Todos los campos son obligatorios</p>}
                </div>
            </main>
        </div>
    );
};
