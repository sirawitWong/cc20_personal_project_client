import { Link } from "react-router";
import useUserStore from "../../stores/authStore";
import { useEffect } from "react";

function AdminNav() {
  const user = useUserStore(state=> state.user)
  const token = useUserStore(state=> state.token)
  const getMe = useUserStore(state=> state.getMe)
  const logout = useUserStore((state) => state.logout);
  useEffect(()=>{
    getMe(token)
  },[])
  return (
    <div className="flex justify-end navbar shadow-sm bg-info">
      <div className="flex justify-between">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={user?.profilePic || "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/" onClick={logout}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminNav;
