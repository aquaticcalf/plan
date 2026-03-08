import type { RouteSectionProps } from "@solidjs/router"

export default function RootLayout(props: RouteSectionProps) {
  return <div class="rootlayout">{props.children}</div>
}
