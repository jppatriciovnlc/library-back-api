import { getCustomRepository } from "typeorm"
import { BookRepositories } from "../database/repositories/BooksRepositories"


interface IBook {
    name: string,
    author: string,
    publisher ?: string,
    publication ?: string,
    status: string,
    borrowedBy ?: string,
    borrowedIn ?: Date
}

class CreateBookService {
    async execute ({name , author, publisher, publication, status}:IBook) {

        const bookRepository = getCustomRepository(BookRepositories)

        const book = bookRepository.create({
            name,
            author,
            publisher,
            publication,
            status
        })

        await bookRepository.save(book)

        return book;

    }
}

export { CreateBookService }