import React from 'react'

function Contact() {
  return (
    <>
      <section className="py-16 px-6 text-center bg-gray-50">
    <h1 className="text-3xl font-semibold text-blue-600 mb-4">Contact Us</h1>
    <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">
      We’d love to hear from you! Please feel free to reach out with any questions or feedback.
    </p>
  </section>

  <section className="py-8 px-6 bg-white">
    <div className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
      <form action="#" method="POST">
        <div className="mb-4">
          <label for="name" className="block text-sm font-semibold text-gray-700">Your Name</label>
          <input type="text" id="name" name="name" className="w-full p-3 mt-2 border border-gray-300 rounded-md" required/>
        </div>

        <div className="mb-4">
          <label for="email" className="block text-sm font-semibold text-gray-700">Your Email</label>
          <input type="email" id="email" name="email" className="w-full p-3 mt-2 border border-gray-300 rounded-md" required/>
        </div>

        <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">Submit</button>
      </form>
    </div>
  </section>
    </>
  )
}

export default Contact
