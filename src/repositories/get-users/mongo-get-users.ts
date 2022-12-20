import { IGetUsersRepository } from "../../controllers/get-user/protocols";
import { MongoClient } from "../../database/mongo";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
    async getUsers(): Promise<User[]> {
        const users = await MongoClient.db.collection<User>('users').find({}).toArray()
        return [{
            firstName: "João",
            lastName: "Rocha",
            email: "joao@gmail.com",
            password: "teste"
        }]
    }

}