'use client';
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter()

  const handleClick = () => {
    router.push('/camera')
  }

  return (
    <button 
         className="bg-black ..."
         onClick={handleClick}>
            <Image 
             src="/images/roborregos_logo.png"
             fill={true}
             alt="RoBorregos Logo" 
             className="bg-black object-contain ..."
            />
        </button>
  )
}
