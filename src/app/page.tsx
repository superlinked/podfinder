'use client';

import Image from 'next/image'
import Button from './components/Button'
import Icon from './components/Icon'
import { Poppins } from '@next/font/google'
import HowTo from './components/HowTo';

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "600", "700"] })

export default function Home() {
  return (
    <main className={`${poppins.className} bg-blue-50`}>
      <HowTo />
    </main>
  )
}
