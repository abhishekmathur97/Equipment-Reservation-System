import { useDispatch, useSelector } from 'react-redux';
import icon from '../../assets/icon.png';
import { userActions } from '../../store/userSlice';
import { Link } from 'react-router-dom';

const Header = () => {
    const { isAuthorized, currentUser } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleSingout = () => {
        dispatch(userActions.signout(currentUser?.email));
        localStorage.removeItem('token');
    };

    return (
        <header className="row">
            <img src={icon}/>
            <div className='nav'>
                { isAuthorized ? <>
                    <Link to='/' className='link'>Main</Link>
                    <Link to='/my-bookings' className='link'>My bookings</Link>
                    {
                        currentUser?.role === 'ADMIN' && (<>
                            <Link to='/user-roles' className='link'>User roles</Link>
                            <Link to='/requests' className='link'>Requests</Link>
                            <Link to='/logs' className='link'>Logs</Link>
                        </>)
                    }
                    <a onClick={handleSingout} className='link'>Sign out</a>
                  </> : '' }
            </div>
        </header>
    )
}

export default Header;