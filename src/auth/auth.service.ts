import { Injectable } from '@nestjs/common';
import { UserServices } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import UserEntity from 'src/db/user.entity';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UserServices,
        private jwtService: JwtService
      ) {}
    
      async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user && user.password === pass) {
          const { password, ...result } = user;
          return result;
        }
        return null;
      }
    
      async login(username: any, password: any) {
        const payload = { username: username, password: password };
        const validationRes = await this.validateUser(username, password);
        if(validationRes) {
            return {
              access_token: this.jwtService.sign(payload),
            };
        }
        return "Invalid";
        
      }

}
