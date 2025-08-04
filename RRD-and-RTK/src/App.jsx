import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Products, Contact } from "./index";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
