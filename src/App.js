import React, { Suspense } from "react";
import Navbar from './components/navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingBar from "./components/loadingPage/Loading";
import SearchContent from "./pages/search/SearchContent";
import { AuthProvider } from "./services/AuthContext";
import PrivateRoute from "./services/PrivateRoute";

const LazyHome = React.lazy(() => import("./pages/home/Home"));
const LazyAuth = React.lazy(() => import("./pages/auth/Auth"));
const LazyContact = React.lazy(() => import("./pages/contact/Contact"));
const LazyUpload = React.lazy(() => import("./pages/upload/Upload"));
const LazyNotFound = React.lazy(() => import("./pages/notFound/NotFound"));
const LazyRequests = React.lazy(() => import("./pages/requests/Requests"));
const LazySearch = React.lazy(() => import("./pages/search/Search"));
const LazyForum = React.lazy(() => import("./pages/forum/Forum"));

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
          <PrivateRoute element={<LazyUpload />} />
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
          <PrivateRoute element={<LazyRequests />} />
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
          <PrivateRoute element={<LazyForum />} />
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
    path: "/search",
    element: (
      <>
        <Navbar />
        <Suspense fallback={<LoadingBar />}>
          <LazySearch />
        </Suspense>
      </>
    ),
    children: [
      {
        path: ":filter",
        element: <SearchContent />,
      },
    ],
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
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        theme="colored"
      />
    </AuthProvider>
  );
}

export default App;
