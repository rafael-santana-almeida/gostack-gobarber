import { Router } from 'express';

import AuthenticationsUserService from '@modules/users/services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticationUser = new AuthenticationsUserService();

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
