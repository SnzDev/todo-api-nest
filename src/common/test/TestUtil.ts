import { Users } from '@prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { faker } from '@faker-js/faker';

export class TestUtil {
  static giveAMeAValidUser(): Users {
    const user: Users = {
      id: faker.datatype.uuid(),
      name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      email: 'john@example.com',
      password: '123456',
      recovery_code: '',
      active: true,
      created_at: new Date(),
      update_at: new Date(),
    };

    return user;
  }

  static giveAMeTwoValidUser(): Users[] {
    const user: Users[] = [
      {
        id: '1',
        name: 'John',
        last_name: 'Doe',
        email: 'john@example.com',
        password: '123456',
        recovery_code: '',
        active: true,
        created_at: new Date(),
        update_at: new Date(),
      },
      {
        id: '2',
        name: 'Thálisson',
        last_name: 'Sinézio',
        email: 'thalisson.sinezio@example.com',
        password: '12345678',
        recovery_code: '',
        active: true,
        created_at: new Date(),
        update_at: new Date(),
      },
    ];

    return user;
  }
}
