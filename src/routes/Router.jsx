import { createBrowserRouter } from "react-router-dom";
import { MainLayoutComponents } from "../components";
import { ErrorPages, HomePages, MyCartPages, ProductDetailPages } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoutComponents />,
    errorElement:<ErrorPages/>,
    children: [
      {
        path: "/",
        element: <HomePages />,
      },
      {
        path: "/my-cart",
        element: <MyCartPages />,
      },
      {
        path: "/product-detail/:id",
        element: <ProductDetailPages />,
      },
    ],
  },
]);
export default router