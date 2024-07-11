import express from "express";
import nunjucks from "nunjucks";
import bodyParser from "body-parser";
import session from "express-session";

import { getAllDatabases } from "./controllers/TestController";
import { getAllEmployees, getDeliveryEmployeeForm, postDeliveryEmployeeForm } from "./controllers/employeeController";
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

app.get('/employees', getAllEmployees);
app.get('/deliveryEmployeeForm', getDeliveryEmployeeForm);
app.post('/deliveryEmployeeForm', postDeliveryEmployeeForm);
app.get('/loginForm', getLoginForm);
app.post('/loginForm', postLoginForm);
