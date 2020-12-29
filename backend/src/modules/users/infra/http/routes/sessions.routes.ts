import { Router } from 'express';

import AuthenticationsUserService from '@modules/users/services/AuthenticateUserService';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const usersRepository = new UsersRepository();

  const { email, password } = request.body;

  const authenticationUser = new AuthenticationsUserService(usersRepository);

  const { user, token } = await authenticationUser.execute({
    email,
    password,
  });

  const { id, name, avatar, created_at, updated_at } = user;

  const userAuthenticated = {
    id,
    name,
    avatar,
    email,
    created_at,
    updated_at,
  };

  return response.json({ user: userAuthenticated, token });
});

export default sessionsRouter;
