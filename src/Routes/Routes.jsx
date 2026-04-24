import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="mx-auto h-screen flex justify-center items-center text-5xl font-bold">
        Hello Online Game World
      </div>
    ),
  },
]);

export default router;
