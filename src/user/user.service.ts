import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUserDto';
import { UpdateUserDto } from './dto/updateUserDto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private readonly userRepo: Repository<User>
    ){}
    
     async findOne(id: number){
        return await this.userRepo.findOne({where: {id: id}});
    }

    async create(createUserDto: CreateUserDto){
        const user = await this.userRepo.create(createUserDto);
        return await this.userRepo.save(user);
    }

    async update(id: number, updateUserDto: UpdateUserDto){
        return await this.userRepo.update(id, updateUserDto);
    }

    async findOneWithUsername(username: string){
        return await this.userRepo.findOne({where: {email: username}});
    }

}
