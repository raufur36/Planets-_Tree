import {
  createBrowserRouter,

} from "react-router";
import MainLayouts from "../../Layouts/MainLayouts/MainLayouts";
import Home from "../../Layouts/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children:[
        {
            index: true,
            Component: Home,


        }
    ]
  },
]);

export default router;