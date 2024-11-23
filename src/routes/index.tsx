import React from "react"
import { Routes, Route } from "react-router-dom"
import { publicRoutes } from "./allRoues"
import Layout from "../layouts/Layout"

const Router: React.FC = () => {

  return (
    <Routes>
      <Route>
        {
          publicRoutes.map((data, idx) => {
            return (
              <Route
                key={`${idx}+${data.path}`}
                path={data.path}
                element={<Layout>{data.component}</Layout>} />
            )
          })
        }
      </Route>
    </Routes>
  )
}

export default Router