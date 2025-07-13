import { NavLink } from "react-router";
import useUserStore from "../../stores/authStore";

function AdminSidebar() {
  const style = {
    active: "bg-blue-400 flex px-4 py-4 gap-2",
    inactive: "flex px-4 py-4 gap-2 hover:bg-blue-400",
  };
  const user = useUserStore((state) => state.user);
  const role = user.role;
  return (
    <div className="bg-info text-white w-44">
      <div className="flex flex-col py-12 items-center">
        <p>{role}</p>
      </div>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
      >
        Manage
      </NavLink>

      {role === "SUPER" && (
        <>
          <NavLink
            to="/admin/register"
            className={({ isActive }) =>
              isActive ? style.active : style.inactive
            }
          >
            Register Admin
          </NavLink>
          <NavLink
            to="/admin/manage/user"
            className={({ isActive }) =>
              isActive ? style.active : style.inactive
            }
          >
            Manage User
          </NavLink>
        </>
      )}
      <NavLink
        to="/admin/manage/recipe"
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
      >
        Recipies
      </NavLink>
      <NavLink
        to="/admin/manage/ingredient"
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
      >
        Ingredients
      </NavLink>
      <NavLink
        to="/admin/manage/equipment"
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
      >
        Equipments
      </NavLink>
    </div>
  );
}

export default AdminSidebar;
