import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter=createBrowserRouter([{
  path:"/",
  element:<AppLayout/>,
  errorElement:<Error/>

},{
  path:"/about",
  element:<About/>,
  errorElement:<Error/>

},{
  path:"/contact",
  element:<Contact/>,
  errorElement:<Error/>

}]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
