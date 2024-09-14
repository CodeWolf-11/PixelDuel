"use client"

import React, { Suspense, useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { EllipsisVertical } from "lucide-react";
import dynamic from "next/dynamic";

const EditDuel = dynamic(() => import("./EditClash"));

const DuelMenu: React.FC<{ duel: duelResponseType, token: string }> = ({ duel, token }) => {

    const [open, setOpen] = useState<boolean>(false);

    return <>

        <Suspense fallback={"Loading..."}>
            <EditDuel duel={duel} open={open} setOpen={setOpen} token={token} />
        </Suspense>


        <DropdownMenu>
            <DropdownMenuTrigger>
                <EllipsisVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setOpen(true)}>Edit</DropdownMenuItem>
                <DropdownMenuItem>Copy Link</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    </>
}

export default DuelMenu;