import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  public login(@Body() user: { email: string; password: string | number }) {
    return this.authService.login(user.email, user.password);
  }
}
