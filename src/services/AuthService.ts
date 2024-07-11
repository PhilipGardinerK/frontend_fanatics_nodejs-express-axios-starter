import axios, { AxiosResponse } from "axios";
import { LoginRequest } from "../models/LoginRequest";

export const getToken = async (loginRequest: LoginRequest): Promise<String> => {


    try {
        const response: AxiosResponse = await axios.post("https://localhost:8080/api/auth/login", loginRequest);

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error (e.response.data);
    }
}