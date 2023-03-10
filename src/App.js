
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import Login from "./pages/Login";
import Regester from "./pages/Regester";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Single from "./pages/Single"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './style.scss'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
     
      {
        path:'/post/:id',
        element:<Single/>
      },
      {
        path:'/write',
        element:<Write/>
      },
      {
        path:"/",
        element: <Home/>
      },

    ]
  },
  {
    path:'/regester',
    element: <Regester/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  
])

function App() {
  return (
    <div className="App">
      <div className="container-app">

      <RouterProvider router={router}/>
      </div>
      
    </div>
  );
}

export default App;
