import { createAgent, IResolver } from '@veramo/core';
import { DIDResolverPlugin, getUniversalResolver } from '@veramo/did-resolver';
import { getResolver as getKeyDidResolver } from 'key-did-resolver';

const uniresolver = getUniversalResolver('https://uniresolver.io/1.0/identifiers/');

export const agent = createAgent<IResolver>({
  plugins: [
    new DIDResolverPlugin({
      ...getKeyDidResolver(),
      web: uniresolver,
      ethr: uniresolver,
      'ethr:goerli': uniresolver,
    }),
  ],
});
