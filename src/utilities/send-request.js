import { getToken } from './user-service'

export default async function sendRequest (url, method='GET', payload = null) {
  const options = { method }
  if (payload) {
    options.header = { 'Content-Type': 'appplication/json' }
    options.body = json.stringify(payload)
  }
  const token = getToken()
  if (token) {
    options.headers = options.headers || {}
    options.header.Authorization = `Bearer ${token}`
  }
  const res = await fetch (url, options)
  if (res.ok)
    return res.json()
    console.log(res)
    throw new Error ('Bad Request')
}