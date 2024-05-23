import React from "react";
import CheckOutForm from "../Pages/CheckOutForm";

// ? Components...
const ShopPageSingle = React.lazy(() => import("../Pages/ShopPageSingle"));
const HomePage = React.lazy(() => import("../Pages/HomePage"));
const ProductsCom = React.lazy(() =>
  import("../Pages/FirstStoreComponentsHere/ProductsCom")
);
const ShopPagewithAdvertisement = React.lazy(() =>
  import("../Pages/ShopPagewithAdvertisement")
);
const CartPage = React.lazy(() => import("../Pages/CartPage"));
// ? Components...

export const App_Routes = [
  {
    link: "/",
    el: <HomePage />,
  },
  {
    link: "/products",
    el: <ProductsCom />,
  },
  {
    link: "/shoppage",
    el: <ShopPagewithAdvertisement />,
  },
  {
    link: "/shoppagesingle/:index",
    el: <ShopPageSingle />,
  },
  {
    link: "/shoppingcart",
    el: <CartPage />,
  },
  {
    link: "/shopcheckout", 
    el: <CheckOutForm />,
  },
  {
    link: "/*",
    el: <h1>Error 404</h1>,
  },
];
