import { Body, Controller, Get, Param, Post, Put, UseGuards, Request } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';
import { CommentService } from 'src/comment/comment.service';
import { UpdateUserDto } from './dto/updateUserDto';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService, private readonly commentService: CommentService) {}

    @Get('all')
    findAll() {
        return 'all users';
    }

    @Get(':id') 
    findOne(@Param('id') id: number) {
        return this.userService.findOne(id);
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto){
        return this.userService.create(createUserDto);
    } 
    
    @UseGuards(JwtGuard)
    @Get(":id/comments")
    getUserComment(@Param('id') id: string, @Request() req) {
    console.log("User từ JWT:", req.user); // Kiểm tra token được giải mã đúng không
    return this.commentService.findUserComments(id);
}


    @Put(':id')
    update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto){
        return this.userService.update(id, updateUserDto);
    }

    @Get(':name')
    findOneWithUsername(@Param('name') name: string){
        return this.userService.findOneWithUsername(name);
    }
}
