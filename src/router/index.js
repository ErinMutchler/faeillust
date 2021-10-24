import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/Contact";
import Artwork from "../views/Artwork";
import Traditional from "../views/Traditional";
import Digital from "../views/Digital";
import Comics from "../views/Comics";
import Animations from "../views/Animations";
import TraditionalIllustration from "../views/TraditionalIllustration";
import DigitalIllustration from "../views/DigitalIllustration";
import Comic from "../views/Comic";
import Animation from "../views/Animation";
import Admin from "../views/Admin";



const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/artwork",
    name: "Artwork",
    component: Artwork,
  },
  {
    path: "/artwork/traditional",
    name: "Traditional",
    component: Traditional,
  },
  {
    path: "/artwork/digital",
    name: "Digital",
    component: Digital,
  },
  {
    path: "/artwork/comics",
    name: "Comics",
    component: Comics,
  },
  {
    path: "/artwork/animations",
    name: "Animations",
    component: Animations,
  },
  {
    path: "/artwork/traditional/illustration/:id",
    name: "TraditionalIllustration",
    component: TraditionalIllustration,
    props: true,
  },
  {
    path: "/artwork/digital/illustration/:id",
    name: "DigitalIllustration",
    component: DigitalIllustration,
    props: true,
  },
  {
    path: "/artwork/comics/comic/:id",
    name: "Comic",
    component: Comic,
    props: true,
  },
  {
    path: "/artwork/animations/animation/:id",
    name: "Animation",
    component: Animation,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
