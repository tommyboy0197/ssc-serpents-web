import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom";

import RootLayout from "./Layouts/Rootlayout";
import Home from "./Pages/Home";
import Players from "./Pages/Players";
import ErrorPage from "./Pages/Error";
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="*" element={<RootLayout/>}>
      <Route path="*" element={<ErrorPage />} />
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