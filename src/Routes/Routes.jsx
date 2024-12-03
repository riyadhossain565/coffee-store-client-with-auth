import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdatedCoffee from "../pages/UpdatedCoffee";
import ViewCoffee from "../pages/ViewCoffee";
import ErrorPage from "../pages/ErrorPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Users from "../pages/Users";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "updateCoffee/:id",
        element: <UpdatedCoffee />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "viewCoffee/:id",
        element: <ViewCoffee />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "users",
        element: <Users />,
        loader: () => fetch("http://localhost:5000/users/"),
      },
    ],
  },
]);

export default Routes;
