import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";



const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children: [
        {
          path: "",
          element: <Navigate to={"/category/01"}></Navigate>,
        },
        {
          path: "/category/:id",
          element:<CategoryNews></CategoryNews>,
          loader: ({params}) =>
            fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
        },
      ],
    },
    {
      path: "/news",
      element: <h1>News layout</h1>,
    },
    {
      path: "/auth",
      element: <h1>Login</h1>,
    },
    {
      path: "*",
      element: <h1>Error</h1>,
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
    },
  }
);

export default router;