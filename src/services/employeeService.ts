import axios, { AxiosResponse } from "axios";
import { employeeResponse } from "../models/employeeResponse";

export const getEmployees = async (): Promise<employeeResponse[]> => {

    try{
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/employees");
        return response.data;
} catch (e) {
    console.log(e);
    throw new Error('Failed to get orders');
}
}