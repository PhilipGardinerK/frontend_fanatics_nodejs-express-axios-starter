import express from "express"
import { createEmployee, getEmployees } from "../services/employeeService"

export const getAllEmployees = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('employeeList.html', { employees: await getEmployees() })
}

export const getDeliveryEmployeeForm = async (req: express.Request, res: express.Response): Promise<void> => {
    console.log(req.params.id);
    res.render('deliveryEmployeeForm.html');
}


export const postDeliveryEmployeeForm = async (req: express.Request, res: express.Response): Promise<void> => {
    try{
        const id = await createEmployee(req.body);
        res.redirect('/employees');
    } catch(e){
        res.locals.errormessage = e.message;
        res.render('deliveryEmployeeForm.html', req.body);
    }
}