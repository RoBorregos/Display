'use client'
import { useRouter } from "next/navigation";
import { getInfo } from "../utils/actions/getCommandInfo";

interface ActionProps {
    label: string;
    description?: string
    icon: any;
}

const ActionButton: React.FC<ActionProps> = ({ label, description, icon: Icon }) => {
    const router = useRouter();

    const handleClick = async() => {
        const id = `/control/commands/command?id=${label.replace(" ", "").toLowerCase()}`;
        // const info = await getInfo(id);
        router.push(id)
        console.log(id)
    }

    return (
        <button onClick={handleClick}>
            <div className="bg-neutral-800 hover:bg-neutral-700 my-4 mx-8 p-2 rounded-xl ring-1 ring-offset-0 ring-neutral-500 flex flex-col justify-center h-full w-full">
                <div className="bg-neutral-900 p-2 w-fit rounded-lg self-center mb-3">
                    <Icon className="text-emerald-400 text-xl" />
                </div>
                <h1 className="font-mono text-lg text-gray-100">
                    {label}
                </h1>
                <p className="text-neutral-400 text-sm">
                    {description}
                </p>
            </div>
        </button>
    )
}

export default ActionButton;