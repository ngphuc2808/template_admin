import { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

import ErrorBoundary from "@/components/common/error.boundary";
import WrapperRouteComponent from "@/routers/config";
import MainLayout from "@/screens/main.layout";
import NotfoundPage from "@/components/common/notfound";

const Home = lazy(() => import("@/modules/home/pages"));

export const router = () => {
  const routes = [
    {
      path: "/",
      element: (
        <ErrorBoundary>
          <WrapperRouteComponent titleId="CORE:page.home.title">
            <MainLayout />
          </WrapperRouteComponent>
        </ErrorBoundary>
      ),
      children: [
        {
          index: true,
          element: (
            <WrapperRouteComponent titleId="CORE:page.home.title">
              <Home />
            </WrapperRouteComponent>
          ),
        },
      ],
    },
    {
      path: "not-found",
      element: (
        <WrapperRouteComponent titleId="CORE:page.notFound.title">
          <NotfoundPage />
        </WrapperRouteComponent>
      ),
    },
    { path: "*", element: <Navigate to="/not-found" replace /> },
  ];

  return createBrowserRouter(routes);
};

export default router;
