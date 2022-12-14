import { Login } from "components/Auth/Login"
import { Link } from "react-router-dom"

const LoginPage = () => {
    return(
        <div>
            <h1>Login</h1>
            <Login/>
            <p>Or <Link to="/register">RegisterPage</Link></p>
            <p> <Link to="/">home</Link></p>
        </div>
    )
}
export default LoginPage