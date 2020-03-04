import Vue from 'vue'
import mockData from './mock'
import { restRequest } from './rest/request'

/**
 * holds the default endpoints.
 */
const endpoints = {
  todos: '/todos'
}

/**
 * Holds the references to each service.
 */
const services = {
  testEnv: false,
  todos: {
    get (id) {
      if (services.testEnv) return JSON.parse(JSON.stringify(mockData.todos.list.find(item => id === item.id)))
      return restRequest(`${endpoints.todos}/${id}`, 'GET')
    },
    new () {
      if (services.testEnv) return { completed: false }
      else return restRequest(`${endpoints.todos}/new`, 'GET')
    },
    list () {
      if (services.testEnv) return JSON.parse(JSON.stringify(mockData.todos.list))
      return restRequest(`${endpoints.todos}/`, 'GET')
    },
    save (record) {
      if (services.testEnv) {
        const tempId = mockData.todos.list[mockData.todos.list.length - 1].id + 1
        record.id = tempId
        mockData.todos.list.push(record)
        return record
      } else {
        return restRequest(`${endpoints.todos}/`, 'POST', record)
      }
    },
    update (id, record) {
      if (services.testEnv) {
        const index = mockData.todos.list.findIndex(i => i.id === id)
        mockData.todos.list[index] = record
        return true
      }
      return restRequest(`${endpoints.todos}/${id}`, 'PUT', record)
    },
    delete (id) {
      if (services.testEnv) {
        const index = mockData.todos.list.findIndex(i => i.id === id)
        mockData.todos.list.splice(index, 1)
        return true
      }
      return restRequest(`${endpoints.todos}/${id}`, 'DELETE')
    }
  }
}

Vue.prototype.$services = services
