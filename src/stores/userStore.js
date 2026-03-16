import { mainApi } from "@/api/mainApi";
import { create } from "zustand";
import { createJSONStorage, persist } from 'zustand/middleware';

const useUserStore = create( persist ((set,get)=>({
    user: null,
    token: '',
    login: async (body) => {
        const res = await mainApi.post('/auth/login', body)
        set({ token : res.data.token, user: res.data.user })
        return res
    },
    logout: () => set( {token:'', user: null})
}), { name: 'userState', storage: createJSONStorage( ()=>localStorage ) }) )

export default useUserStore