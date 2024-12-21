import React, { forwardRef } from 'react';

const Heading = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className='flex flex-col gap-2 mt-10 mb-12 items-center w-full px-4'
        >
            <h1 className='w-full md:w-3/4 lg:w-1/2 text-3xl md:text-4xl font-bold text-center text-[#2F5D2F]'>
                {props.title}
            </h1>
            <div className='w-full md:w-3/4 lg:w-1/2 bg-stone-400 h-1'></div>
        </div>
    );
});

export default Heading;

