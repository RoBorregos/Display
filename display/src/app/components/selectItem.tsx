'use client';

interface SelectItemProps {
    label: string;
    onClick: () => void;
}

const SelectItem: React.FC<SelectItemProps> = ({ label, onClick }) => {
    return (
        <div>
            <button onClick={onClick} className="text-gray-100 bg-neutral-800 hover:bg-neutral-700 my-4 mx-8 p-4 rounded-xl ring-1 ring-offset-0 ring-neutral-500 flex flex-col justify-center w-full">
                {label}
            </button>
        </div>
    )
}

export default SelectItem;