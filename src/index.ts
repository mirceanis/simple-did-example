import { agent } from './setup.js';

const doc = await agent.resolveDid({
  didUrl: 'did:key:z6MkmbTn4thCFgbRXif7MAN7KwveCyUCQLqSEyHxRCJRmiqP',
});

console.dir(doc, { depth: 4 });
