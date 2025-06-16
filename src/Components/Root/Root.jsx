import {
  createBrowserRouter,

} from "react-router";
import MainLayouts from "../../Layouts/MainLayouts/MainLayouts";
import Home from "../../Layouts/Home/Home";
import Register from "../../Pages/Register/Register";
import Login from "../../Pages/Login/Login";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import AddPlant from "../../Pages/AddPlant/AddPlant";
import PlantsDetails from "../../Pages/PlantsDetails/PlantsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/plant'),
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
      },
      {
        path: '/plantsdetails/:id',
        loader: ({params}) => fetch(`http://localhost:3000/plant/${params.id}`),
        Component: PlantsDetails
      }
    ]
  },
]);

export default router;