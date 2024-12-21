import React from 'react';
import Heading from './Heading';
import Card6 from '../Page6/Card6';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { InView } from 'react-intersection-observer';

const Page6 = () => {

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
        <div className='bg-[#FAF5E4] h-full w-[100vw] box-sizing-border-box'>

            {/* Heading with Intersection Observer */}
            <InView triggerOnce={true} threshold={0.5}>
                {({ inView, ref }) => (
                    <Heading
                        ref={ref}
                        title="Stories from our Valued Customers!"
                        className={`transition-all duration-500 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    />
                )}
            </InView>

            <div className='w-full max-w-6xl mx-auto p-10'>

                {/* Slider with Intersection Observer */}
                <InView triggerOnce={true} threshold={0.5}>
                    {({ inView, ref }) => (
                        <div
                            ref={ref}
                            className={`transition-all duration-500 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        >
                            <Slider {...settings}>
                                <Card6 concern="skin" name="Sophie Moore" city="Chennai" date="17/02/24" title="“One of a kind service”" description="Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis." />
                                <Card6 concern="skin" name="Sophie Moore" city="Chennai" date="17/02/24" title="“One of a kind service”" description="Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis." />
                                <Card6 concern="hair" name="Sophie Moore" city="Chennai" date="17/02/24" title="“One of a kind service”" description="Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis." />
                                <Card6 concern="body" name="Sophie Moore" city="Chennai" date="17/02/24" title="“One of a kind service”" description="Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis." />
                                <Card6 concern="hair" name="Sophie Moore" city="Chennai" date="17/02/24" title="“One of a kind service”" description="Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis." />
                                <Card6 concern="skin" name="Sophie Moore" city="Chennai" date="17/02/24" title="“One of a kind service”" description="Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis." />
                                <Card6 concern="hair" name="Sophie Moore" city="Chennai" date="17/02/24" title="“One of a kind service”" description="Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis." />
                                <Card6 concern="body" name="Sophie Moore" city="Chennai" date="17/02/24" title="“One of a kind service”" description="Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis." />
                                <Card6 concern="hair" name="Sophie Moore" city="Chennai" date="17/02/24" title="“One of a kind service”" description="Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis." />
                            </Slider>
                        </div>
                    )}
                </InView>

            </div>
        </div>
    );
};

export default Page6;
