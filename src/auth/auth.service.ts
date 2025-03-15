import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bycrypt from 'bcrypt';
import { User } from 'src/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    
    constructor(private userService: UserService, private jwtService: JwtService){}
    async validateUser(username: string, password: string){
        const user = await this.userService.findOneWithUsername(username);
        if(user && (await bycrypt.compare(password, user.password))){
            const {password, ...result} = user;
            return result;
        }
        return null;
    }

    async login(user: User){
        const payload = {
            username: user.email,
            sub: {
                name: user.name,
            }
        }
            return {
                ...user,
                access_token: this.jwtService.sign(payload)
            }
    }
}
