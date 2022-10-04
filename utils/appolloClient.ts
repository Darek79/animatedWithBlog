import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}/explore?access_token=${process.env.CDA_TOKEN}`,
    cache: new InMemoryCache({ addTypename: false }),
});