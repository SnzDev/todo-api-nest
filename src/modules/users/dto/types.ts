import { Users } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ICreateUser
  implements
    Omit<Users, 'id' | 'recovery_code' | 'active' | 'created_at' | 'update_at'>
{
  @ApiProperty({
    description: 'Name of the user',
  })
  name: string;

  @ApiProperty({
    description: 'Lastname of the user',
  })
  last_name: string;

  @ApiProperty({
    description: 'E-mail of the user',
  })
  email: string;

  @ApiProperty({
    description: 'Password of the user',
  })
  password: string;
}

export class IUpdateUser
  implements
    Omit<Users, 'id' | 'recovery_code' | 'active' | 'created_at' | 'update_at'>
{
  @ApiProperty({
    description: 'Name of the user',
  })
  name: string;

  @ApiProperty({
    description: 'Lastname of the user',
  })
  last_name: string;

  @ApiProperty({
    description: 'E-mail of the user',
  })
  email: string;

  @ApiProperty({
    description: 'Password of the user',
  })
  password: string;
}
