import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

const Duel: React.FC<{ duel: duelResponseType }> = ({ duel }) => {
    return <>
        <Card>
            <CardHeader>
                <CardTitle>{duel.title}</CardTitle>
            </CardHeader>
            <CardContent>
                {
                    duel.image && <Image src={duel.image} alt="" width={500} height={500} className="rounded-lg w-full h-[220px] object-contain" priority />
                }
                <CardDescription>{duel.description}</CardDescription>
                <p>
                    <strong>
                        Expire at: {new Date(duel.expire_at).toDateString()}
                    </strong>
                </p>
            </CardContent>
            <CardFooter>
                <Button>Link</Button>
            </CardFooter>
        </Card>

    </>
}

export default Duel;