import React from 'react'
import PropTypes from 'prop-types'


export default function Login(props) {
  return (
    <>
    
    <div className="bg-gray-100 pt-3 pb-24 ">
        <p className='pt-24 pb-10 text-center text-3xl font-bold'>{props.title}</p>
        {/* <!-- Input Box --> */}
        <div className="inputbox flex flex-col bg-white w-96 mx-auto rounded-md shadow-lg">
            <span className="text-center text-black font-semibold my-4 text-lg">Log in to <span>{props.title}</span></span>
            <input type="text" className="border  rounded-md text-base p-3  mx-3"
                placeholder="Email address or phone number"/>
            <input type="Password" className="border rounded-md text-base p-3 my-3 mx-3" placeholder="Password"/>
            <button className="bg-blue-600 p-3 text-white font-semibold mx-2 rounded-md text-lg">Log in</button>
            <div className="text-blue-600  text-center mt-4 mb-5">
                <span className="hover:underline hover:cursor-pointer">Forgotten account?</span>..<span
                    className="hover:underline hover:cursor-pointer">Sign up for {props.title}</span>
            </div>
        </div>
    </div>

      
    </>

)
}

Login.prototype = {
    title: PropTypes.string.isrequired
}