import fetch from 'node-fetch'
import axios from 'axios'

const API_URL = "https://yts.mx/api/v2/list_movies.json"

//API control
export const checkmovie = () => 
//Can get whole data by async operation
    fetch(API_URL)
    .then(res => res.json())
    .then(json => json.data.movies)

//getmovie
export const getmovie = (limit, rating) => {
    let REQUEST_URL = `${API_URL}?`
    if(limit > 0){
        REQUEST_URL = REQUEST_URL + `limit=${limit}`
        console.log(REQUEST_URL)
    }
    if(rating > 0){
        REQUEST_URL = REQUEST_URL + `&minimum_rating=${rating}`
        console.log(REQUEST_URL)
    }
    return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies)
    
}

//seemovie by axios
export const seemovie = async (id) => {
    //const movies = await axios.get('https://yts.mx/api/v2/list_movies.json')
    //console.log(movies)
    const{
        data:{
            data: {movies}
        }
        //data params (by then or callback)
    } = await axios.get('https://yts.mx/api/v2/list_movies.json', {
        params: {
            movie_id : id
        }
    })

    return movies
}

