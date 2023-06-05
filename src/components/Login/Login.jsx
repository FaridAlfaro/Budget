import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { Authentication } from "../Context/Authentication"


const Login = () => {
    const { login, loginWithGoogle } = useContext(Authentication)
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
        <div className="buy_empty_max">
            <div className="login-container">
                <h2>Login</h2>
                <hr/>

                <form onSubmit={handleSubmit}>
                    <input 
                        value={values.email}
                        type="email" 
                        className="form-control my-2" 
                        placeholder="Email"
                        name="email"
                        onChange={handleInput}
                    />
                    <input 
                        type="password" 
                        value={values.password}
                        className="form-control my-2" 
                        placeholder="Contraseña"
                        name="password"
                        onChange={handleInput}
                    />
                    <button className="" type="submit">Login</button>
                    <Link to="/register" className="link">Registrarme</Link>
                </form>
                <button className="btn btn-primary" onClick={loginWithGoogle}>Ingresar con Google</button>
            </div>
        </div>
    )
}

export default Login