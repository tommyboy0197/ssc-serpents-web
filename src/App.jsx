import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom";
import { useState } from "react";

import RootLayout from "./Layouts/Rootlayout";
import Home from "./Pages/Home";
import Players from "./Pages/Players";
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home />} />
      <Route path="players" element={<Players />} />
    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}