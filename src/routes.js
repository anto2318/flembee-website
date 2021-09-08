import DefaultLayout from "./layouts/DefaultLayout";

import Landing from "./views/Landing";

let presentation_routes = [
  {
    path: "/",
    layout: DefaultLayout,
    component: Landing,
    name: "Landing"
  }
];

let routes = [...presentation_routes];
export { routes, presentation_routes };
