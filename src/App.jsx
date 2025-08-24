import "./App.css";
import { About } from "./pages/about";
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { Country } from "./pages/country";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./layout/appLayout";
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
        { path: "/about", element: <About /> },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/country",
          element: <Country />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
