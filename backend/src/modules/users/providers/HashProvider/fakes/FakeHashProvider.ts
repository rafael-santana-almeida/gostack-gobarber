import IHashProvider from '../models/IHashProvider';

class FakeHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    return payload;
  }

  public async compareHash(pauload: string, hashed: string): Promise<boolean> {
    return pauload === hashed;
  }
}

export default FakeHashProvider;
