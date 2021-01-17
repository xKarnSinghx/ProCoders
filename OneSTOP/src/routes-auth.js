import Home from "views/Home.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";



var routesAuth = [
  {
    path: "/home",
    name: "Home",
    icon: "ni ni-shop text-primary",
    component: Home,
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
  },
  
];
export default routesAuth;
