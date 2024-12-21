import React, { useState, useEffect } from 'react';

const Card6 = (props) => {

    const [background, setBackground] = useState('white');

    useEffect(() => {
        if (props.concern === 'skin') {
            setBackground('bg-purple-200');
        } else if (props.concern === 'hair') {
            setBackground('bg-green-200');
        } else {
            setBackground('bg-yellow-200');
        }
    }, [props.concern]);

    return (
        <div className='flex flex-col gap-4 pt-4 rounded-lg shadow-xl bg-white text-black w-full  h-full  transition-transform ease-in-out transform hover:scale-110 duration-500 delay-100 hover:shadow-2x  '>
            <div className={`text-sm font-bold ${background} w-full h-[10%]`}>Consulted for {props.concern}</div>
            <div className='flex justify-between p-5'>
                <div className='bg-gray-600 rounded-full w-10 h-10'></div>
                <div className='flex flex-col'>
                    <div>{props.name}</div>
                    <div className='text-gray-400'>{props.city}</div>
                </div>
                <div>{props.date}</div>
            </div>

            <div></div>

            <div className='text-xl font-bold p-5'>{props.title}</div>
            <div className='text-sm text-gray-600 p-5'>{props.description}</div>
        </div>
    );
};
export default Card6