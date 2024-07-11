import express from "express"
import { createEmployee, getEmployees } from "../services/employeeService"

export const getAllEmployees = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('employeeList.html', { employees: await getEmployees() })
}

export const getEmployeeForm = async (req: express.Request, res: express.Response): Promise<void> => {
    console.log(req.params.id);
    res.render('employeeForm.html');
}


export const postEmployeeForm = async (req: express.Request, res: express.Response): Promise<void> => {
    try{
        const id = await createEmployee(req.body);
        res.redirect('/employees/' + id);
    } catch(e){
        res.locals.errormessage = e.message;
        res.render('employeeForm.html', req.body);
    }
}