import icon from '../../assets/icon.png';

const Header = () => {
    return (
        <header className="row">
            <img src={icon}/>
            <a>Sign out</a>
        </header>
    )
}

export default Header;