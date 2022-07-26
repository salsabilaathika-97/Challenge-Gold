import "./style.css"
import { navList } from "../../const/StaticData";

const Navbar = () => {   
    return (
        <div className="navbar-body">
            <div className="navbar-row">
            </div>
            <div className="nav-list">
                {
                    navList.map((item) => (
                        <a class ="text text-black" href = {item.id}>{item.text}</a>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar;
