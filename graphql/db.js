import fetch from 'node-fetch'

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
