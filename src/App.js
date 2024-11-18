import React, { Suspense } from "react";
import Navbar from './components/navbar/Navbar';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingBar from "./components/loadingPage/Loading";

const LazyLogin = React.lazy(() => import("./pages/login/Login"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Suspense fallback={<LoadingBar />}>
          <div>Home</div>
        </Suspense>
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <Suspense fallback={<LoadingBar />}>
          <LazyLogin />
        </Suspense>
      </>
    ),
  },
  {
    path: "/cadastro",
    element: (
      <>
        <Navbar />
        <Suspense fallback={<LoadingBar />}>
          <div>Cadastro</div>
        </Suspense>
      </>
    ),
  },
  {
    path: "/upload",
    element: (
      <>
        <Navbar />
        <Suspense fallback={<LoadingBar />}>
          <div>Upload</div>
        </Suspense>
      </>
    ),
  },
  {
    path: "/requests",
    element: (
      <>
        <Navbar />
        <Suspense fallback={<LoadingBar />}>
          <div>Requests</div>
        </Suspense>
      </>
    ),
  },
  {
    path: "/forum",
    element: (
      <>
        <Navbar />
        <Suspense fallback={<LoadingBar />}>
          <div>Forum</div>
        </Suspense>
      </>
    ),
  },
  {
    path: "/contato",
    element: (
      <>
        <Navbar />
        <Suspense fallback={<LoadingBar />}>
          <div>Contato</div>
        </Suspense>
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
