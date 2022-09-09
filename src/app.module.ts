import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot(), UsersModule, PrismaModule, AuthModule],
  controllers: [],
})
export class AppModule {}
