import express from "express"
import { config } from "dotenv"
import { GetUsersController } from "./controllers/get-user/get-users";
import { MongoGetUsersRepository } from "./repositories/get-users/mongo-get-users";
import { MongoClient } from "./database/mongo";
import { MongoCreateUserRepository } from "./repositories/create-user/mongo-create-user";
import { CreateUserController } from "./controllers/create-user/create-user";

const main = async () => {
    config();
    const app = express();

    app.use(express.json())

    await MongoClient.connect()

    app.get("/users", async (req, res) => {

        const mongoGetUsersRepository = new MongoGetUsersRepository();

        const getUsersController = new GetUsersController(mongoGetUsersRepository);

        const { body, statusCode } = await getUsersController.handle()

        res.status(statusCode).send(body)
    })
    app.post("/users", async (req, res) => {
        const mongoCreateUserRepository = new MongoCreateUserRepository()

        const createUserControlle = new CreateUserController(mongoCreateUserRepository)

        const { body, statusCode } = await createUserControlle.handle({ body: req.body })

        res.status(statusCode).send(body)
    })

    const port = process.env.PORT || 8000;

    app.listen(port, () => console.log(`listening on port ${port}`))
}

main();
