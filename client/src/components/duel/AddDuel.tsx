"use client";

import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const AddDuel: React.FC = () => {

    const [open, setOpen] = useState<boolean>(false);
    return <>

        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <Button>
                    Add Duel
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create a Duel</DialogTitle>
                </DialogHeader>

                <form>
                    <div className="mt-4">
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" placeholder="Enter the title" />

                    </div>
                </form>
            </DialogContent>
        </Dialog>

    </>
}

export default AddDuel;