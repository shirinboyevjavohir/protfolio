import useId from "../hooks/useId";
// import pages
import Home from "../pages/Home";
import Works from "../pages/Works";
import About from "../pages/About";
import Contacts from "../pages/Contacts";

export const navbar = [
  {
    id: useId,
    element: <Home />,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <Works />,
    title: "Works",
    path: "/works",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <About />,
    title: "About-me",
    path: "/about",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <Contacts />,
    title: "Contacts",
    path: "/contacts",
    private: false,
    hidden: false,
  },
];
