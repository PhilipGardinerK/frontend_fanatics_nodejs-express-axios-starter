import express from "express"
import { getEmployees } from "../services/employeeService"

export const getAllEmployees = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('employeeList.html', { employees: await getEmployees() })
}