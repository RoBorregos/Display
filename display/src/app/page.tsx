import Image from 'next/image'

export default function Home() {
  return (
    <div 
         className="bg-black ...">
            <Image 
             src="/images/roborregos_logo.png"
             fill={true}
             alt="RoBorregos Logo" 
             className="bg-black object-contain ..."
            />
        </div>
  )
}
