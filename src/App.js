import Login from "./pages/login/Login";
import Navbar from './components/navbar/Navbar';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <div>Home</div>
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <Login />
      </>
    )
  },
  {
    path: "/upload",
    element: (
      <>
        <Navbar />
        <div>Upload</div>
      </>
    ),
  },
  {
    path: "/requests",
    element: (
      <>
        <Navbar />
        <div>Requests</div>
      </>
    ),
  },
  {
    path: "/forum",
    element: (
      <>
        <Navbar />
        <div>Forum</div>
      </>
    ),
  },
  {
    path: "/contato",
    element: (
      <>
        <Navbar />
        <div>Contato</div>
      </>
    ),
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
