
import { useNavigate } from "react-router-dom";
import "../login-formulario.css"

const LoginForm = () => {
    const navigate = useNavigate();
    const back = () => {
        navigate("/formulario");
    }   

    return (
        <div className="section-loguin">
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
                    <button className="boton-login seccion" type="submit">Iniciar Sesión</button>
                    <p className="warning" id="warning"></p>
                    <p>Aceptas nuestras Condiciones de uso y Política de <br />privacidad</p>
                    <p>
                        ¿No tienes una cuenta?{" "}
                        <button onClick={back}>Registrate</button>
                    </p>

                </div>
            </form>
        </div>
    );

}

export default LoginForm
