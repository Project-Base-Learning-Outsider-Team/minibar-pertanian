import { createBrowserRouter } from "react-router-dom";
import SigninPage from "./pages/signin/page";
import SignupPage from "./pages/signup/page";
import MainLayout from "./layouts/main.layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [],
  },
  {
    path: "/sign-in",
    element: <SigninPage />,
  },
  {
    path: "/sign-up",
    element: <SignupPage />,
  },
]);

export default router;

