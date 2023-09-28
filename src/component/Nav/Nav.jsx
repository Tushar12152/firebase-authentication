import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="flex gap-6 bg-slate-500 text-white">
               <NavLink to='/'>Home</NavLink>
               <NavLink to='/login'>LOGIN</NavLink>
        </div>
    );
};

export default Nav;