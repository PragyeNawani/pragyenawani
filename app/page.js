// app/page.js (App Router) or pages/index.js (Pages Router)
import Portfolio from '../components/Portfolio'
export const metadata = {
  title: 'Pragye Nawani',
  description: 'Full-Stack Web Developer 3D Portfolio',
  name: "google-site-verification",
  content: "33wU1RZEJBi2mnx_wpb9vGydNJcXXEL--jifn4PS0bY"
}
export default function Home() {
  return <Portfolio />
}
