'use client'
import Action from "rbrgs/app/components/action";
import { FiMapPin } from "react-icons/fi";
import { GiRobotGrab } from "react-icons/gi";
import { GoPackageDependents } from "react-icons/go";
import { BsPerson, BsSearch, BsSignStop } from "react-icons/bs";
import Header from "rbrgs/app/components/header";
import BackButton from "rbrgs/app/components/backButton";


const CommandPage = () => {
    const actions = [
        { label: "Go ", description: "Make the robot move to a set location", icon: FiMapPin },
        { label: "Pick ", description: "Make the robot grab an object", icon: GiRobotGrab },
        { label: "Put ", description: "Give an object to a user", icon: GoPackageDependents },
        { label: "Find ", description: "Find someone?", icon: BsSearch },
        { label: "Introduce ", description: "Introduce to someone", icon: BsPerson },
        { label: "Stop ", description: "Make the robot stop", icon: BsSignStop }
    ]
    
    return (
        <div className="p-20 flex flex-col justify-between h-screen">
            <div>
                <Header title="Commands" />
                <p className="mt-2 text-neutral-500 text-lg mb-6">
                    Select the command to execute
                </p>
                <div className="grid grid-cols-3 gap-2 mr-16">
                    {actions.map((action, key) => (
                        <Action key={key} label={action.label} description={action.description} icon={action.icon || null} />
                    ))}
                </div>
            </div>
            <div className="self-center">
                <BackButton />
            </div>
        </div>

    )
}

export default CommandPage;