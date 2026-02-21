import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import { Contact } from "./pages/contact";
import { Country } from "./pages/country";
import { About } from "./pages/about";
import { Home } from "./pages/home";

import { AppLayout } from "./layout/AppLayout";
import { ErrorPage } from "./pages/errorPage";
import { getCountryData } from "./utils/getCountryData";
import { Loading } from "./layout/UI/loader";
import { ReadMore } from "./pages/readMore";
import { getReadmoreData } from "./utils/getReadmoreData";

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
          loader: getCountryData,
          hydrateFallbackElement: <Loading />,
        },
        {
          path: "/country/:countryName",
          element: <ReadMore />,
          loader: getReadmoreData,
          hydrateFallbackElement: <Loading />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider
      router={router}
      fallbackElement={<Loading />}
    ></RouterProvider>
  );
}
export default App;
