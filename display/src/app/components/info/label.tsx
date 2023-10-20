interface LabelProps {
    title: string;
    data: string;
}

const Label: React.FC<LabelProps> = ({ title, data }) => {
    return (
        <div className="flex flex-row">
            <div className="text-emerald-300 text-xl font-mono">
                {title}:
            </div>
            <div className="text-white text-xl font-mono ml-2">
                {data}
            </div>
        </div>
    )
}

export default Label;