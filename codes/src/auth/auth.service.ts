import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  isAuthenticated: boolean = false;
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  login(email: string, password: string | number) {
    const user = this.userService.users.find(
      (u) => u.email === email && u.password === password,
    );
    if (user) {
      this.isAuthenticated = true;
      return 'user token';
    } else {
      return 'user is not exist!';
    }
  }

  logout(email: string, password: string | number) {
    const user = this.userService.users.find(
      (u) => u.email === email && u.password === password,
    );
    if (user) {
      this.isAuthenticated = false;
      return 'user logged out';
    } else {
      return 'something went wrong!';
    }
  }
}
