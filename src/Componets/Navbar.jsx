import React from 'react'
import { Link } from 'react-router-dom'
Link
function Navbar() {
    return (
        <>
            <nav className="bg-blue-600 p-4">
                <div className="max-w-screen-xl mx-auto flex justify-between items-center">

                    <div className="text-white text-2xl font-semibold">
                        React Router
                    </div>


                    <div className="space-x-6">
                        <Link to="/" className="text-white hover:text-blue-200">Home</Link>
                        <Link to="/about" className="text-white hover:text-blue-200">About</Link>
                        <Link to="/contact" className="text-white hover:text-blue-200">Contact</Link>
                        <Link to="/users" className="text-white hover:text-blue-200">User</Link>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
