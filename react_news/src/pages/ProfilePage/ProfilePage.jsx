import { useAuth } from 'hooks/use-auth';
import { useDispatch } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { removeUser } from 'store/slices/userSlice';

function buttonsLogout (dispatch) {
    
    dispatch(removeUser())
    window.location.reload();
}


const ProfilePage = () => {
    const {isAuth, email} = useAuth();
    let navigate = useNavigate();
    const dispatch = useDispatch();
    return isAuth ? (
       <div>
        
        <h1>{email}</h1>
        <Link to = "/" >home</Link>
        <button
        onClick={()=>buttonsLogout(dispatch)}
        >
            log out 
        </button>
       </div>
        
    
        
    ):
    (
     
        <Navigate replace to="/" />
    
        
    )
}
export default ProfilePage