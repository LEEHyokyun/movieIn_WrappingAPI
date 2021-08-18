import { getmovie } from './db.js'

const resolvers = {
    Query: {
        getmovie : () => getmovie()
        }
}

export default resolvers