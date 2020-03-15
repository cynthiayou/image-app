import Api from './node_modules/@/services/Api'

export default {
  signup (credentials){
    return Api().post('signup', credentials)
  }
}