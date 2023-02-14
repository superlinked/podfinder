import Image from 'next/image'
import { Poppins } from '@next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "700"] })

export default function Home() {
  return (
    <main className={`${poppins.className} bg-blue-50`}>
      home
    </main>
  )
}
