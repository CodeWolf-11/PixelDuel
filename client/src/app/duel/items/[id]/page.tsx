import React from "react";
import Navbar from "@/components/base/Navbar";
import { getDuelById } from "@/app/fetch/getDuels";
import AddDuelItems from "@/components/duel/AddDuelItems";
import { authOptions, CustomSession } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

const duelItems: React.FC<{ params: { id: string } }> = async ({ params }) => {

    const duel = await getDuelById(Number(params.id));

    const session: CustomSession | null = await getServerSession(authOptions);

    return (
        <>
            <div className="container px-2">
                <Navbar />
                <div className="mt-4">
                    <h1 className="text-2xl lg:text-4xl font-extrabold">{`${duel?.title}`}</h1>
                    <p className="text-lg">{`${duel?.description}`}</p>
                </div>

                <AddDuelItems token={session?.user?.token as string} duelId={Number(params.id)} />
            </div>
        </>
    )
}


export default duelItems;