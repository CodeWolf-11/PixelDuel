"use client"

import { Upload } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useState, useRef } from "react";
import Image from "next/image";



const AddDuelItems: React.FC<{ token: string, duelId: number }> = ({ token, duelId }) => {

    const [items, setItems] = useState<Array<duelItemFormType>>([
        { image: null },
        { image: null }
    ]);

    const [urls, setUrls] = useState<Array<string>>(["", ""]);

    const imageRef1 = useRef<HTMLInputElement | null>(null);
    const imageRef2 = useRef<HTMLInputElement | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {

        const image = e.target.files?.[0];

        if (image) {
            const updatedItems = [...items];
            updatedItems[index].image = image;
            setItems(updatedItems);

            //creating url for preview

            const imageUrl = URL.createObjectURL(image);
            const updatedurls = [...urls];
            updatedurls[index] = imageUrl;
            setUrls(updatedurls);
        }

    }

    return <>
        <div className="mt-10">
            <div className="flex flex-wrap lg:flex-nowrap justify-between items-center">

                {/* first block */}
                <div className="w-full lg:w-[500px] flex justify-center items-center flex-col">
                    <input type="file" className="hidden" ref={imageRef1} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        handleImageChange(e, 0);
                    }} />

                    <div className="w-full flex justify-center items-center rounded-md border-4 border-dashed p-2 h-[300px] cursor-pointer" onClick={() => imageRef1?.current?.click()}>
                        {
                            urls[0] === "" ? (

                                <h1 className="flex gap-2 items-center justify-between">
                                    <Upload />
                                    Upload file
                                </h1>


                            ) : (
                                <Image src={urls[0]} height={300} width={300} alt="image" className="w-full h-full object-contain" />
                            )
                        }
                    </div>
                </div>

                {/* Vs Block */}

                <div className="w-full flex lg:w-auto justify-center items-center">
                    <h1 className="text-6xl text-center font-extrabold bg-gradient-to-r from-green-300 to-green-700 text-transparent bg-clip-text" >VS</h1>
                </div>

                {/* second block */}
                <div className="w-full lg:w-[500px] flex justify-center items-center flex-col">
                    <input type="file" className="hidden" ref={imageRef2} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        handleImageChange(e, 1);
                    }} />
                    <div className="w-full flex justify-center items-center rounded-md border-4 border-dashed p-2 h-[300px] cursor-pointer" onClick={() => imageRef2?.current?.click()}>
                        {
                            urls[1] === "" ? (

                                <h1 className="flex gap-2 items-center justify-between">
                                    <Upload />
                                    Upload file
                                </h1>


                            ) : (
                                <Image src={urls[1]} height={300} width={300} alt="image" className="w-full h-full object-contain" />
                            )
                        }

                    </div>
                </div>
            </div>

            <div className="text-center">
                <Button className="w-50 mt-3">Submit</Button>
            </div>
        </div>
    </>
}



export default AddDuelItems;