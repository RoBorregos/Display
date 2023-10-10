'use client'
import { useRouter } from "next/navigation";

interface ActionProps {
    label: string;
    description?: string
    icon: any;
}

const Action: React.FC<ActionProps> = ({ label, description, icon: Icon }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/control/commands?id=${label.replace(" ", "").toLowerCase()}`)
    }

    return (
        <button onClick={handleClick}>
            <div className="bg-neutral-800 hover:bg-neutral-700 my-4 mx-8 p-4 rounded-xl ring-1 ring-offset-0 ring-neutral-500 flex flex-col justify-center">
                <div className="bg-neutral-900 p-2 w-fit rounded-lg self-center mb-3">
                    <Icon className="text-emerald-400 text-2xl" />
                </div>
                <h1 className="font-mono text-xl text-gray-100">
                    {label}
                </h1>
                <p className="text-neutral-400">
                    {description}
                </p>
            </div>
        </button>
    )
}

export default Action;