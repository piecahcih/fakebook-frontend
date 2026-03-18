import axios from "axios";

export default async(file) => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', 'cc22-fakebook')
        const res = await axios.post('https://api.cloudinary.com/v1_1/piecahcih/image/upload', formData)
        console.log('uploadCloud : res', res)
        return res.data.secure_url
}

// export default async(file) => {
//     try{
//         const formData = new FormData()
//         formData.append('file', file)
//         formData.append('upload_preset', 'cc22-fakebook')
//         const res = await axios.post('https://api.cloudinary.com/v1_1/piecahcih/image/upload', formData)
//         console.log('uploadCloud : res', res)
//         return res.data.secure_url
//     } catch (error) {
//         console.log(error)
//     }
// }