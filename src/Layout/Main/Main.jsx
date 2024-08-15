import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-290px)]">
        <Outlet />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
