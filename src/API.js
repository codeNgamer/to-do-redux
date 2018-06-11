require('es6-promise').polyfill();
require('isomorphic-fetch');

const API_SERVICE_BASE_URL = 'https://practiceapi.devmountain.com/api';

const GET = url => {
  return fetch(url)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
}
const DELETE = url => {
  return fetch(url, {
    method: 'DELETE',
  })
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
}

const PATCH = (url, body) => {
  return fetch(url, {
    body: JSON.stringify(body),
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
}

const PUT = (url, body) => {
  return fetch(url, {
    body: JSON.stringify(body),
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
}

const POST = (url, body) => {
  return fetch(url, {
    body: JSON.stringify(body),
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
}

const API = {
  addTodo: todo => {
    return POST(`${API_SERVICE_BASE_URL}/tasks`, todo)
  },
  completeTodo: id => {
    return PUT(`${API_SERVICE_BASE_URL}/tasks/${id}`)
  },
  deleteTodo: id => {
    return DELETE(`${API_SERVICE_BASE_URL}/tasks/${id}`)
  },
  fetchTodos: () => {
    return GET(`${API_SERVICE_BASE_URL}/tasks`)
  },
  updateTodo: todo => {
    return PATCH(`${API_SERVICE_BASE_URL}/tasks/${todo.id}`, todo)
  },
}
export default API;
