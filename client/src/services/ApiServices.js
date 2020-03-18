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
  getImages(tag){
    return Api().get(`images/${tag}`)
  },
  getImageDetails(id){
    return Api().get(`image/${id}`)
  },
  addComment(credentials){
    return Api().post('addcomment', credentials)
  },
  search(credentials){
    return Api().post('search', credentials)
  }
}