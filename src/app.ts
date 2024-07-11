import express from "express";
import nunjucks from "nunjucks";
import bodyParser from "body-parser";
import session from "express-session";

import { getAllDatabases } from "./controllers/TestController";
import { getAllEmployees, getEmployeeForm, postEmployeeForm } from "./controllers/employeeController";
import { getLoginForm, postLoginForm } from "./controllers/AuthController";
import { UserRole } from "./models/JwtToken";
import { allowRoles } from "./middleware/AuthMiddleware";


const app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(session({ secret: 'SUPER_SECRET', cookie: { maxAge: 28800000 }}));

declare module "express-session" {
  interface SessionData {
    token: string;
  }
}

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

app.get('/employees', allowRoles([UserRole.HR]), getAllEmployees);
app.get('/employeeForm', allowRoles([UserRole.HR]), getEmployeeForm);
app.post('/employeeForm', allowRoles([UserRole.HR]), postEmployeeForm);
app.get('/loginForm', getLoginForm);
app.post('/loginForm', postLoginForm);
