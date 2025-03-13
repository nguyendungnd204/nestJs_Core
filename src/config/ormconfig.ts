import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { User } from "../entities/user.entity";
import { Topic } from "src/entities/topic.entity";
import { Comment } from "src/entities/comment.entity";
import * as dotenv from 'dotenv';
dotenv.config(); 
const config: PostgresConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    entities: [User, Topic, Comment],
    synchronize: true, //set true during development and false during production
    
}

export default config;