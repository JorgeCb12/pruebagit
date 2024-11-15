
import { Link, useNavigate } from "react-router-dom";
import "../estilos.css"

const LoginForm = () => {
    const navigate = useNavigate();
    const back = () => {
        navigate("/");
    }
    
    return (
        <div className="section-logo">
        <form action="" method="POST" id="form">
            <div className="form">
                <h1 className="text-login">Login</h1>
                <div className="grupo">
                    <i className="fa fa-envelope fa-1x"></i>
                    <input type="email" id="email" required />
                    <span className="barra"></span>
                    <label htmlFor="email">Correo Electrónico</label>
                </div>
                <div className="grupo">
                    <i className="fa fa-key fa-1x"></i>
                    <input type="password" id="password" required />
                    <span className="barra"></span>
                    <label htmlFor="password">Contraseña</label>
                </div>
                <div className="seccion-login">
                <button className="boton-login" type="submit">Iniciar Sesión</button>
                <p className="warning" id="warning"></p>
                <p>Aceptas nuestras Condiciones de uso y Política de privacidad</p>
                <p>
                    ¿No tienes una cuenta?{" "}
                    <a className="link" href="formulario-j.html">
                        Regístrate
                    </a>
                </p>
                <button className="btn btn-create" onClick={back}>Volver Home</button>
                </div>
            </div>
        </form>
        </div>
    );

}

export default LoginForm
