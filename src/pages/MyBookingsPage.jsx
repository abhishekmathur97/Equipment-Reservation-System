import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import List from '../components/list/List';

const MyBookingsPage = () => {
    const isAuthorized = useSelector(state => state.user.isAuthorized);

    return (
        <section>
            
        </section>
    )
}

export default MyBookingsPage;