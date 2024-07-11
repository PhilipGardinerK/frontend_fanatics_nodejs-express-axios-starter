import express from "express";

//this gets the login form 
export const getLoginForm = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('loginForm.html');
}

//we want to also be able to post the login form 
export const postLoginForm = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('loginForm.html');
}