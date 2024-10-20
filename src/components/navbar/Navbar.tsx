import "./navbar.scss"

const Navbar = () => {
    return ( 
        <div className = "navbar">
            <div className="logo">
                <img src = "dashboard.png" alt = "" />
                <span>CoreDash</span>
            </div>
            <div className="icons">
                <img src="/search.svg" alt="" className="icon" />
                <img src="/app.svg" alt="" className="icon" />
                <img src="/expand.svg" alt="" className="icon" />
                <div className="notification">
                    <img src="/notifications.svg" alt="" />
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <span>AB</span>
                </div>
                <img src="/settings.svg" alt="" />
            </div>
        </div>
     );
}
 
export default Navbar;