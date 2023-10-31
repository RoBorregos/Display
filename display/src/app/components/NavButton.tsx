'use client'
import { useRouter } from "next/navigation";

interface NBProps {
    label: string;
    icon: any;
}

const NavButton: React.FC<NBProps> = ({ label, icon: Icon }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/${label}`)
    }
    
    return (
        <button 
          onClick={handleClick} 
          className="mx-12 bg-[#707588] rounded hover:bg-sky-700 py-4 px-4">
            <Icon className="text-6xl font-semibold text-neutral-100 dark:text-neutral-200" href="#"/>
        </button>
        
    )
}

export default NavButton;