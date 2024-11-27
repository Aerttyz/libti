import React, { Suspense } from "react";
import Navbar from './components/navbar/Navbar';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingBar from "./components/loadingPage/Loading";

const LazyHome = React.lazy(() => import("./pages/home/Home"));
const LazyAuth = React.lazy(() => import("./pages/auth/Auth"));
const LazyContact = React.lazy(() => import("./pages/contact/Contact"));
const LazyUpload = React.lazy(() => import("./pages/upload/Upload"));
const LazyNotFound = React.lazy(() => import("./pages/notFound/NotFound"));
const LazyRequests = React.lazy(() => import("./pages/requests/Requests"));

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
          <LazyAuth isLogin={true} />
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
          <LazyAuth isLogin={false} />
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
          <LazyUpload />
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
          <LazyRequests />
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
    path: "/search/:category/:keyword",
    element: (
      <>
        <Navbar />
        <Suspense fallback={<LoadingBar />}>
          <div>Search</div>
        </Suspense>
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <Navbar />
        <Suspense fallback={<LoadingBar />}>
          <LazyNotFound />
        </Suspense>
      </>
    ),
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
