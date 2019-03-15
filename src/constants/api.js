let API_HOSTNAME
// NODE_ENV并不存在于env中，需要手动添加环境变量
if (process.env.NODE_ENV === 'production') {
// 添加后端域名或ip
  API_HOSTNAME = ''
} else {
  API_HOSTNAME = 'http://localhost:3000'
}
export const LOGIN_SIGNIN = `${API_HOSTNAME}/auth/signin`
export const LOGIN_SIGNUP = `${API_HOSTNAME}/auth/signup`
