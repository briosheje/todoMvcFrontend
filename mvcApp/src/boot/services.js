import Vue from 'vue'
import axios from 'axios'
import mockData from './mock'

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
  testEnv: true,
  todos: {
    get (id) {
      if (services.testEnv) return JSON.parse(JSON.stringify(mockData.todos.list.find(item => id === item.id)))
      return axios.get(`${endpoints.todos}/${id}`)
    },
    new () {
      if (services.testEnv) return { completed: false }
      else return axios.get(`${endpoints.todos}/new`)
    },
    list () {
      if (services.testEnv) return JSON.parse(JSON.stringify(mockData.todos.list))
      return axios.get(`${endpoints.todos}/`)
    },
    save (record) {
      if (services.testEnv) {
        const tempId = mockData.todos.list[mockData.todos.list.length - 1].id + 1
        record.id = tempId
        mockData.todos.list.push(record)
        return record
      } else {
        return axios.post(`${endpoints.todos}/`, record)
      }
    },
    update (id, record) {
      if (services.testEnv) {
        const index = mockData.todos.list.findIndex(i => i.id === id)
        mockData.todos.list[index] = record
        return true
      }
      return axios.put(`${endpoints.todos}/${id}`, record)
    },
    delete (id) {
      if (services.testEnv) {
        const index = mockData.todos.list.findIndex(i => i.id === id)
        mockData.todos.list.splice(index, 1)
        return true
      }
      return axios.delete(`${endpoints.todos}/${id}`)
    }
  }
}

Vue.prototype.$services = services
