import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  users: {
    id: number;
    name: string;
    email: string;
    isStudent: boolean;
    password: string | number;
  }[] = [
    {
      id: 1,
      name: 'Ahatasham',
      email: 'ahatasham@gmail.com',
      isStudent: false,
      password: 1234,
    },
    {
      id: 2,
      name: 'Arham',
      email: 'arham@gmail.com',
      isStudent: false,
      password: 'test@1234',
    },
  ];

  public async getAllUsers(limit, offset) {
    return await this.userRepository.find({
      relations: ['profile'],
    });
  }

  getUserById(id: number) {
    return this.users.find((x) => x.id === id);
  }

  async createUser(userDto: CreateUserDto) {
    let user = await this.userRepository.findOne({
      where: { email: userDto.email },
    });

    if (user) {
      return 'user already exist';
    }

    user = this.userRepository.create(userDto);
    return this.userRepository.save(user);
  }

  public async deleteUser(id: number) {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      return 'Something went wrong!';
    }
    return 'User with id `${id}` deleted successfully!';
  }
}
