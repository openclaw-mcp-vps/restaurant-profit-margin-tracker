import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Restaurant Profit Margin Tracker',
  description: 'Track real-time profit margins per menu item. Connects to POS and inventory systems to calculate actual profit margins per dish.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b67649a4-0762-4916-af87-b9850ac5e83c"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
