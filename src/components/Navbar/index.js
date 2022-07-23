import "./style.css"

const Navbar = () => {
    const navList = ["Our Services", "Why Us", "Testimonial", "FAQ"]
    return (
        <div className="navbar-body">
            <div className="navbar-row">

            </div>
            <div className="nav-list">
                {
                    navList.map((item) => (
                        <p>{item}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar;
