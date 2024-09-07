import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Login: React.FC = () => {
    return <div className="h-screen w-full flex justify-center items-center p-2">
        <div className="w-[550px] bg-white rounded-xl shadow-lg py-5 px-10">
            <h1 className="text-4xl text-center font-extrabold bg-gradient-to-r from-green-300 to-green-700 text-transparent bg-clip-text" >PixelDuel</h1>
            <h1 className="text-3xl font-bold">Login</h1>
            <p>Welcome Back</p>

            <form action="">
                <div className="mt-4">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" name="email" placeholder="johndoe@example.com" />
                </div>
                <div className="mt-4">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" name="password" placeholder="Enter your password" />
                    <div className="block w-full text-end mt-2">
                        <Link href="/forget-password " className="font-bold">Forgot Password ?</Link>
                    </div>
                </div>

                <div className="mt-4 block ">
                    <Button className="w-full ">Submit</Button>
                </div>
            </form>

            <p className="text-center mt-2">
                Don't have an account ? {" "}

                <strong>
                    <Link href={"/register"}>Register</Link>
                </strong>
            </p>
        </div>
    </div>
}

export default Login;