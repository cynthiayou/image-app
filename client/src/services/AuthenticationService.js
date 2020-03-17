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
  }
}