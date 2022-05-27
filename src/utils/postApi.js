import tokenService from './tokenService';

const BASE_URL = '/api/posts';

export function create(post) {
    return fetch(BASE_URL, {
      method: 'POST',
      body: post,
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken(),
      },
    
    }).then(res => {
      if(res.ok) return res.json();
      throw new Error('CHECK THE SERVER TERMINAL')
    })
  }

<<<<<<< HEAD
=======
<<<<<<<< HEAD:planthouse/src/utils/postApi.js
========
  export function remove(postId) {
    console.log('remove', postId);
    return fetch(`${BASE_URL}/${postId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken(),
      },
    
    }).then(res => {
      if(res.ok) return res.json();
      throw new Error('CHECK THE SERVER TERMINAL')
    })
  }

>>>>>>>> working:src/utils/postApi.js

>>>>>>> working
  export function getAll() {
    return fetch(BASE_URL, {
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    })
    .then(res => {
      if(res.ok) return res.json();
<<<<<<< HEAD
      throw new Error('CHECK THE SERVER TERMINAL')
=======
      throw new Error('Bad Credentials! CHECK THE SERVER TERMINAL!')
>>>>>>> working
    })
  }