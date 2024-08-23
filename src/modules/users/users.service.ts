import { Injectable } from '@nestjs/common';

import { LoggerService } from '../logger/logger.service';
import { PostsService } from '../posts/posts.service';
import { ArticleRepository } from '../repository/services/article.repository';
import { UserRepository } from '../repository/services/user.repository';
import { CreateUserDto } from './dto/req/create-user.dto';
import { UpdateUserDto } from './dto/req/update-user.dto';
// import { CreateUserDto } from './dto/req/create-user.dto';
// import { UpdateUserDto } from './dto/req/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly carsService: PostsService,
    private readonly logger: LoggerService,
    private readonly userRepository: UserRepository,
    private readonly articleRepository: ArticleRepository,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async create(createUserDto: CreateUserDto): Promise<any> {
    this.carsService.create({});
    return await this.userRepository.save({
      name: 'John Doe',
      email: 'test@test.com',
      password: 'password123',
    });
  }

  public async findAll(): Promise<any> {
    return `This action returns all users`;
  }

  public async findMe(id: number): Promise<any> {
    return `This action returns a #${id} user`;
  }

  public async updateMe(
    id: number,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateUserDto: UpdateUserDto,
  ): Promise<any> {
    return `This action updates a #${id} user`;
  }

  public async removeMe(id: number): Promise<any> {
    return `This action removes a #${id} user`;
  }

  public async findOne(id: number): Promise<any> {
    return `This action returns a #${id} user`;
  }
}
