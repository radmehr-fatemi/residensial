//Style
import { yekan } from '@/utils/fonts'
import './globals.css'

export const metadata = {
  title: 'Buy Residential',
  description: 'Residential shopping for sell and buy residential ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={yekan.className}>{children}</body>
    </html>
  )
}
