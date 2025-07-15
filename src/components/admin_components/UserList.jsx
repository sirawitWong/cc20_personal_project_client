import { useEffect } from "react";
import useUserStore from "../../stores/authStore";
import useUsersStore from "../../stores/userStore";
import UserCard from "./UserCard";

function UserList() {
  const token = useUserStore((state) => state.token);
  const users = useUsersStore((state) => state.users);
  const getAllUsers = useUsersStore((state) => state.getAllUsers);
  useEffect(() => {
    getAllUsers(token);
  }, []);
  return (
    <div>
      <ul className="list bg-blue-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-xl opacity-60 tracking-wide">
          Manage User
        </li>
        {users?.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={`${user.firstName} ${user.lastName}`}
            username={user.username}
            image={user.profilePic || "#"}
            role={user.role}
            status={user.userStatus}
          />
        ))}
      </ul>
    </div>
  );
}

export default UserList;
