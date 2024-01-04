import React from 'react'

const Footer = () => {
  return (
    <footer class=" bg-gradient-to-b from-gray-600/10 to-gray-800 font-semibold text-white py-14 text-center">
    <p class="mb-2">Made with ❤️ and a lot of coffee ☕ by <span className=' text-orange-400'>Anand Singh</span> using <span className=' text-blue-400'>React</span> & <span className=' text-blue-400'>Tailwind CSS</span></p>
    <p class="mb-2">Connect with me:</p>
    <ul class="list-none p-0">
        <li class="inline-block mr-4"><a href="mailto:Asingh4337@conestogac.on.ca" target="_blank" rel="noreferrer" class="text-blue-500 hover:underline">Mail</a></li>
        <li class="inline-block mr-4"><a href="https://www.linkedin.com/in/anand-pravesh-singh-737b52127/" target="_blank" rel="noreferrer" class="text-blue-500 hover:underline">LinkedIn</a></li>
        <li class="inline-block mr-4"><a href="https://github.com/Anand-singh97" rel="noreferrer" target="_blank" class="text-blue-500 hover:underline">GitHub</a></li>
    </ul>
    <p class="mt-4">&copy; 2023 personal-portfolio</p>
    </footer>
  )
}

export default Footer