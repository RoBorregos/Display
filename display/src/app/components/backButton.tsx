'use client'
import { useRouter } from "next/navigation";

const BackButton = () => {
    const router = useRouter();

    return (
        <button className="bg-emerald-500 py-2 px-4 rounded-lg w-24" onClick={() => router.push('/control')}>
            Back
        </button>
    )
}

export default BackButton;