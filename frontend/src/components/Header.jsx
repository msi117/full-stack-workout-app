import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="navbar mb-2 border-b border-cyan-100">
      <Link to='/' className="navbar-start text-2xl font-extrabold text-cyan-700"> <h1>Workout App</h1></Link>
      <div className="navbar-end">
        <Link to='/login' className="btn btn-outline btn-info btn-sm mr-2">Login</Link>
        <Link to='/register' className="btn btn-outline btn-info btn-sm mr-2">Register</Link>
      </div>
    </div>
  );
}

export default Header;
