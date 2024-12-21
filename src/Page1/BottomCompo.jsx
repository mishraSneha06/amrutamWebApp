import React from 'react';

const BottomCompo = (props) => {
    return (
        <div className='flex flex-col md:flex-row items-center text-center md:text-left gap-4 '>
            <div className='h-16 w-16 flex-shrink-0 '>
                <img className='h-full w-full rounded-full object-cover'
                src={props.image} alt="" />
            </div>

            <div className='text-sm md:text-base max-w-xs'>{props.description}</div>
        </div>
    )
};

export default BottomCompo;