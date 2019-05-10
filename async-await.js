const axios = require('axios');

async function request(method, uri){
  try {
    let data = await axios[method](uri);
    console.log(data);
  } catch(err){
    if (err) throw err;
  }
}

request('get', 'https://www.google.com');
