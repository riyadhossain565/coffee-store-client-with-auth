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
        loader: () =>
          fetch("https://coffee-store-server-omega-inky.vercel.app/coffee"),
      },
      {
        path: "addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "updateCoffee/:id",
        element: <UpdatedCoffee />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-omega-inky.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "viewCoffee/:id",
        element: <ViewCoffee />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-omega-inky.vercel.app/coffee/${params.id}`
          ),
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
        loader: () =>
          fetch("https://coffee-store-server-omega-inky.vercel.app/users/"),
      },
    ],
  },
]);

export default Routes;
