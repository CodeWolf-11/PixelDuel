"use server"

import { REGISTER_URL } from "@/lib/apiEndpoints"
import axios from "axios"

export const registerActions = async (formdata: FormData) => {
    try {
        await axios.post(REGISTER_URL, {
            name: formdata.get("name"),
            email: formdata.get("email"),
            password: formdata.get("password"),
            confirm_password: formdata.get("confirm_password"),
        });

    } catch (error) {

    }
}