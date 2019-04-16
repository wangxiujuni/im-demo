let API_HOSTNAME
// NODE_ENV并不存在于env中，需要手动添加环境变量
if (process.env.NODE_ENV === 'production') {
// 添加后端域名或ip
  API_HOSTNAME = ''
} else {
  API_HOSTNAME = 'http://localhost:3000'
}
export const USER_SIGNIN = `${API_HOSTNAME}/auth/signin`
export const USER_SIGNUP = `${API_HOSTNAME}/auth/signup`
export const CHAT_MESSAGE = 'ws://localhost:3000/message'
export const GET_DATA = `${API_HOSTNAME}/users/getdata`
