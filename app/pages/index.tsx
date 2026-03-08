import "@/styles/index.css"
import { useNavigate } from "@solidjs/router"

export default function Index() {
  const navigate = useNavigate()

  return (
    <div class="root">
      <h1>plan, like a mad man!</h1>
      <button
        onClick={() => {
          navigate("/404")
        }}
      >
        click here, when ready
      </button>
    </div>
  )
}
