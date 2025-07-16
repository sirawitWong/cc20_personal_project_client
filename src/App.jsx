import { Bounce, ToastContainer } from "react-toastify";
import AppRouter from "./routes/AppRoutes";
import useUserStore from "./stores/authStore";
import { useEffect } from "react";
import isTokenExpired from "./utils/isTokenExpired";

function App() {
  const token = useUserStore((state) => state.token);
  const logout = useUserStore((state) => state.logout);
  useEffect(() => {
    if (isTokenExpired(token)) {
      logout();
    }
  }, []);
  return (
    <>
      <AppRouter />
      <ToastContainer
        style={{ zIndex: 9999 }}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
