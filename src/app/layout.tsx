import Header from './components/Header'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-gray-50'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='relative max-w-[25rem] mx-auto bg-white'>
        <Header />
        <div className="mt-[5.8125rem] p-6">{children}</div>
      </body>
    </html>
  )
}
