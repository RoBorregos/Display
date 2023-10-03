'use client'
import Image from 'next/image'
import Caja from './components/caja'

export default function Home() {

  return (

    <div
      className="bg-black ...">
      {/* <Image 
             src="/images/roborregos_logo.png"
             fill={true}
             alt="RoBorregos Logo" 
             className="bg-black object-contain ..."
            /> */}
      <Caja nombre='Paco' />
      <Caja nombre='ale' />
    </div>
  )
}
