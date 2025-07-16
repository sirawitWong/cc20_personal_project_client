import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import useUserStore from "../stores/authStore";

const Home = lazy(() => import("../pages/user/Home"));
const Recipies = lazy(() => import("../pages/user/Recipies"));
const Recipe = lazy(() => import("../pages/user/Recipe"));
const Login = lazy(() => import("../pages/user/Login"));
const Profile = lazy(() => import("../pages/user/Profile"));
const CreateRecipe = lazy(() => import("../pages/user/CreateRecipe"));
const UserManage = lazy(() => import("../pages/admin/UserManage"));
const RecipeManage = lazy(() => import("../pages/admin/RecipeManage"));
const IngredientManage = lazy(() => import("../pages/admin/IngredientManage"));
const EquipmentManage = lazy(() => import("../pages/admin/EquipmentManage"));
const AdminRegister = lazy(() => import("../pages/admin/AdminRegister"));
const Manage = lazy(() => import("../pages/admin/Manage"));

const guestRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/recipies", element: <Recipies /> },
      { path: "/recipe/:id", element: <Recipe /> },
      { path: "/login", element: <Login /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/recipies", element: <Recipies /> },
      { path: "/recipe/:id", element: <Recipe /> },
      { path: "/user", element: <Profile /> },
      { path: "/user/create/recipe", element: <CreateRecipe /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

const adminRouter = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Manage /> },
      { path: "/admin/register", element: <AdminRegister /> },
      { path: "/admin/manage/user", element: <UserManage /> },
      { path: "/admin/manage/recipe", element: <RecipeManage /> },
      { path: "/admin/manage/ingredient", element: <IngredientManage /> },
      { path: "/admin/manage/equipment", element: <EquipmentManage /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

export default function AppRouter() {
  const user = useUserStore((state) => state.user);

  let finalRouter = null;
  if (user?.role === "ADMIN" || user?.role === "SUPER") {
    finalRouter = adminRouter;
  } else if (user?.role === "USER") {
    finalRouter = userRouter;
  } else {
    finalRouter = guestRouter;
  }

  return (
    <Suspense
      fallback={<span className="loading loading-spinner text-neutral"></span>}
    >
      <RouterProvider key={user?.id} router={finalRouter} />
    </Suspense>
  );
}
