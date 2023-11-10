
export const getInfo = async (id:string) => {
    try {
        switch(id) {
            case "go":
                return {
                    title: "Go to",
                    command: "go ",
                    items: ["Printers" , "Home", "Desks"],
                    description: "Select the destination for the robot"
                }
            break;

            case "grab":
                return {
                    title: "Grab",
                    command: "grab ",
                    items: ["Pen", "Pencil", "Paper"],
                    description: "Select the object for the robot to grab"
                }
            break;

            case "put":
                return {
                    title: "Put",
                    command: "put ",
                    items: [],
                    description: "Stopping the robot"
                }
            break;

            case "find":
                return {
                    title: "Find",
                    command: "find ",
                    items: ["Nose", "A alguien?", "A un lugar"],
                    description: "Select the destination for the robot"
                }
            break;

            case "introduce": 
                return {
                    title: "Introduce",
                    command: "introduce",
                    items: ["Myself", "Yourself", "Someone"],
                    description: "Select the object for the robot to grab"
                }
            
            break;

            case "stop":
                return {
                    command: "Stop",
                    items: [],
                    description: "Stopping the robot"
                }
        }

     } catch (error: any) {
            console.log(error, "Get general error");

            return null;
        }
    // try {

    //     const general = await prisma.discussion.findUnique({
    //         where: {
    //             id: "64cf25790ccd285092b7604a"
    //         }
    //     })

    //     if (!general)
    //         return null;

    //     return general;

    // } catch (error: any) {
    //     console.log(error, "Get general error");
    //     return null;
    // }

}