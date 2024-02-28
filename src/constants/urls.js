const p_holderBaseURL = 'https://jsonplaceholder.typicode.com'
const carsBaseURL = 'http://owu.linkpc.net/carsAPI/v1'

const cars = '/cars'
const urls = {
    users: '/users',
    comments: '/comments',
    cars : {
        base: cars,
        byId:(id)=>`${cars}/${id}`
    }
}
export {p_holderBaseURL, carsBaseURL, urls}