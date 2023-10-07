'use client'
import Action from "rbrgs/app/components/action";
import { FiMapPin } from "react-icons/fi";
import { GiRobotGrab } from "react-icons/gi";
import { GoPackageDependents } from "react-icons/go";
import { BsSignStop } from "react-icons/bs";
import Header from "rbrgs/app/components/header";

const ControlPage = () => {
    const actions = [
        { label: "Move to ", description: "Make the robot move to a set location", icon: FiMapPin },
        { label: "Grab ", description: "Make the robot grab an object", icon: GiRobotGrab },
        { label: "Deliver ", description: "Give an object to a user", icon: GoPackageDependents },
        { label: "Stop ", description: "Make the robot stop", icon: BsSignStop }
    ]
    return (
        <div className="p-28">
            <Header title="Commands" />
            <p className="mt-2 text-neutral-500 text-lg mb-6">
                Select the command to execute
            </p>
            <div className="grid grid-cols-2">
                {actions.map((action, key) => (
                    <Action key={key} label={action.label} description={action.description} icon={action.icon || null} />
                ))}
            </div>

        </div>
    )
}

export default ControlPage;