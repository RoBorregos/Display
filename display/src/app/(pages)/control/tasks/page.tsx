'use client'
import Action from "rbrgs/app/components/tasksButton";
import { FaCoffee } from "react-icons/fa";
import { MdSensorDoor } from "react-icons/md";
import { BsFillHandbagFill } from "react-icons/bs";
import Header from "rbrgs/app/components/header";
import BackButton from "rbrgs/app/components/backButton";

const TasksPage = () => {
    const actions = [
        { task: "Breakfast ", description: "Ask FRIDA to prepare some breakfast", icon: FaCoffee },
        { task: "Luggage ", description: "Ask FRIDA to carry your luggage", icon: BsFillHandbagFill },
        { task: "Recepcionist ", description: "Ask FRIDA to receive new guests", icon: MdSensorDoor },
    ]
    
    return (
        <div className="p-20 flex flex-col justify-between h-screen">
            <div>
                <Header title="Tasks" />
                <p className="mt-2 text-neutral-500 text-lg mb-6">
                    Select the task to execute
                </p>
                <div className="grid grid-cols-3 gap-2 mr-16">
                    {actions.map((action, key) => (
                        <Action key={key} task={action.task} description={action.description} icon={action.icon || null} />
                    ))}
                </div>
            </div>
            <div className="self-center">
                <BackButton />
            </div>
        </div>

    )
}

export default TasksPage;