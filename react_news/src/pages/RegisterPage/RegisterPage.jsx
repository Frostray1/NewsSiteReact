import { SignUp } from "components/Auth/SignUp"
import { Link } from "react-router-dom"

const RegisterPage = () => {
    return(
        <div className="registerPage">
        <div className="registerPage__window">
            <div className="register_text">
                <h1>Регистрация</h1>
            </div>
        
            <SignUp/>
            <div className="aboutlogin">
                <p>У уже есть аккаунт? <Link to="/login">Авторизируйтесь</Link></p>
                {/* <p> <Link to="/">home</Link></p> */}
            </div>
            
            
            
        
        
        </div>
        
    </div>
        
    )
}
export default RegisterPage