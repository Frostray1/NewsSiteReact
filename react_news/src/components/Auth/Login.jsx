import {Form} from './Form';
import {useDispatch} from 'react-redux';
import {setUser} from '../../store/slices/userSlice'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom'
const Login = () =>{

    const push = useNavigate();  
    const dispatch = useDispatch();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email, password)
        .then(({user})=> {
            console.log(user);
            dispatch(setUser({
                email:user.email,
                id:user.uid,
                token:user.accesToken,  
            }));
            push('/');
        })
            
        .catch(console.error)
    }
    return (
        <Form
        title = "Войти"
        handleClick={handleLogin}
        />
    )
}
export {Login}