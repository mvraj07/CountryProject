import { Header } from "./UI/header";
import { Footer } from "./UI/footer";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="app">
      <div className="Heared">
        <Header />
      </div>
      <div className="Outlet">
        <Outlet />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};
