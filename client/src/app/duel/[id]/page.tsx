import React from "react";
import Navbar from "@/components/base/Navbar";
import { getDuelById } from "@/app/fetch/getDuels";
import DuelPublic from "@/components/duel/DuelPublic";

const duelItems: React.FC<{ params: { id: string } }> = async ({ params }) => {

    const duel: duelResponseType = await getDuelById(Number(params.id));

    return (

        <div className="mx-auto container px-2">
            <Navbar />
            <div className="mt-4">
                <h1 className="text-2xl lg:text-4xl font-extrabold">{`${duel?.title}`}</h1>
                <p className="text-lg">{`${duel?.description}`}</p>
            </div>


            {
                duel && <DuelPublic duel={duel} />
            }




        </div>

    )
}


export default duelItems;