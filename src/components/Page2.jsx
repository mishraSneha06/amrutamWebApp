import React  from 'react';
import Image2 from '../Page2/Image2';
import Heading from './Heading';
import { InView } from 'react-intersection-observer';

const Page2 = () => {
    return (
        <div className='min-h-screen w-[100vw] box-sizing-border-box'>
            <Heading title="Discover Ayurveda's Magic With Us" />
            
            {/* Intersection Observer applied to the text section */}
            <InView 
                triggerOnce={true}  // Ensures the animation happens only once
                threshold={0.5}     // When 50% of the element is in view
            >
                {({ inView, ref }) => (
                    <p
                        ref={ref}
                        className={`text-gray-600 mb-12 max-w-lg mx-auto p-4 transition-all duration-500 ease-in-out transform ${
                            inView ? 'scale-105 text-gray-800' : 'scale-100 text-gray-600'
                        }`}
                    >
                        Ayurvedic treatment aims to balance your body and mind, bringing harmony
                        and vitality. It's like a journey to better health using ancient wisdom, 
                        a totally effective approach for a better life.
                    </p>
                )}
            </InView>

            {/* Intersection Observer applied to Image2 */}
            <InView 
                triggerOnce={true} 
                threshold={0.5}
            >
                {({ inView, ref }) => (
                    <div ref={ref} className={`${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
                        <Image2 />
                    </div>
                )}
            </InView>
        </div>
    );
};

export default Page2;
