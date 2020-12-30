import { Request, Response } from 'express';

import { container } from 'tsyringe';

import AuthenticationsUserService from '@modules/users/services/AuthenticateUserService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticationUser = container.resolve(AuthenticationsUserService);

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
  }
}
