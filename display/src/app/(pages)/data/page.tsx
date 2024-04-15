import Header from "rbrgs/app/components/header";
import Status from "rbrgs/app/components/info/status";

const Info = () => {

    return (
        <div className="p-20">
            <Header title="Info" />
            <Status />
        </div>
    );
}

export default Info;