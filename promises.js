const axios = require('axios');

function request(method, uri){
  axios[method](uri).then(result => {
    console.log(result);
  }).catch(err => {
    if (err) throw err;
  })
}


request('get', 'http://www.google.com');