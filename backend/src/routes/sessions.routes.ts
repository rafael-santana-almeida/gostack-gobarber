import { Router } from 'express';

import AuthenticationsUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authenticationUser = new AuthenticationsUserService();

    const { user } = await authenticationUser.execute({
      email,
      password,
    });

    const userAuthenticated = {
      id: user.id,
      name: user.name,
      email: user.email
    };

    return response.json(userAuthenticated);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
});

export default sessionsRouter;
