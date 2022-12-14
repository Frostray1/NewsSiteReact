import { SignUp } from "components/Auth/SignUp"
import { Link } from "react-router-dom"

const RegisterPage = () => {
    return(
        <div>
            <h1>Register</h1>
            <SignUp/>
            <p>
                alredy have account? <Link to='/login'> Sign up</Link>
            </p>
        </div>
    )
}
export default RegisterPage