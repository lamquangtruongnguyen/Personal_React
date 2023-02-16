import mysqlImg from "../assets/mysql.png";
import bootstrapImg from "../assets/bootstrap.png";
import materialImg from "../assets/material.png";
import phpImg from "../assets/php.png";
import reactImg from "../assets/react.png";
import tailwindImg from "../assets/tailwind.png";
import rapidImg from "../assets/rapid.png";

export const navItems = [
  { id: 1, name: "about", path: "#" },
  { id: 2, name: "projects", path: "#projects" },
  { id: 3, name: "contact", path: "#contact" },
];

export const projects = [
  {
    id: 1,
    name: "Smarter Money",
    desc: "Basic budget tracking web-app with CRUD operations",
    tech: ["PHP", "MySQL", "BootstrapCSS"],
    icons: [phpImg, mysqlImg, bootstrapImg],
    url: "https://truongnguyen.me/",
    img: "",
  },
  {
    id: 2,
    name: "Retube",
    desc: "A cloned Youtube app with basic searching functionalities",
    tech: ["ReactJS", "MaterialUI", "RapidAPI"],
    icons: [reactImg, materialImg, rapidImg],
    url: "https://retube.netlify.app/",
    img: "",
  },
  {
    id: 3,
    name: "Manage",
    desc: "A challenge on frontendmentor",
    tech: ["ReactJS", "TailwindCSS"],
    icons: [reactImg, tailwindImg],
    url: "https://main--tailwind-manage-practice.netlify.app/",
    img: "",
  },
];


