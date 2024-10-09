import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
