'use client'
import TasksButton from "rbrgs/app/components/tasksButton";
import { FaCoffee } from "react-icons/fa";
import { BsFillHandbagFill } from "react-icons/bs";
import { MdSensorDoor } from "react-icons/md";
import Header from "rbrgs/app/components/header";
import BackButton from "rbrgs/app/components/backButton";


const TasksPage = () => {
    const actions = [
        { task: "Breakfast ", description: "Ask FRIDA to prepare breakfast", icon: FaCoffee },
        { task: "Luggage ", description: "Ask FRIDA to carry your luggage", icon: BsFillHandbagFill },
        { task: "Recepcionist ", description: "Ask FRIDA to receive new guests", icon: MdSensorDoor },
    ]
    
    return (
        <div className="p-8 h-screen">
            <div className="h-1/6">
                <Header title="Tasks" />
                <p className="mt-2 text-neutral-500 text-lg mb-6">
                    Select the task to execute
                </p>
            </div>
            <div className="flex flex-col justify-between h-5/6">
                <div className="grid grid-cols-3 gap-2 mr-16 h-5/6">
                    {actions.map((action, key) => (
                        <TasksButton key={key} task={action.task} description={action.description} icon={action.icon || null} />
                    ))}
                </div>
                <div className="self-center mt-16">
                    <BackButton />
                </div>
            </div>
            
        </div>

    )
}

export default TasksPage;