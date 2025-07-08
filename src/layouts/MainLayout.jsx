import { Outlet } from "react-router";
import MainNav from "../components/user_components/MainNav";

export default function MainLayout() {
	return (
		<div>
			<MainNav />
			<Outlet />
		</div>
	)
}
