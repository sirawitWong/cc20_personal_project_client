import { Link, NavLink } from "react-router";
import useUserStore from "../../stores/authStore";
import { useEffect } from "react";

function MainNav() {
  const style = {
    active: "tab tab-active btn btn-ghost text-sm",
    inactive: "tab btn btn-ghost text-sm",
  };
  const user = useUserStore((state) => state.user);
  const token = useUserStore((state) => state.token);
  const logout = useUserStore((state) => state.logout);
  const getMe = useUserStore((state) => state.getMe);
  useEffect(() => {
    getMe(token);
  }, []);
  return (
    <>
      <div className="navbar bg-accent-content shadow-sm">
        <div className="navbar-start">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl">
              Let them Cook
            </Link>
          </div>
        </div>
        <div
          role="tablist"
          className="navbar-center tabs tabs-border flex justify-between"
        >
          <NavLink
            role="tab"
            to="/"
            className={({ isActive }) =>
              isActive ? style.active : style.inactive
            }
          >
            HOME
          </NavLink>
          <NavLink
            role="tab"
            to="/recipies"
            className={({ isActive }) =>
              isActive ? style.active : style.inactive
            }
          >
            RECIPIES
          </NavLink>
          {user && (
            <>
              <NavLink
                role="tab"
                to="/user/create/recipe"
                className={({ isActive }) =>
                  isActive ? style.active : style.inactive
                }
              >
                CREATE
              </NavLink>
            </>
          )}
        </div>
        <div className="navbar-end">
          {!user ? (
            <div>
              <Link to="/login" className="btn btn-ghost text-xl">
                Login
              </Link>
            </div>
          ) : (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={
                      user?.profilePic ||
                      "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/user" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={logout}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default MainNav;
