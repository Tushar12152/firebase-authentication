import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

const Header = () => {
    return (
        <div>
              <Nav></Nav>
              <Outlet></Outlet>
            
        </div>
    );
};

export default Header;