import { IGetUsersController, IGetUsersRepository } from "./protocols";

export class GetUsersController implements IGetUsersController {
    constructor(private readonly getUsersRepository: IGetUsersRepository) {
        this.getUsersRepository = getUsersRepository
    }
    async handle() {
        try {
            // validar requisição
            // dirececionar chamada para o repository
            const users = await this.getUsersRepository.getUsers()

            return {
                statusCode: 200,
                body: users,
            }

        } catch (error) {
            return {
                statusCode: 500,
                body: "something went wrong"
            }
        }


    }
}