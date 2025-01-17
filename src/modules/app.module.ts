import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [UsersModule, CarsModule],
})
export class AppModule {}
