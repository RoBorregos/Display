
export const getInfo = async (id:string) => {
    try {
        switch(id) {
            case "moveto":
                return {
                    command: "Move to",
                    items: ["Printers" , "Home", "Desks"],
                    description: "Select the destination for the robot"
                }
            break;

            case "grab":
                return {
                    command: "Grab",
                    items: ["Pen", "Pencil", "Paper"],
                    description: "Select the object for the robot to grab"
                }
            break;

            case "stop":
                return {
                    command: "Stop",
                    items: [],
                    description: "Stopping the robot"
                }
            break;

            case "deliver":
                return {
                    command: "Deliver",
                    items: ["Nose", "A alguien?", "A un lugar"],
                    description: "Select the destination for the robot"
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