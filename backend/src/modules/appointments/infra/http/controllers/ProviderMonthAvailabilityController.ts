import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderMonthAvalabilityService from '@modules/appointments/services/ListProviderMonthAvalabilityService';

export default class ProviderMonthAvailability {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { month, year } = request.body;

    const listProviderMonthAvailability = container.resolve(
      ListProviderMonthAvalabilityService,
    );

    const availability = await listProviderMonthAvailability.execute({
      provider_id,
      month,
      year,
    });

    return response.json(availability);
  }
}
