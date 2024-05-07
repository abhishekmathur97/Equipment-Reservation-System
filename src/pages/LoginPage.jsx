import { useSelector } from "react-redux";
import LoginForm from "../components/login-form/LoginForm";

const LoginPage = () => {
    const equipmentList = useSelector(state => state.equipment.equipmentList);

    return (
        <section className="form__container">
            <LoginForm />
        </section>
    )
}

export default LoginPage;