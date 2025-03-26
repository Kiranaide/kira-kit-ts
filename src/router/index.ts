import { lazy } from "react";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: lazy(() => import("@/pages/@kirakit/components/alert.tsx")),
  },
]);
