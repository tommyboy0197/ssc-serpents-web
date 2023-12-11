import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom";
import { useState } from "react";

import RootLayout from "./Layouts/Rootlayout";
import Home from "./Pages/Home";
import Players from "./Pages/Players";
import About from "./Pages/About";
import Player from "./Pages/Player";
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home />} />
      <Route path="players" element={<Players />} />
      <Route path="about" element={<About />} />
      <Route path="players/:playername" element={<Player/>} />
    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}