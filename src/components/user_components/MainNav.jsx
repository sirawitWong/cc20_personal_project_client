import { Link } from "react-router"

function MainNav() {
  const login = true
  return (
    <div className="navbar bg-accent-content shadow-sm">
  <div className="navbar-start">
   <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">Let them Cook</Link>
  </div> 
  </div>
  <div className="navbar-center flex justify-between">
    <Link to="/" className="btn btn-ghost text-sm">HOME</Link>
    <Link to="/recipies" className="btn btn-ghost text-sm">RECIPIES</Link>
    <Link to="/user/create/recipe"className="btn btn-ghost text-sm">CREATE</Link>
    <Link to="/user/recipies"className="btn btn-ghost text-sm">MY RECIPIES</Link>
  </div>
  <div className="navbar-end">
   { !login ? 
     <div>
    <Link to="/login" className="btn btn-ghost text-xl">Login</Link>
  </div> 
   :
   <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/user" className="justify-between">
            Profile
          </Link>
        </li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </div> }
      </div> 
</div>
  )
}
export default MainNav