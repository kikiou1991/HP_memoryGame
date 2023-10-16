"use client"
import Image from 'next/image'
import Cards from './components/card'

export default function Home() {
  return (
    <div className="w-screen h-screen dark text-foreground bg-background p-8 flex items-start justify-center">
      <Cards />
    </div>
  )
}
