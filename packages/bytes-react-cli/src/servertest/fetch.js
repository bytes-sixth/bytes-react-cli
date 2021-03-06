var url = 'http:\\localhost:8888\\api\\project\\createProject'
var data = { username: 'example' }

// eslint-disable-next-line no-undef
fetch(url, {
  method: 'PUT', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  // eslint-disable-next-line no-undef
  headers: new Headers({
    'Content-Type': 'application/json',
  }),
})
  .then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response))
