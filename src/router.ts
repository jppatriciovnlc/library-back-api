import { Router } from "express";
import { CreateBookController } from "./controllers/createBookController";
import { CreateUserController } from "./controllers/createUserController";


const router = Router();

const createUserController = new CreateUserController();
const createBookController = new CreateBookController();


router.post(
    "/user", 
    //ensureAdmin,
    createUserController.handle
    )

router.post(
    "/book", 
    //ensureAdmin,
    createBookController.handle
    )






export { router }

