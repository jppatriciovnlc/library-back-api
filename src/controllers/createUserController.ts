import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";


class CreateUserController {

    async handle(request: Request, response: Response) {       
            
            const { name, password, group, phone, email, status } = request.body;
            const createUserService = new CreateUserService;

            const user = await createUserService.execute({ name, password, group, phone, email, status });

            return response.json(user);
        
    }

}

export { CreateUserController };