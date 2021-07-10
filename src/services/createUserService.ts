import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../database/repositories/UsersRepositories";
import { hash } from "bcryptjs";

interface IUser {
    name: string,
    password: string,
    group: string,
    phone: string,
    email: string,
    status: string  
}

class CreateUserService {
    async execute({ name, password, group, phone, email, status }:IUser) {
        
        const userRepository = getCustomRepository(UserRepositories)

        if(!email) {
            throw new Error('Server incorrect');
        }

        const userAlreadyExists = await userRepository.findOne({
            email
        });

        if(userAlreadyExists) {
            throw new Error('User already exists');
        }
        
        const passwordHash = await hash(password, 8)

        const user = userRepository.create({
            name,            
            password: passwordHash, 
            group, 
            phone, 
            email, 
            status
        })

        await userRepository.save(user)

        return user;
    }
}
export { CreateUserService }