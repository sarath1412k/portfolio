import HomePage from "../pages/HomePage";
import LearningSkills from "../pages/LearingSkills";
import PageNotFound from "../pages/PageNotFound";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import { Navigate } from "react-router-dom";
export const publicRoutes = [
  { path: "/", component: <Navigate to="/home" replace /> },
  { path: "/home", component: <HomePage />, index: true },
  { path: "/skills", component: <Skills /> },
  { path: "/projects", component: <Projects /> },
  // {path:"/experience", component:< />}, 
  { path: "/interests&learning", component: <LearningSkills /> },
  { path: "*", component: <PageNotFound /> },
]