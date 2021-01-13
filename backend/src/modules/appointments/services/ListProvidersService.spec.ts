// import AppError from '@shared/errors/AppError';

import FakeUserRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './LIstProvidersService';

let fakeUsersRepository: FakeUserRepository;
let listProviders: ListProvidersService;

describe('ListProvider', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUserRepository();

    listProviders = new ListProvidersService(fakeUsersRepository);
  });

  it('should be able to show list providers', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const user2 = await fakeUsersRepository.create({
      name: 'John Trê',
      email: 'johntre@example.com',
      password: '123456',
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'John Qua',
      email: 'johnqua@example.com',
      password: '123456',
    });

    const providers = await listProviders.execute({
      user_id: loggedUser.id,
    });

    expect(providers).toEqual([user1, user2]);
  });
});
