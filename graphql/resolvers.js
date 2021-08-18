import { checkmovie, getmovie, seemovie } from './db.js'

const resolvers = {
    Query: {
        seemovie: (_, {id}) => seemovie(id),
        checkmovie : () => checkmovie(),
        getmovie : (_, {limit, rating}) => getmovie(limit, rating)
        }
}

export default resolvers