import { createHashRouter } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

const router = createHashRouter(routes);

export default router;
