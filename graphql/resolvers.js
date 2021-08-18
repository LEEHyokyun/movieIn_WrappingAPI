import { checkmovie, getmovie } from './db.js'

const resolvers = {
    Query: {
        checkmovie : () => checkmovie(),
        getmovie : (_, {limit, rating}) => getmovie(limit, rating)
        }
}

export default resolvers