import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import { Contact } from "./pages/contact";
import { Country } from "./pages/country";
import { About } from "./pages/about";
import { Home } from "./pages/home";

import { AppLayout } from "./layout/AppLayout";
import { ErrorPage } from "./pages/errorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/country",
          element: <Country />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
