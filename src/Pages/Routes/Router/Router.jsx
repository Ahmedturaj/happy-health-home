import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main/Main";
import LogIn from "../../Authentication/LogIn/LogIn";
import SignUp from "../../Authentication/SignUp/SignUp";
import Home from "../../HomePage/Home/Home";
import Medicines from "../../Medicines/Medicines";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/medicines", element: <Medicines /> },
      { path: "/login", element: <LogIn /> },
      { path: "/signUp", element: <SignUp /> },
    ],
  },
]);
