import React from 'react';

const Card7 = (props) => {
    return (
        <div className=' flex flex-col gap-4 bg-[#FAF5E4] shadow-xl rounded-xl items-center w-full h-full transition-transform ease-in-out transform hover:scale-110 duration-500 delay-100 hover:shadow-2x'>
            <img className='rounded-full h-32 w-32 md:h-40 md:w-40 object-cover m-4'
            src="https://s3-alpha-sig.figma.com/img/5af8/78e5/09217e175d69b8cfd3da49cb2a8a6437?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aThGT6X-pORybQWcBeE7-oXEvJ-Ey41vxaJEbYC5x0RpIwPk2t7IX5tqrdWOh1Rk3EtS2yHGIAqX0uhWIST~4ldJjf1GGSB7VBkPf~1QFL7Pz7Bu2fZFVBSlwyhK48cMSoIftI3gnBTEFOgqIc08H~Y5uCui~aGYtAP0Efi05fxiJ-5xZu~NSFVvgF4oONJNUvOiokHqHn9Tc7G0FutOuULrqp1fq9FwJun3vQaKLKL2KgfPMzp1ruFxGw-ZAMH5Lih5lJewq5DyNXZ1Kt3mUn6p8eBWc1JeJudEXo0Z6qkAIC4l2WK15oaxThlkjFG8V4mnAg1-gk9uZRIIgUeqbA__" alt="Profile Picture" />
            <div className='text-2xl font-semibold text-black'>{props.name}</div>
            <div className='text-xl text-gray-600'>{props.qualification}</div>
            <div className='text-xl'>{props.experience} of experience</div>
            <div className='text-green-950 bg-lime-200 opacity-50 rounded-xl h-10 w-70 text-center p-2'>{props.position}</div>
            <div className='w-full bg-green-800 py-2 text-center text-white rounded-xl'>Book a Session</div>
        </div>
    );
};

export default Card7;