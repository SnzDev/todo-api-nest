import { Test, TestingModule } from '@nestjs/testing';
import { Users } from '@prisma/client';
import { TestUtil } from '../../common/test/TestUtil';
import { PrismaService } from '../../database/prisma.service';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  const mockUsers = {
    users: {
      find: jest.fn(),
      create: jest.fn(),
      findMany: jest.fn(),
      findFirst: jest.fn(),
      update: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: PrismaService,
          useValue: mockUsers,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('FindAll', () => {
    it('should be list all users', async () => {
      const user = TestUtil.giveAMeAValidUser();
      mockUsers.users.findMany.mockReturnValue([user, user]);

      const response = await service.findAll();

      expect(response).toHaveLength(2);
      expect(mockUsers.users.findMany).toHaveBeenCalledTimes(1);
    });
  });

  describe('FindFirst', () => {
    const users = TestUtil.giveAMeTwoValidUser();
    mockUsers.users.findFirst.mock.calls[0][0];
  })
});
