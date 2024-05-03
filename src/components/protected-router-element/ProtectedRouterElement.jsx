import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedRouterElement = ({ element }) => {
    const location = useLocation();
    const isAuthorized = useSelector((store) => store.user.isAuthorized);

    location.pathname = window.location.pathname;

    return (
        isAuthorized ? element : <Navigate
            to='/login' 
            state={{ from: location }}
            replace/>
    )
}