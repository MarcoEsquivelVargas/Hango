import { MainProducts } from "app/components/home/MainProducts"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "✨ Hango",
  description: "Welcome to the Hango, an ecommerce from other century",
  keywords: ["ecommerce", "future", "world","technology"],
}

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  )
}
