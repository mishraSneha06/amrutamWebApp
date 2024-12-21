import React from 'react';

const Card5 = (props) => {
    return (

        <div className='bg-[#FAF5E4] flex flex-col items-center gap-4 rounded-lg border border-green-800 p-5 h-full transition-transform ease-in-out transform hover:scale-110 duration-500 delay-100 hover:shadow-2x'>
            <div className='bg-green-800 rounded-full w-10 h-10 text-white font-bold text-3xl text-center hover:bg-green-600 transition duration-300'>{props.num}</div>
            <h2 className='text-green-800 font-bold text-2xl'>{props.title}</h2>
            <div className='text-sm '>{props.description}</div>
        </div>
    )
};

export default  Card5;