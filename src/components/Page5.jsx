import React from 'react';
import Heading from './Heading';
import Card5 from '../Page5/Card5';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { InView } from 'react-intersection-observer';

const Page5 = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 1,
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
        <div className='h-full w-[100vw] box-sizing-border-box'>
            <div className='flex flex-col gap-10 items-center px-4'>

                {/* Heading with Intersection Observer */}
                <InView triggerOnce={true} threshold={0.5}>
                    {({ inView, ref }) => (
                        <Heading
                            ref={ref}
                            title="Our Ayurvedic Approach"
                            className={`transition-all duration-500 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        />
                    )}
                </InView>

                {/* Description with Intersection Observer */}
                <InView triggerOnce={true} threshold={0.5}>
                    {({ inView, ref }) => (
                        <div
                            ref={ref}
                            className={`text-gray-600 mb-12 w-full sm:w-2/3 mx-auto transition-all duration-500 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        >
                            At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient’s body type, medical history, and current health conditions.
                        </div>
                    )}
                </InView>

            </div>

            {/* Slider Section with Intersection Observer */}
            <InView triggerOnce={true} threshold={0.5}>
                {({ inView, ref }) => (
                    <div
                        ref={ref}
                        className={`items-center justify-center w-full gap-5 md:p-10 h-auto transition-all duration-500 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                        <Slider {...settings}>
                            <Card5 num="1" title="Make Appointment" description="You must make an appointment in advance, to choose the service and date." />
                            <Card5 num="2" title="Consultations" description="The next stage involves a thorough consultation with an Ayurveda practitioner." />
                            <Card5 num="3" title="Treatment Planning" description="The Ayurvedic practitioner creates a personalized treatment plan for you" />
                            <Card5 num="4" title="Maintenance" description="These visits allow for assessment of progress, adjustments to the treatment." />
                        </Slider>
                    </div>
                )}
            </InView>
        </div>
    );
};

export default Page5;
