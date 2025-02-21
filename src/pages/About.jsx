import React from 'react'

function About() {
  return (
    <>
    <section className="py-16 px-6 bg-gray-50 text-center">
    <h1 className="text-4xl font-semibold text-blue-600 mb-8">About Us</h1>
    <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-12">
      We are a team of dedicated professionals passionate about creating solutions that make a difference. Our goal is to help individuals and businesses achieve success by providing top-notch services and support. Our mission is to innovate, inspire, and help our clients succeed.
    </p>
  </section>

  <section className="py-16 px-6 bg-white">
    <h2 className="text-3xl font-semibold text-blue-600 text-center mb-12">Meet Our Team</h2>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
        <img src="https://plus.unsplash.com/premium_photo-1668943075052-8d2596f27dfd?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4"></img>
        <h3 className="text-xl font-semibold text-blue-600 mb-2">John Doe</h3>
        <p className="text-gray-700 mb-4">CEO & Founder</p>
        <p className="text-gray-600">
          John is the visionary behind our company, guiding our strategies and innovations to ensure we stay at the forefront of our industry.
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
        <img src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=3606&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4"></img>
        <h3 className="text-xl font-semibold text-blue-600 mb-2">Jane Smith</h3>
        <p className="text-gray-700 mb-4">Chief Marketing Officer</p>
        <p className="text-gray-600">
          Jane leads our marketing team and ensures that our brand's message reaches the right audience with impactful campaigns.
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
        <img src="https://images.unsplash.com/photo-1630423961052-25b829557afb?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4"></img>
        <h3 className="text-xl font-semibold text-blue-600 mb-2">Alex Johnson</h3>
        <p className="text-gray-700 mb-4">Lead Developer</p>
        <p className="text-gray-600">
          Alex is responsible for developing and maintaining our website and applications, ensuring a seamless user experience.
        </p>
      </div>
    </div>
  </section>
      
    </>
  )
}

export default About
