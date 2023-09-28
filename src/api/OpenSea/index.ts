import axios, {InternalAxiosRequestConfig} from 'axios'

const API_KEY='fbe92ad6283b477f97bc11302552ae61'  //This shouldn't be here, it should be placed in .env file

const openSeaApi = axios.create({
    baseURL: 'https://api.opensea.io/api/v1'
})

// Adding Authorization header for all requests
openSeaApi.interceptors.request.use((config:InternalAxiosRequestConfig) => {
    config.headers['X-API-KEY'] = API_KEY

    return config
})

export default openSeaApi
