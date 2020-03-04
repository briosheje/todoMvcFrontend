import axios from 'axios'
import {
  Loading, Dialog
} from 'quasar'

console.log('process.env is', process.env)
const baseUrl = process.env.API_BASE_URL

/**
 * Default axios instance item.
 */
const axiosInstance = axios.create({
  baseURL: baseUrl
})

// add an interceptor to show a global loading whenever a request against the server is pending.
axiosInstance.interceptors.request.use(req => {
  console.info('---> Starting svc request:', req)
  Loading.show()
  return req
})

// as above, add an interceptor to hide the global loading.
axiosInstance.interceptors.response.use(res => {
  console.info('<-- Got svc response', res)
  Loading.hide()
  return res
})

/**
 * Defines a common request procedure.
 *
 * @export
 * @param {string} partialUrl relative url (sample: 'todos/')
 * @param {string} method POST|GET|DELETE|PATCH|PUT
 * @param {*} data Payload
 * @param {boolean} [raiseErrorDialog=true] Whether to show or not an error dialog if the request somehow fails.
 * @returns
 */
export async function restRequest (partialUrl, method, data, raiseErrorDialog = true) {
  const methodsMap = {
    POST: axiosInstance.post,
    GET: axiosInstance.get,
    PUT: axiosInstance.put,
    DELETE: axiosInstance.delete,
    PATCH: axiosInstance.patch
  }

  const methodRef = methodsMap[method]
  if (!methodRef) throw new Error('Unable to acquire a valid axios method reference for ' + method)
  else {
    try {
      const response = await methodRef(partialUrl, data)
      return (response.data ? response.data : [200, 204].includes(response.status))
    } catch (e) {
      console.error('Svc request raised an error', e)
      Loading.hide()
      if (raiseErrorDialog) {
        Dialog.create({
          title: 'Error',
          message: 'There was an error while performing a request. Please retry later.'
        })
      }
      return false
    }
  }
}
