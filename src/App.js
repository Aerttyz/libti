import React, { Suspense } from "react";
import Navbar from './components/navbar/Navbar';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingBar from "./components/loadingPage/Loading";

const LazyHome = React.lazy(() => import("./pages/home/Home"));
const LazyAuth = React.lazy(() => import("./pages/auth/Auth"));
const LazyContact = React.lazy(() => import("./pages/contact/Contact"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Suspense fallback={<LoadingBar />}>
          <LazyHome />
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
          <LazyAuth isLogin={true}/>
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
          <LazyAuth isLogin={false}/>
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
          <LazyContact />
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
