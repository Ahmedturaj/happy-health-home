import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main/Main";
import LogIn from "../../Authentication/LogIn/LogIn";
import SignUp from "../../Authentication/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/login", element: <LogIn /> },
      { path: "/signUp", element: <SignUp /> },
    ],
  },
]);
