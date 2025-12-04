import './globals.css'

export const metadata = {
  title: 'Pragye Nawani',
  description: 'Full-Stack Web Developer 3D Portfolio',
  name: "google-site-verification",
  content: "33wU1RZEJBi2mnx_wpb9vGydNJcXXEL--jifn4PS0bY"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
