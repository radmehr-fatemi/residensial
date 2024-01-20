//font
import { yekan } from '@/utils/fonts';

//Style
import './globals.css';
import 'animate.css';


//Component
import Layout from '@/layout/Layout';
import NextAuthProvider from 'src/components/providers/NextAuthProvider';

export const metadata = {
  title: 'املاک| پروژه رادمهر',
  description: 'سایت خرید و فروش املاک ',
  icons: { icon: "./favicon.ico" }
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir='rtl'>
      <body className={yekan.className}>
        <NextAuthProvider  >
          <Layout>
            {children}
          </Layout>
        </NextAuthProvider>
      </body>
    </html>
  )
}
