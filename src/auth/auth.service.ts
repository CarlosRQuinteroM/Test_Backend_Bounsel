import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { User } from 'src/users/entities';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService:UsersService,
        private readonly jwtService:JwtService,
        ){}

    async validateUser(email:string, password:string) : Promise<any>{
        const user = await this.userService.findByEmail({email})
        if (user && await compare(password, user.password)){
            const {password, ...rest} = user;
            return rest;
        }
        console.log(user);

        return null

    }
    login(user: User){

        const { id , ...rest} = user;
        const payload =  {sub: id};

        return {
            user ,
            token: this.jwtService.sign(payload)
        }
    }
}
