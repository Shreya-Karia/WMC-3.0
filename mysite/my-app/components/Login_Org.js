import React from 'react'

const Login_Org = () => {
  return (
    <div class="container m-auto lg:p-2 md:p-4 p-10">
      <div className="max-w-sm mx-auto my-24 bg-white px-5 py-10 rounded shadow-xl drop-shadow-xl">
        <div className="text-center text-[#000428] mb-8">
          <h1 className="font-bold text-3xl">LOGIN</h1>
        </div>
        <form action="" method="POST" >
          <div className="mt-5 text-[#004E92]">
            <label for="username">Email</label>
            <input
              type="email"
              id="username"
              name="email"
              required
              className="block w-full p-2 border rounded bg-white border-[#000428]"
            />
          </div>
          <div className="mt-5 text-[#004E92]">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="block w-full p-2 border rounded bg-white border-[#000428]"
            />
          </div>
          <div className="mt-10">
            <input
              type="submit"
              value="Login"
              className="py-3 bg-gradient-to-r from-[#13547A] to-[#80D0C7] hover:scale-105 hover:bg-transparent rounded text-white text-center w-full"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login_Org