import React from 'react'
import Script from 'next/script'

const Navbar = () => {
  return (
        <nav className="sticky top-0 z-10 backdrop-filter bg-black backdrop-blur-lg bg-opacity-30">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex  items-center justify-between h-20">
            <span className="text-3xl text-[#80D0C7] font-semibold">Logo</span>
            <div className="md:flex hidden space-x-8 text-[#80D0C7]">
                <a href="#" className='hover:scale-110 transition duration-300'>Dashboard</a>
                <a href="#" className='hover:scale-110 transition duration-300'>About</a>
                <a href="#" className='hover:scale-110 transition duration-300'>Projects</a>
                <a href="#" className='hover:scale-110 transition duration-300'>Contact</a>
            </div>
            <div class="md:hidden flex items-center">
						<button class="outline-none mobile-menu-button">
						<svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					  </button>
					  </div>

            </div>
        </div>
        <div class="hidden mobile-menu">
				<ul class="">
					<li class="active"><a href="" class="block text-sm px-2 py-4 text-white bg-[#80D0C7] font-semibold">Dashboard</a></li>
					<li><a href="#services" class="block text-sm px-2 py-4 hover:bg-[#80D0C7] transition duration-300">About</a></li>
					<li><a href="#about" class="block text-sm px-2 py-4 hover:bg-[#80D0C7] transition duration-300">Projects</a></li>
					<li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-[#80D0C7] transition duration-300">Contact</a></li>
				</ul>
			  </div>
			  <Script id='hamburger'>
				{ `const btn = document.querySelector("button.mobile-menu-button");
				const menu = document.querySelector(".mobile-menu");

				btn.addEventListener("click", () => {
				  menu.classList.toggle("hidden"); });`}
		 	  </Script>
      </nav>
  )
}

export default Navbar