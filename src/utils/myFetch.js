const myFetch = {
  install(Vue) {
    Vue.prototype.fetch = {
      post(url, body) {
        return fetch(url, {
          headers: { 'Content-Type': 'application/json' },
          method: 'post',
          mode: 'cors',
          credentials: 'include',
          body: JSON.stringify(body)
        }).then(res => res.json())
      },
      get(url) {
        return fetch(url, {
          method: 'get',
          mode: 'cors',
          credentials: 'include'
        }).then(res => res.json()).then(res => JSON.parse(res))
      }
    }
  }
}
export default myFetch
