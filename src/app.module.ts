import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [UsersModule, PrismaModule],
  controllers: [],
})
export class AppModule {}
