import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Menu } from "./pages/menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
