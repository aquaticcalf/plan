import { lazy } from "solid-js"
import { Router } from "@solidjs/router"

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
  return <Router>{pages}</Router>
}

export default App
