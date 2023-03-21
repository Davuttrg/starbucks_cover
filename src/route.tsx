import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Login } from "./pages/login";
import { Menu } from "./pages/menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
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
