'use client'
import Action from "rbrgs/app/components/actionButton";
import { FiMapPin } from "react-icons/fi";
import { GiRobotGrab, GiGrab } from "react-icons/gi";
import { GoPackageDependents } from "react-icons/go";
import { BsPerson, BsSearch, BsSignStop } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa";
import { FaHandHoldingHand } from "react-icons/fa6";
import Header from "rbrgs/app/components/header";
import BackButton from "rbrgs/app/components/backButton";


const CommandPage = () => {
    const actions = [
        { label: "Go ", description: "Go somewhere", icon: FiMapPin },
        { label: "Find ", description: "Find someone", icon: BsSearch },
        { label: "Identify ", description: "Identify someone", icon: GoPackageDependents },
        { label: "Interact ", description: "Interact with someone", icon: GiRobotGrab },
        { label: "Ask ", description: "Ask something to someone", icon: FaQuestion },
        { label: "Follow ", description: "Follow someone", icon: BsPerson },
        { label: "Pick ", description: "Pick something up", icon: GiRobotGrab },
        { label: "Place ", description: "Place something down", icon: GoPackageDependents },
        { label: "Grab ", description: "Grab something from someone", icon: GiGrab },
        { label: "Give ", description: "Give something to someone", icon: FaHandHoldingHand }
    ]
    
    return (
        <div className="p-8 h-screen">
            <div className="h-1/6">
                <Header title="Commands" />
                <p className="mt-2 text-neutral-500 text-lg mb-6">
                    Select the command to execute
                </p>
            </div>
            <div className="flex flex-col justify-between h-5/6">
                <div className="grid grid-cols-5 gap-2 mr-16 h-52">
                    {actions.map((action, key) => (
                        <Action key={key} label={action.label} description={action.description} icon={action.icon || null} />
                    ))}
                </div>
                <div className="self-center mt-16">
                    <BackButton />
                </div>
            </div>
            
        </div>

    )
}

export default CommandPage;