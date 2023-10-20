'use client';

import BackButton from "rbrgs/app/components/backButton";
import Header from "rbrgs/app/components/header";
import SelectItem from "rbrgs/app/components/selectItem";
import { getInfo } from "rbrgs/app/utils/actions/getCommandInfo";

const MoveTo = async (params: any) => {
    const info = await getInfo(params.searchParams.id);
    const command = info?.command || "";
    const items = info?.items || [];
    const description = info?.description || "";

    const handleClick = () => {
 
    }
    return (
        <div className="p-20 flex flex-col justify-between h-screen">
            <div>
                <Header title={command} />
                <p className="text-neutral-300 font-mono my-4">
                    {description}
                </p>
                <div className="px-10 flex flex-col self-center">
                    {items.map((item, key) => (
                        <SelectItem key={key} label={item} onClick={handleClick} />
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