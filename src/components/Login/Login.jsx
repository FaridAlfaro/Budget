import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { Authentication } from "../Context/Authentication"
import LoginImg from "../../../img/Persons/3.svg"
import Socials from "../Socials/Socials"

function Login () {
    const { user } = useContext(Authentication);
    
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        login(values)
    }

    return (
        
            <div className="login">
                {user.logged ?
                  <>
                    <Navigate to={"/"}></Navigate>
                  </>
                : 
                <>
                <div className="login_cnt">
                    <h4 className="login_title">Iniciar sesión</h4>
                    <form onSubmit={handleSubmit}>
                        <input 
                            value={values.email}
                            type="email" 
                            className="login_input" 
                            placeholder="Email"
                            name="email"
                            onChange={handleInput}
                        />
                        <input 
                            type="password" 
                            value={values.password}
                            className="login_input" 
                            placeholder="Contraseña"
                            name="password"
                            onChange={handleInput}
                        />
                        <button className="login_btn" type="submit">Vamos!</button>
                        <p>Empezar con:</p>
                        <Socials type="login"/>
                        <Link to="/register" className="link">Registrarme</Link>
                    </form>
                </div>
                <img src={LoginImg} alt="" className="login_img"/>
                </>
                }
            </div>
    ) 
}

export default Login