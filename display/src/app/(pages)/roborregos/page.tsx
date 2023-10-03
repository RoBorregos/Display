import Image from 'next/image'
import logo from '/Users/fsp/Roborregos/HRI_Home/Display/display/public/images/roborregos_logo.png'

const ControlPage = () => {
    return (
        <div 
         className="bg-black ...">
            <Image 
             src={logo} 
             fill={true}
             alt="RoBorregos Logo" 
             className="bg-black object-contain ..."
            />
        </div>

    )
}

export default ControlPage;