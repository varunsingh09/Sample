import axios from 'axios';
export const CONTENT_TYPE_DEFAULT = { "Authorization": `Basic ZGV2Z2xhbi1jbGllbnQ6V2ViQ2xpZW50QDA5MDEyMDE5`, "Content-Type": "application/x-www-form-urlencoded" };


axios.interceptors.request.use((config) => {
    config.headers['request-startTime'] = new Date().getTime();
    return config
})

axios.interceptors.response.use((response) => {
    const currentTime = new Date().getTime()
    const startTime = response.config.headers['request-startTime']
    response.headers['request-duration'] = currentTime - startTime
    return response
})

class TaskService {

    getMyTask() {
        return axios.get(`https://jsonplaceholder.typicode.com/photos`, {
            headers: CONTENT_TYPE_DEFAULT,
        })
    }

}

export default new TaskService()