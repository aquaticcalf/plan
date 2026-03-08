import { lazy } from "solid-js"
import { Router } from "@solidjs/router"
import RootLayout from "@/layouts/root"

const pages = [
  {
    path: "/",
    component: lazy(() => import("@/pages")),
  },
  {
    path: "*404",
    component: lazy(() => import("@/pages/404")),
  },
]

function App() {
  return <Router root={RootLayout}>{pages}</Router>
}

export default App
