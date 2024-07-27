import Jobgrid from "./pages/Jobgrid.page";
import Joblist from "./pages/Joblist.page";

export const routers = [
  {
    id: 1,
    path: "/",
    element: <Joblist />,
  },
  {
    id: 2,
    path: "/job-list",
    element: <Joblist />,
  },
  {
    id: 3,
    path: "/job-grid",
    element: <Jobgrid />,
  },
];
