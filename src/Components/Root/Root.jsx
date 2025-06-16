import {
  createBrowserRouter,

} from "react-router";
import MainLayouts from "../../Layouts/MainLayouts/MainLayouts";
import Home from "../../Layouts/Home/Home";
import Register from "../../Pages/Register/Register";
import Login from "../../Pages/Login/Login";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import AddPlant from "../../Layouts/AddPlant/AddPlant";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'register',
        Component: Register,
      },
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'addplant',
        Component: AddPlant,
      }
    ]
  },
]);

export default router;