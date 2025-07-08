import { Link } from "react-router";
import useUserStore from "../../stores/authStore";

function AdminSidebar() {
  const user = useUserStore((state) => state.user);
  const role = user.role;
  return (
    <div className="bg-info text-white w-44">
      <div className="flex flex-col py-12 items-center">
        <p>{role}</p>
      </div>
      {role === "SUPER" && (
        <>
          <Link
            to="/admin/register"
            className="flex px-4 py-4 gap-2 hover:bg-blue-400"
          >
            Register Admin
          </Link>
          <Link
            to="/admin/manage/user"
            className="flex px-4 py-4 gap-2 hover:bg-blue-400"
          >
            Manage User
          </Link>
        </>
      )}
      <Link
        to="/admin/manage/recipe"
        className="flex px-4 py-4 gap-2 hover:bg-blue-400"
      >
        Recipies
      </Link>
      <Link
        to="/admin/manage/ingredient"
        className="flex px-4 py-4 gap-2 hover:bg-blue-400"
      >
        Ingredients
      </Link>
      <Link
        to="/admin/manage/equipment"
        className="flex px-4 py-4 gap-2 hover:bg-blue-400"
      >
        Equipments
      </Link>
      <Link
        to="/admin/manage/review"
        className="flex px-4 py-4 gap-2 hover:bg-blue-400"
      >
        Reviews
      </Link>
    </div>
  );
}

export default AdminSidebar;
