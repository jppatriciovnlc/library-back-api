import { EntityRepository, Repository } from "typeorm";
import { book } from "../entities/book";


@EntityRepository(book)
class BookRepositories extends Repository<book>{
}
export { BookRepositories }