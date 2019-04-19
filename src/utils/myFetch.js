const queryString = require('querystring')

export const myFetch = {
  post(url, body) {
    return fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify(body)
    }).then(res => res.json())
  },
  delete(url, body) {
    return fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      method: 'delete',
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify(body)
    }).then(res => res.json())
  },
  put(url, body) {
    return fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      method: 'put',
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify(body)
    }).then(res => res.json())
  },
  get(url, query) {
    const queryStr = queryString.stringify(query)
    return fetch(`${url}?${queryStr}`, {
      method: 'get',
      mode: 'cors',
      credentials: 'include'
    }).then(res => res.json())
  }
}

export default {
  install(Vue) {
    Vue.prototype.$fetch = myFetch
  }
}
