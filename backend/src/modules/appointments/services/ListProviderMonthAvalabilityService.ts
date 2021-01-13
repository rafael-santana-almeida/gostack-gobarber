import { injectable, inject } from 'tsyringe';

import IAppointmentsRepositoru from '../repositories/IAppointmentsRepository';

interface IRequest {
  provider_id: string;
  month: number;
  year: number;
}

type IResponse = Array<{
  day: number;
  avalable: boolean;
}>;

@injectable()
class ListProviderMonthAvalabilityService {
  constructor(
    @inject('AppointmentsRepository')
    private appoitmentsRepository: IAppointmentsRepositoru,
  ) {}

  public async execute({
    provider_id,
    month,
    year,
  }: IRequest): Promise<IResponse> {
    const appointments = await this.appoitmentsRepository.findAllInMonthFromProvider(
      {
        provider_id,
        month,
        year,
      },
    );

    console.log(appointments);

    return [{ day: 1, avalable: false }];
  }
}

export default ListProviderMonthAvalabilityService;
