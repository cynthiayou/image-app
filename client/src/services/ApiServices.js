import Api from '@/services/Api'

export default {
  signup (credentials){
    return Api().post('auth/signup', credentials)
  },
  login (credentials){
    return Api().post('auth/login', credentials)
  },
  checkEmail(credentials){
    return Api().post('auth/checkemail', credentials)
  },
  addImage(credentials){
    return Api().post('addimage', credentials)
  },
  getImages(credentials){
    return Api().get('images', credentials)
  },
  getImageDetails(id){
    return Api().get(`image/${id}`)
  },
  addComment(credentials){
    return Api().post('addcomment', credentials)
  },
}