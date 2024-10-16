import "dotenv/config";
import "./database";
import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import express from "express";
import UserResource from "./resources/UserResource";
import locales from "./locales";
import ProjectResource from "./resources/ProjectResource";
import TaskResource from "./resources/TaskResource";

AdminJS.registerAdapter(AdminJSSequelize);

const app = express();

const adminJS = new AdminJS({
    databases: [],
    rootPath: '/admin',
    resources: [UserResource, ProjectResource, TaskResource],
    ...locales,
});

const router = AdminJSExpress.buildRouter(adminJS);

app.use(adminJS.options.rootPath, router);
app.listen(5000, () => {
    console.log('AdminJS is under http://localhost:5000/admin')
})

