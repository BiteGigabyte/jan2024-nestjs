import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  public create(createCarDto: CreateCarDto) {
    return 'This action adds a new car';
  }

  public findAll() {
    return `This action returns all cars`;
  }

  public findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  public update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  public remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
