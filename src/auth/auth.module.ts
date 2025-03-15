import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local-strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { JwtStrategy } from './strategies/jwt-strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
    secret: `${process.env.JWT_SECRET}`,
    signOptions: {expiresIn: '3600s'},
  })],
  providers: [AuthService, UserService, JwtStrategy, LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
