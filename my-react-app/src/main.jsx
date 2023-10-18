import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProfilePage } from "./pages/profile.jsx";
import { DetailProdukPage } from "./pages/detailProduk.jsx";
import { Provider } from "react-redux";
import { TotalPriceProvider } from "./context/TotalPrice.jsx";
import store from "./redux/store";
import React from "react";
import ReactDOM from "react-dom/client";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import ErrorPage from "./pages/404.jsx";
import ProductPage from "./pages/products.jsx";
import DarkModeContextProvider from "./context/DarkMode.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="root">Hello World!</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/product/:id",
    element: <DetailProdukPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <TotalPriceProvider>
          <RouterProvider router={router}></RouterProvider>
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
);
