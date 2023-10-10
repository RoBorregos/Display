'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface NavProps {
    icon: string;
    url: string;
}

const NavButton:React.FC<NavProps> = ({icon, url}) => {

    const router = useRouter()

    const handleClick = () => {
        router.push(url)
    }

    return (
        <button 
         className="bg-black ..."
         onClick={handleClick}>
            <Image 
             src={icon}
             height={50}
             width={50}
             alt="Nav_Icon" 
             className="bg-black object-contain ..."
            />
        </button>
    )
}

export default NavButton;