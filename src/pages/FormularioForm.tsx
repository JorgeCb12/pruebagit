import { useNavigate } from "react-router-dom"
import "../login-formulario.css"
const FormularioForm = () => {
      const navigate = useNavigate();
    const log = () => {
        navigate("/login");
    }   

    
  return (
   
    <form action="" method="POST" id="form">
        <div className="form">
            <h1>Registro</h1>
            <div className="grupo">
                <i className="fa fa-user fa-1x  " ></i>
                <input type="text" name="letras" id="name" required/> 
                <span className="barra"></span>
                <label htmlFor="">Nombre:</label>
            </div>
            <div className="grupo">
                <i className="fa fa-envelope fa-1x "></i>
                <input type="email" name="" id="name" required/>
                <span className="barra"></span>
                <label htmlFor="">Email: </label>
            </div>
            <div className="grupo">
                <i className="fa fa-key fa-1x" ></i>
                <input type="password" name="" id="name" required/>
                <span className="barra"></span>
                <label htmlFor="">Contraseña</label>
            </div>
            <div className="section-form">
            <button className="boton-login form1" type="submit">Registrarme</button>
            <p className="warning" id="warning"></p>
            <p>Al registrarte, Aceptas nuestras Condiciones de uso y Política de privacidad.</p>
            <p>¿Ya tienes Una Cuenta?</p> 
            <button className="boton-login form2"onClick={log}>Iniciar Sesion</button>
            </div>
 
        </div>
    </form>
    )
}
export default FormularioForm
