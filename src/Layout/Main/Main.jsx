import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();

  const noHeaderFooter =
    location.pathname.includes("logIn") || location.pathname.includes("signUp");
  console.log(location.pathname);
  return (
    <div>
      {noHeaderFooter || <Navbar />}
      <div className="pt-24 min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
