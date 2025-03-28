import { lazy } from "react";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: "Hehe",
  },
  {
    path: "alert",
    Component: lazy(() => import("@/pages/@kirakit/components/alert.tsx")),
  },
  {
    path: "badge",
    Component: lazy(() => import("@/pages/@kirakit/components/badge.tsx")),
  },
]);
