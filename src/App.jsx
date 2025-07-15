import { Bounce, ToastContainer } from "react-toastify";
import AppRouter from "./routes/AppRoutes";

function App() {
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
