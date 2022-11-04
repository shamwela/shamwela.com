import type { ReactNode } from 'react'
import Footer from 'components/Footer'
import { pilatWideBoldFont } from 'utilities/pilatWideBoldFont'
import 'styles/global.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <style jsx global>{`
        h1,
        h2,
        h3 {
          font-family: ${pilatWideBoldFont.style.fontFamily};
        }
      `}</style>
      <main className=' mx-auto flex max-w-[70ch] flex-col p-5'>
        {children}
      </main>
      <Footer />
    </html>
  )
}
