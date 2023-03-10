import { User } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protocols";

export interface ICreateUserController {
    handle(httpRequest: HttpRequest<CreateUserParams>
    ): Promise<HttpResponse<User>>;
}

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