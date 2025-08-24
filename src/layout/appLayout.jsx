import { Header } from "./UI/header";
import { Footer } from "./UI/footer";
import { Outlet } from "react-router-dom";
export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
