import { getById, getmovie, addmovie, deletemovie } from './db.js'

const resolvers = {
    Query: {
        getmovie : () => getmovie(),
        getmoviebyid : (_, {id}) => getById(id)
        },

    Mutation: {
        addmovie : (_, {title, score}) => addmovie(title, score),
        deletemovie : (_, {id}) => deletemovie(id)
    }
}

export default resolvers