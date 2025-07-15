import { Outlet } from "react-router";
import AdminNav from "../components/admin_components/AdminNav";
import AdminSidebar from "../components/admin_components/AdminSidebar";

export default function AdminLayout() {
	return (
		<div className="flex h-full min-h-screen w-screen">
			<AdminSidebar />
			<div className="flex flex-col flex-1">
				<AdminNav />
				<div className="flex-1 bg-gray-100 p-2 m-2">
					<Outlet />
				</div>
			</div>
		</div>
	)
}
