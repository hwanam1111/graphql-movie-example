import { getMovies } from './database';

const resolvers = {
  Query: {
    movies: (_, { limit }) => getMovies(limit),
  },
}

export default resolvers;
