import { Request, Response } from "express";
import { CreateBookService } from "../services/createBookService";


class CreateBookController {

    async handle(request: Request, response: Response) {       
            
            const { name , author, publisher, publication, status } = request.body;
            const createBookService = new CreateBookService;

            const book = await createBookService.execute({ name , author, publisher, publication, status });

            return response.json(book);
        
    }

}

export { CreateBookController };