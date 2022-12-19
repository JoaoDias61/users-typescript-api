import { IGetUsersRepository } from "../../controllers/get-user/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
    async getUsers(): Promise<User[]> {
        return [{
            firstName: "João",
            lastName: "Rocha",
            email: "joao@gmail.com",
            password: "teste"
        }]
    }

}