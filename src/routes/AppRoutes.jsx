import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import Home from "../pages/user/Home";
import Recipies from "../pages/user/Recipies";
import Recipe from "../pages/user/Recipe";
import Login from "../pages/user/Login";
import Profile from "../pages/user/Profile";
import CreateRecipe from "../pages/user/CreateRecipe";
import UserManage from "../pages/admin/UserManage";
import RecipeManage from "../pages/admin/RecipeManage";
import IngredientManage from "../pages/admin/IngredientManage";
import EquipmentManage from "../pages/admin/EquipmentManage";
import ReviewManage from "../pages/admin/ReviewManage";
import AdminRegister from "../pages/admin/AdminRegister";
import Manage from "../pages/admin/Manage";
import MyRecipe from "../pages/user/MyRecipe";

export default function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/recipies" element={<Recipies />} />
					<Route path="/recipe/:id" element={<Recipe />} />
					<Route path="/login" element={<Login />} />
				</Route>

				<Route path="user" element={<MainLayout />}>
					<Route index element={<Profile />} />
					<Route path="/user/create/recipe" element={<CreateRecipe />} />
					<Route path="/user/recipies" element={<MyRecipe />} />
				</Route>

				<Route path="admin" element={<AdminLayout />}>
					<Route index element={<Manage />} />
					<Route path="/admin/register" element={<AdminRegister />} />
					<Route path="/admin/manage/user" element={<UserManage />} />
					<Route path="/admin/manage/recipe" element={<RecipeManage />} />
					<Route path="/admin/manage/ingredient" element={<IngredientManage />} />
					<Route path="/admin/manage/equipment" element={<EquipmentManage />} />
					<Route path="/admin/manage/review" element={<ReviewManage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
