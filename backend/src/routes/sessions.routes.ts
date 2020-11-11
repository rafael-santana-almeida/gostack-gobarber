import { Router } from 'express';

import AuthenticationsUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticationUser = new AuthenticationsUserService();

  const { user, token } = await authenticationUser.execute({
    email,
    password,
  });

  const userAuthenticated = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  return response.json({ userAuthenticated, token });
});

export default sessionsRouter;
