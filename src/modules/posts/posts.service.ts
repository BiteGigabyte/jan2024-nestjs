import { Injectable } from '@nestjs/common';

import { CreatePostDto } from './dto/req/create-post.dto';
import { PostsListReqDto } from './dto/req/posts-list.req.dto';
import { UpdatePostDto } from './dto/req/update-post.dto';

@Injectable()
export class PostsService {
  public create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  public findAll(query: PostsListReqDto) {
    return `This action returns all posts`;
  }

  public findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  public update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  public remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
