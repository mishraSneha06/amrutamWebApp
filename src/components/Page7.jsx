import React from 'react';
import Heading from './Heading';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card7 from '../Page7/Card7';
import { InView } from 'react-intersection-observer';

const Page7 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='h-full w-full flex flex-col items-center box-sizing-border-box'>
            
            {/* Heading with Intersection Observer */}
            <InView triggerOnce={true} threshold={0.5}>
                {({ inView, ref }) => (
                    <Heading
                        ref={ref}
                        title="Meet Our Ayurveda Experts"
                        className={`transition-all duration-500 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    />
                )}
            </InView>

            {/* Slider with Intersection Observer */}
            <div className='w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-10'>
                <InView triggerOnce={true} threshold={0.5}>
                    {({ inView, ref }) => (
                        <div
                            ref={ref}
                            className={`transition-all duration-500 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        >
                            <Slider {...settings}>
                                <Card7 name="Dr. Vaishali Sharma" qualification="Ayurveda Practitioner (BAMS, MD)" experience="25 years" position="Skin Specialist" />
                                <Card7 name="Dr. Vaishali Sharma" qualification="Ayurveda Practitioner (BAMS, MD)" experience="25 years" position="Skin Specialist" />
                                <Card7 name="Dr. Vaishali Sharma" qualification="Ayurveda Practitioner (BAMS, MD)" experience="25 years" position="Skin Specialist" />
                                <Card7 name="Dr. Vaishali Sharma" qualification="Ayurveda Practitioner (BAMS, MD)" experience="25 years" position="Skin Specialist" />
                                <Card7 name="Dr. Vaishali Sharma" qualification="Ayurveda Practitioner (BAMS, MD)" experience="25 years" position="Skin Specialist" />
                                <Card7 name="Dr. Vaishali Sharma" qualification="Ayurveda Practitioner (BAMS, MD)" experience="25 years" position="Skin Specialist" />
                            </Slider>
                        </div>
                    )}
                </InView>
            </div>

            {/* Button with Intersection Observer */}
            <InView triggerOnce={true} threshold={0.5}>
                {({ inView, ref }) => (
                    <button
                        ref={ref}
                        className={`rounded-md text-xl bg-lime-100 py-2 px-4 font-semibold text-green-800 hover:bg-green-600 transition duration-300 mt-10 mb-5 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                        Find more Experts
                    </button>
                )}
            </InView>

        </div>
    );
};

export default Page7;
