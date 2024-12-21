import React from 'react';

const InputSection =() =>{
    return(

        <div className="flex items-center border-2 border-gray-700 rounded-full overflow-hidden bg-gray-100">
      <input
        type="email"
        placeholder="Your Email Address"
        className="flex-1 px-4 py-2 text-gray-700 bg-transparent outline-none"
      />
      <button className="px-6 py-2 text-white font-bold bg-black hover:bg-gray-800 transition duration-300">
        Subscribe
      </button>
    </div>
    )
}

export default InputSection