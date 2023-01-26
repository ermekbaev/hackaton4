import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import AboutUsPage from "../pages/AboutUsPage";
import AdminPage from "../pages/AdminPage";
import OurPartnersPage from "../pages/OurPartnersPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/products",
      element: <ProductsPage />,
      id: 2,
    },
    {
      link: "/partners",
      element: <OurPartnersPage />,
      id: 3,
    },
    {
      link: "/about",
      element: <AboutUsPage />,
      id: 4,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 5,
    },
    {
      link: "/products/:id",
      element: <ProductDetailsPage />,
      id: 6,
    },
  ];

  return (
    <div>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </div>
  );
};

export default MainRoutes;
