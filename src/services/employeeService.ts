import axios, { AxiosResponse } from "axios";
import { employeeResponse } from "../models/employeeResponse";
import { employeeRequest } from "../models/employeeRequest";

    export const getEmployees = async (): Promise<employeeResponse[]> => {

        try{
            const response: AxiosResponse = await axios.get("http://localhost:8080/api/employees");
            return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get employees');
    }
}
    export const createEmployee = async (employee: employeeRequest): Promise<Number> => {
        try{
           const response: AxiosResponse = await axios.post("http://localhost:8080/api/employees/delivery", employee);
           return response.data;
        } catch (e) {
           console.log(e);
           throw new Error(e.response.data);
        }
     }
        
