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
      <div className="">{noHeaderFooter || <Navbar />}</div>
      <div className="min-h-[calc(100vh-290px)]">
        <Outlet />
      </div>
      <div className="">{noHeaderFooter || <Footer />}</div>
    </div>
  );
};

export default Main;
