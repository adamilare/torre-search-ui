import { Navigate, createBrowserRouter } from "react-router-dom";
import { Search, Favorite, NotFound } from "../pages";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/search" />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "favorite",
        element: <Favorite />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
