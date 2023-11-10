'use client'
import { useRouter } from "next/navigation";
import { HiMiniInformationCircle } from "react-icons/hi2";

interface NBProps {
    route : string;
    image?: any;
    icon?: any;
}

const NavButton: React.FC<NBProps> = ({ route }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/${route}`)
    }
    
    return (

    <button 
      onClick={handleClick} 
      className="bg-[#707588] rounded hover:bg-[#a4abc8] active:bg-[#bec4dd] py-5 px-11 flex-auto">
        <HiMiniInformationCircle className="text-5xl font-semibold text-neutral-100 dark:text-neutral-200" href="#"
          />
      </button>
        
    )
}

export default NavButton;