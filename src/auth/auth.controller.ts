import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO, RegisterDTO } from './auth.dto';
import { UserService } from 'src/shared/user.service';

@Controller('auth')
export class AuthController {
  // define the auth and user service.
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}
  // login route
  @Post('login')
  // find the user based on the input data
  async login(@Body() userDTO: LoginDTO) {
    const user = await this.userService.findByLogin(userDTO);
    // define a payload
    const payload = {
      email: user.email,
    };
    //get a JWT authentication token from the payload
    const token = await this.authService.signPayload(payload);
    // return the user and the token
    return {
      user,
      token,
    };
  }
  // registration route
  @Post('register')
  async register(@Body() userDTO: RegisterDTO) {
    // Create user based on the input data
    const user = await this.userService.create(userDTO);
    // define a payload
    const payload = {
      email: user.email,
    };
    // get a JWT authentication token from the payload
    const token = await this.authService.signPayload(payload);
    // return the user and the token
    return { user, token };
  }
}
