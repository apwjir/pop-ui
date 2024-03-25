import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const routes = [
    {
      path: "/",
      lazy: () => import("./components/Hello.tsx"),
    },
    {
      path: "/game",
      lazy: () => import("./components/Game.tsx"),
    },
    {
      path: "/profile",
      lazy: () => import("./components/Profile.tsx"),
    },
    {
      path: "/leaderboard",
      lazy: () => import("./components/Leaderboard.tsx"),
    },
    {
      path: "/menu",
      lazy: () => import("./components/Menu.tsx"),
    },
    {
      path: "/setting",
      lazy: () => import("./components/Setting.tsx"),
    },
    {
      path: "/home",
      lazy: () => import("./components/Home.tsx"),
    },
    {
      path: "/ingame",
      lazy: () => import("./components/Ingame.tsx"),
    },
    {
      path: "/table",
      lazy: () => import("./components/Table.tsx"),
    },
  ];
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default App;
