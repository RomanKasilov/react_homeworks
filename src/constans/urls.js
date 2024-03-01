const baseURL = 'https://jsonplaceholder.typicode.com/'

const todos = '/todos'
const posts = '/posts'
const comments = '/comments'
const albums = '/albums'

const urls = {
    todos,
    albums,
    comments,
    posts :{
        byId:(id) =>`${posts}/${id}`
    }
}

export {baseURL, urls}