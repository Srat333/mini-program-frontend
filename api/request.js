const host = 'http://192.168.1.15:8080/'

// 接口
const uri = {
  // 登陆
  login: 'wx/login',
  // 用户列表
  allUser: 'user/all',
  // 问题列表
  allQ: 'qa/all',
  // 提问
  addQ: 'qa/add',
  upload: 'qa/upload',
  addOrder: 'order/add',
  // 回答
  addA: 'qa/reply'

}

const api = {
  host: host,
  uri: uri,
}

export default api