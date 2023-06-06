import { useState, useContext } from "react"
import { Link, Navigate } from "react-router-dom"
import { Authentication } from "../Context/Authentication"
import RegisterImg from "../../../img/Persons/2.svg"
import Socials from "../Socials/Socials"

function Register () {
    const { user } = useContext(Authentication)

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

        register(values)
    }

    return (
        
        <div className="login">
            {user.logged ?
                <>
                    <Navigate to={"/"}></Navigate>
                </>
                : <>
                    <div className="login_cnt">
                        <h2 className="login_title">Registrarme</h2>
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
                            <Link to="/login" className="link">Iniciar sesión</Link>
                            <Socials type="login"/>
                        </form>
                    </div>
                    <img src={RegisterImg} alt="" className="login_img2"/>
            </>
            }
        </div>
        
    )
}

export default Register