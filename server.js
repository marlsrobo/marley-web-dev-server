import express from 'express';
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/users/user-controller.js";
import tuitsController from "./controllers/tuits/tuits-controller.js";

const app = express();
app.use(express.json());
helloController(app);
userController(app);
tuitsController(app);
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')});
app.listen(4000);