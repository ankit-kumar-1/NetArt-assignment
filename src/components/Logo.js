import React from 'react'
import logo from '../asserts/logo.png'

export default function Logo() {
    return (
        <div className=' flex justify-center items-center mb-5'>
            <img src={logo} alt="Company Logo" className="w-full md:w-1/3" />
        </div>
    )
}
