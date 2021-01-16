
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";

import UpcomingContests from "views/examples/UpcomingContests.js";
import Placements from "views/examples/Placements.js";
import Open from "views/examples/Open.js";


var routes = [
  {
    path: "/index",
    name: "Home",
    icon: "ni ni-shop text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-blue",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/upcoming-contests",
    name: "Upcoming Contests",
    icon: "ni ni-trophy text-red",
    component: UpcomingContests,
    layout: "/admin"
  },
  {
    path: "/placement-records",
    name: "Placement Records",
    icon: "ni ni-bullet-list-67 text-black",
    component: Placements,
    layout: "/admin"
  },
  {
    path: "/open-opportunities",
    name: "Open Opportunities",
    icon: "ni ni-air-baloon text-yellow",
    component: Open,
    layout: "/admin"

  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  }

];
export default routes;
