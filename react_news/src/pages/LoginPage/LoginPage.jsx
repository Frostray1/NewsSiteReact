import { Login } from "components/Auth/Login"
import { Link } from "react-router-dom"

const LoginPage = () => {
    return(
        <div className="loginPage">
            <div className="loginPage__window">
                <div className="auth_text">
                    <h1>Авторизация</h1>
                </div>
                
                <Login/>
                <div className="aboutRegister">
                    <p>У вас еще нет акаунта? Тогда <Link to="/register">зарегестрируйтесь</Link></p>
                    {/* <p> <Link to="/">home</Link></p> */}
                </div>
                
                
                
            
            
            </div>
            
        </div>
    )
}
export default LoginPage