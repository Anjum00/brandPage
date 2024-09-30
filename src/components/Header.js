const Header = () => {
    console.log();
    return (
        <div className="container">
            <nav>
                <div className="logo">
                    <img src="/images/logo.png" alt="" />
                </div>
                <ul>
                    <li href="#">Menu</li>
                    <li href="#">Location</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                </ul>
                <button>Login</button>
            </nav>
        </div>
    );
}

export default Header;