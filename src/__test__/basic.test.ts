import { agent } from '../setup.js';

describe('basic test', () => {
  it('creates an agent', () => {
    expect(agent).not.toBeNull();
  });

  it('has resolver methods on agent', () => {
    expect(typeof agent.resolveDid).toEqual('function');
  });

  it('resolves a DID using agent', async () => {
    expect.assertions(1);
    const did = 'did:key:z6MkmbTn4thCFgbRXif7MAN7KwveCyUCQLqSEyHxRCJRmiqP';
    const didResolution = await agent.resolveDid({ didUrl: did });
    expect(didResolution?.didDocument?.id).toEqual(did);
  });
});
