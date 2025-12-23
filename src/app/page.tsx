import HomePage from "@/components/ClientHomePage"
import type { Metadata, Viewport } from "next"

export function generateViewport(): Viewport {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  }
}

export default async function Page() {
  return <HomePage />
}
