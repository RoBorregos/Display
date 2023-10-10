import BackButton from "rbrgs/app/components/backButton";
import Header from "rbrgs/app/components/header";

const MoveTo = () => {
    const locations = [
        "printers",
        "front door",
    ]
    return (
        <div className="p-20 flex flex-col justify-between h-screen">
            <div>
                <Header title="Move To" />
                <div className="p-20">

                    {locations.map((location, key) => (
                        <div key={key} className="p-4 text-white">
                            {location}
                        </div>
                    ))}
                </div>
            </div>
            <div className="self-center">
                <BackButton />
            </div>
        </div>
    )
}

export default MoveTo;