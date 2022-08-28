import React from 'react'
// import CSRFToken from './CSRFToken'

const Signup_org = () => {
  

  return (
    <div class="md:flex md:flex-row lg:space-x-20 md:space-x-16 flex flex-col-reverse lg:p-2 md:p-4 p-10">
      <div className="max-w-3xl  md:my-24 my-10 bg-white px-5 py-10 rounded shadow-xl drop-shadow-xl">
        <div className="text-center text-[#000428] mb-8">
          <h1 className="font-bold text-3xl">SIGN UP</h1>
        </div>
        <form method="POST" name="form" action="newAdmin" className='md:grid md:grid-cols-2 grid grid-cols-1 gap-x-5'>
          {/* <CSRFToken /> */}
        {/* {% csrf_token %} */}
        <div className="mt-5 text-[#004E92]">
            <label for="username">Name of the Organization</label>
            <input
              type="text"
              id="username"
              name = "organization_name"
              required
              className="block w-full p-2 border rounded bg-white border-[#000428]"
            />
          </div>
          <div className="mt-5 text-[#004E92]">
            <label for="email">Email</label>
            <input
              type="email"
              id="username"
              name= "email"
              required
              className="block w-full p-2 border rounded bg-white border-[#000428]"
            />
          </div>
          <div className="mt-5 text-[#004E92]">
            <label for="username">Contact Person</label>
            <input
              type="text"
              id="username"
              name = "organizer_name"
              required
              className="block w-full p-2 border rounded bg-white border-[#000428]"
            />
          </div>
          <div className="mt-5 text-[#004E92]">
            <label for="username">Contact Number</label>
            <input
              type="number"
              id="username"
              name = "contact_no"
              required
              className="block w-full p-2 border rounded bg-white border-[#000428]"
            />
          </div>
          <div className="mt-5 text-[#004E92]">
            <label for="username">Office Address</label>
            <input
              type="text"
              id="username"
              name = "address"
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
          <div className="mt-5 text-[#004E92]">
            <label for="passwordc">Confirm Password</label>
            <input
              type="password"
              id="username"
              name="password2"
              required
              className="block w-full p-2 border rounded bg-white border-[#000428]"
            />
          </div>
          <div className="mt-10">
            <input
              type="submit"
              value="SignIn"
              className="py-3 bg-gradient-to-r from-[#13547A] to-[#80D0C7] hover:scale-105 hover:bg-transparent rounded text-white text-center w-full"
            />
          </div>
        </form>
      </div>
      <div className="md:max-w-3xl max-w-lg  md:my-24 my-10 text-center ">
            <h1 className='text-6xl font-bold md:text-7xl lg:text-8xl tracking-widest mt-10'>WELCOME</h1>
            <p className='md:text-xl md:mt-10 mt-5 text-md'>A brief intro of eventjam here........ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

    </div>
  )
}

export default Signup_org