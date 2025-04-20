import { lazy, Suspense } from "react";
import { Layout } from "../components";

const Blog = lazy(() => import("../pages/Blogs/Blog"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const Experience = lazy(() => import("../pages/Experience/Experience"));
const Home = lazy(() => import("../pages/Home/Home"));
const Infor = lazy(() => import("../pages/Infor/Infor"));
const Projects = lazy(() => import("../pages/Projects/Projects"));

const withSuspense = (Component) => (
  <Suspense fallback={<div>Đang tải trang...</div>}>
    {Component}
  </Suspense>
);

const publicRouter = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: withSuspense(<Home />)
      },
      {
        path: "/home",
        element: withSuspense(<Home />)
      },
      {
        path: "/projects",
        element: withSuspense(<Projects />)
      },
      {
        path: "/infor",
        element: withSuspense(<Infor />)
      },
      {
        path: "/experience",
        element: withSuspense(<Experience />)
      },
      {
        path: "/contact",
        element: withSuspense(<Contact />)
      },
      {
        path: "/blog",
        element: withSuspense(<Blog />)
      },
      {
        path: "*",
        element: withSuspense(<Home />)
      }
    ]
  }
];

export default publicRouter;
