import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Products, Contact } from "./index";
import HomeHeader from "./components/HomeHeader";
import HomeMain from "./components/HomeMain";
import HomeFooter from "./components/HomeFooter";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <h2>somethings went wrong</h2>,
      children: [
        {
          index: true,
          element: <HomeHeader />,
        },
        {
          path: "main",
          element: <HomeMain />,
        },
        {
          path: "footer",
          element: <HomeFooter />,
        },
      ],
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
