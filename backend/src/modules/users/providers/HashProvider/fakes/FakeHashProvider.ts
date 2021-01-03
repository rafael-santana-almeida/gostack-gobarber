import IHashProvider from '../models/IHashProvider';

class FakeHashProvider implements IHashProvider {
  public async genareteHash(payload: string): Promise<string> {
    return payload;
  }

  public async compareHash(pauload: string, hashed: string): Promise<boolean> {
    return pauload === hashed;
  }
}

export default FakeHashProvider;
