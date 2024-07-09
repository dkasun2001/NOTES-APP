import Home from "./pages/Home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom"; 
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: `/dashboard`,
    element: <Home />,
  },
  {
    path: `/login`,
    element: <Login/>,
  },
  {
    path: `/signup`,
    element: <SignUp />,
  },
  
 
  
]);
  

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
