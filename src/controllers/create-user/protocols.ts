import { User } from "../../models/user";

export interface CreateUserParams {
    id: string;
    firstName: string;
    lastiName: string;
    email: string;
    password: string
}

export interface ICreateUserRepository {
    createUser(params: CreateUserParams): Promise<User>
}