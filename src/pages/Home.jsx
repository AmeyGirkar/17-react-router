import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
        <section className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="flex flex-col-reverse md:flex-row items-center max-w-screen-xl mx-auto p-6">
 
      <div className="text-center md:text-left md:w-1/2 p-6">
        <h1 className="text-3xl font-semibold text-blue-600 mb-4">Welcome to My Website</h1>
        <p className="text-gray-700 text-lg mb-6">
          This is a brief description of what this website is about. We offer services and content to help you with your needs, whether you're looking for inspiration or practical solutions. Our goal is to make your experience enjoyable and efficient.
        </p>
        <Link to="/about" className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">Learn More</Link>
      </div>

      <div className="md:w-1/2 h-full flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1739924144825-4544ec14ee29?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description" className="size-32 rounded-lg shadow-lg"></img>
      </div>
    </div>
  </section>
    </>
  )
}

export default Home
