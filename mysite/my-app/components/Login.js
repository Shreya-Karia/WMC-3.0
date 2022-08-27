import React from 'react'
import { useState } from 'react'
import axios from 'axios';

// axios.get(url[, config])



const Login = () => {
  // const[username, setUsername] = useState('')
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
    // console.log(username)
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

    const res = axios.get('http://localhost:8000/printUser', config)
    console.log(res)

  }

  return (
    <div class="container m-auto lg:p-2 md:p-4 p-10">
      <div className="max-w-sm mx-auto my-24 bg-white px-5 py-10 rounded shadow-xl drop-shadow-xl">
        <div className="text-center text-[#000428] mb-8">
          <h1 className="font-bold text-3xl">LOGIN</h1>
        </div>
        <form action="#">
          <div className="mt-5 text-[#004E92]">
            <label for="username">Email</label>
            <input
              type="email"
              id="email"
              name="email"
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
              name="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
              className="block w-full p-2 border rounded bg-white border-[#000428]"
            />
          </div>
          <div className="mt-10">
            <input
              type="submit"
              value="Login"
              onClick={submitHandler}
              className="py-3 bg-gradient-to-r from-[#13547A] to-[#80D0C7] hover:scale-105 hover:bg-transparent rounded text-white text-center w-full"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login

// 1. When click Login, get request must be sent
// 2. Data fetched must be compared with the input Data
// 3. If login details match, user must be redirected to the main page