import useUserStore from '@/stores/userStore'
import axios from 'axios'

export const mainApi = axios.create({
    baseURL : "http://localhost:8899/api",
    headers : {
        'Content-Type' : 'application/json'
    }
})

mainApi.interceptors.request.use( config => {
    const token = useUserStore.getState().token
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export const apiRegister = async (body) => {
    return await mainApi.post('/auth/register', body)
}

export const createPostApi = (body) => mainApi.post('/post', body)

export const getAllPostsApi = () => mainApi.get('/post')

export const deletePostApi = id => mainApi.delete(`/post/${id}`)

export const updatePostApi = (id, body) => mainApi.put(`/post/${id}`, body)

export const createLikeApi = (id)=>mainApi.post(`/post/${id}/like`)

export const unLikeApi = (id)=> mainApi.delete(`/post/${id}/like`)