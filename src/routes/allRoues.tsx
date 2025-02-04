import React from "react";
import HomePage from "../pages/HomePage";
import LearningSkills from "../pages/LearingSkills";
import PageNotFound from "../pages/PageNotFound";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import { Navigate } from "react-router-dom";

const scrollableRoutes = () => {

  const routeData = [
    {key:"",component:<HomePage/>},
    {key:"",component:<Skills/>},
    {key:"",component:<Projects/>},
    {key:"",component:<LearningSkills/>},
    {key:"",component:<HomePage/>},
  ]
  return (
    <React.Fragment>
      {
        routeData.map((data:any) => {
          return (
            <div key={data.key} id={data.id} data-section={data.key}>
              {data.component}
            </div>
          )
        })
      }
    </React.Fragment>
  )
}

export const publicRoutes = [
  { path: "/", component: <Navigate to="/home" replace /> },
  { path: "/home", component: <HomePage />, index: true },
  { path: "/skills", component: <Skills /> },
  { path: "/projects", component: <Projects /> },
  // {path:"/experience", component:< />}, 
  { path: "/interests&learning", component: <LearningSkills /> },
  { path: "*", component: <PageNotFound /> },
]