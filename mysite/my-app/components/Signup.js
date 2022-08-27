import React from 'react'
import { useState } from 'react'
import axios from 'axios';


const Signup = () => {
  const[username, setUsername] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

  const submitHandler = () => {
    console.log(username)
    console.log(email)
    console.log(password)

    const csrftoken = getCookie('csrftoken');

    const config = {
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      }
    }

    const body = {
      username,
      email,
      password,
    }

    // const options = {
    //   method: 'post',
    //   url: 'http://localhost:8000/saveUser/',
    //   _header: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'X-CSRFToken': csrftoken,
    //   },
    //   data: {
    //     username: document.getElementById('username'),
    //     email: document.getElementById('email'), 
    //     password: document.getElementById('password')
    //   },
    //   transformRequest: [(data, _header) => {
    //     // transform the data
    //     return data;
    //   }]


    // }
    // axios(options);

    const res = axios.post('http://localhost:8000/saveUser', body, config)
    // console.log(res)
    // .then((res) => {
    //   console.log(res);
    // }, (error) => {
    //   console.log(error);
    // });
    // console.log(error.res)
    // res.header( "Access-Control-Allow-Origin" );
  }
  
 
  return (
    <div class="container m-auto lg:p-2 md:p-4 p-10">
      <div className="max-w-sm mx-auto my-24 bg-white px-5 py-10 rounded shadow-xl drop-shadow-xl">
        <div className="text-center text-[#000428] mb-8">
          <h1 className="font-bold text-3xl">SIGN IN</h1>
        </div>
        <form action="#">
        <div className="mt-5 text-[#004E92]">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              label="username"
              onChange={e => setUsername(e.target.value)}
              value={username}
              className="block w-full p-2 border rounded bg-white border-[#000428]"
            />
          </div>
          <div className="mt-5 text-[#004E92]">
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
              className="block w-full p-2 border rounded bg-white border-[#000428]"
            />
          </div>
          <div className="mt-5 text-[#004E92]">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
              className="block w-full p-2 border rounded bg-white border-[#000428]"
            />
          </div>
          {/* <div className="mt-5 text-[#004E92]">
            <label for="passwordc">Confirm Password</label>
            <input
              type="text"
              id="username"
              className="block w-full p-2 border rounded bg-white border-[#000428]"
            />
          </div> */}
          <div className="mt-10">
            <input
              type="submit"
              value="SignIn"
              onClick={submitHandler}
              className="py-3 bg-gradient-to-r from-[#13547A] to-[#80D0C7] hover:scale-105 hover:bg-transparent rounded text-white text-center w-full"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup