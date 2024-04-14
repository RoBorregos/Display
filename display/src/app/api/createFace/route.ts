import prisma from "rbrgs/app/utils/libs/prismadb";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        
        const newFace = await prisma.userFaces.create({
            data: {
                name: body.description,
                image: body.image
            }
        });
    }

    catch (error: any) {
        console.log(error, "Error in createFace");
        return {
            status: 500,
            body: {
                error: "Internal server error"
            }
        }
    }
}
