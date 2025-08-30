import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider, useLocation } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";
import UserContexts from "./utils/UserContexts";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const Grocery = lazy(()=>import("./components/Grocery"))


const AppLayout = () => {
  const[userName,setUserName] = useState("");
  const location = useLocation();
  useEffect(()=>{
   const data = {
    name: "Samruddhi"
   }
   setUserName(data.name);
  },[])

   // List of routes where footer should show
  const showFooterRoutes = ["/about", "/contact", "/grocery"];
  return (
    <Provider store={appStore}>
     <UserContexts.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="app flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow">
            <Outlet />
          </div>

          {/* ✅ Conditionally render Footer */}
          {showFooterRoutes.includes(location.pathname) && <Footer/>}
           <Toaster  position="top-center"c reverseOrder={false} /> {/* ✅ Toasts */}
        </div>
     </UserContexts.Provider>
     </Provider>
  );
};

  

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/grocery",
        element:
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery/>
          </Suspense>
        
      },{
      path:"/cart",
      element: <Cart/>
      },
      {
        path:"/city/kolhapur/:resId",
        element:<RestaurantMenu/>
      }
    ],
    errorElement: <Error />,
  },  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
