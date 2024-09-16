import React from "react";
import Navbar from "@/components/base/Navbar";

const duelItems: React.FC<{ params: { id: number } }> = async ({ params }) => {
    return (
        <>
            <div className="container">
                <Navbar />
                <div className="mt-4">
                    <h1 className="text-2xl lg:text-4xl font-extrabold">Duel Items</h1>
                    <p className="text-lg">Duel description</p>
                </div>
            </div>
        </>
    )
}


export default duelItems;