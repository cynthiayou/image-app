import Api from '@/services/Api'

export default {
  signup (credentials){
    return Api().post('auth/signup', credentials)
  },
  checkEmail(credentials){
    return Api().post('auth/checkemail', credentials)
  }
}