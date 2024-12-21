import React from 'react';
import { InView } from 'react-intersection-observer';

const Page8 = () => {
    return (
        <div className="flex flex-col md:flex-row bg-[#FAF5E4] h-full w-[100vw] pt-10 md:pt-20 p-6 md:p-10 box-sizing-border-box">
            {/* Left Column */}
            <div className="w-full md:w-1/2 flex flex-col gap-6 mb-10 md:mb-0">
                {/* Heading with Intersection Observer */}
                <InView triggerOnce={true} threshold={0.5}>
                    {({ inView, ref }) => (
                        <h1
                            ref={ref}
                            className={`text-green-800 font-bold text-4xl md:text-5xl font-serif transition-all duration-500 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        >
                            Amrutam Home App
                        </h1>
                    )}
                </InView>

                {/* Description Text */}
                <InView triggerOnce={true} threshold={0.5}>
                    {({ inView, ref }) => (
                        <div
                            ref={ref}
                            className={`text-lg md:text-xl text-gray-800 transition-all duration-500 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        >
                            The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.
                        </div>
                    )}
                </InView>

                {/* Features Text */}
                <InView triggerOnce={true} threshold={0.5}>
                    {({ inView, ref }) => (
                        <div
                            ref={ref}
                            className={`text-black text-2xl md:text-4xl transition-all duration-500 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        >
                            Get a diet & lifestyle consultation with ayurvedic experts across the globe
                        </div>
                    )}
                </InView>

                {/* Get The App Now */}
                <InView triggerOnce={true} threshold={0.5}>
                    {({ inView, ref }) => (
                        <div
                            ref={ref}
                            className={`text-2xl md:text-4xl font-bold mt-6 md:mt-10 transition-all duration-500 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        >
                            Get The App Now
                        </div>
                    )}
                </InView>

                {/* App Store & Google Play Links */}
                <InView triggerOnce={true} threshold={0.5}>
                    {({ inView, ref }) => (
                        <div
                            ref={ref}
                            className={`w-full flex flex-col sm:flex-row gap-4 sm:gap-0 transition-all duration-500 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        >
                            <a className="hover:scale-105 transition duration-300 h-full w-full sm:w-1/2 flex justify-center" href="#">
                                <img
                                    className="w-1/2 sm:w-3/4 md:w-1/2"
                                    src="https://s3-alpha-sig.figma.com/img/d1a0/850d/40fb0269e9c34805102bf5d5f745cd8d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Uorvhb1KCLx3uQpiKBmyMrTEf40MnZ6UFIouj8nslMAwxDteBBiHIpAMXsTcpWGrEpcVwDlQZU9XjDzFLqzLvR89THKH1QGIYVHoWakmrQlPcXkXfkRntQ9Ogt24l~U2KW4Wecwu~Z4TOkha3hNelcf5Y82tURTQWtav8rliJ-A-h5RDx~Fz15Equtjs0qwt-kWvwjuq3-ii8HKOreU9nEAYgRlBP2K~jX~01FhcWfWFjcWI9pl7yn8fVusRSxThbgJxuFCfgL8vr6nWE9V9UcJ8YIKCx8H3Br8B8JPOSDkx0x82yCPSJqLj5~r6sihWbChuiKY3FiKdvcjhRSiB8w__"
                                    alt="App Store"
                                />
                            </a>
                            <a className="hover:scale-105 transition duration-300 h-full w-full sm:w-1/2 flex justify-center" href="#">
                                <img
                                    className="w-1/2 sm:w-3/4 md:w-1/2"
                                    src="https://s3-alpha-sig.figma.com/img/72d6/f410/224928bf1eadd5f797c6e93a6a6b92b5?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l7hl67LF~HcfMSdSPW4JzxWHwiYdjtLznvpH1T2SzHQXTdBc1vR5wlkCPg28u4SQA4tklFXERy~JuQD2vRdMJerOPWoaxh9IRcZ-IFXP8KSiKR0bivMpNTEogPGifmUcX5UjZnSQNbkHeHswkUMoutzy1Nx-yTWlC8DsBGGVyaqQDwXeUz0exQXvTFumb6S0PjpcICVd~SaQvQCL5ijZXFQcbakH2ALFgMIkZuDOHpD0PW~wOJH0xO7iDPAoPDPj2xtLy633yB2YYsU4IDYQXx9yr~WTwjbBwhOSd9y9HXEUETT~E2f22pPYSYmAar4r7VbiVhiXLCTl76Lf18eaaw__"
                                    alt="Google Play"
                                />
                            </a>
                        </div>
                    )}
                </InView>
            </div>

            {/* Right Column - App Preview Image */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <InView triggerOnce={true} threshold={0.5}>
                    {({ inView, ref }) => (
                        <img
                            ref={ref}
                            className={`w-full h-auto max-h-[400px] md:max-h-none transition-all duration-500 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            src="https://s3-alpha-sig.figma.com/img/8c1b/9dae/35e943f21e799601f8a2e985c6f1894f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D~msjqUVtGyvIXK~vJnh4fCFKzh9dZvKUBs2iH68Je0TeZ05BZSrZ3gCOZ~nf~Wy5QYu5M~oYWMb-VcSNxydsQdb2JsDd1z0mWee9Q~rdKPTecKHpnN378vY8RtH3ZnmYb0wFuePeC2BL9lkcWUl4DXeq7nd0byvlLHgQi9uwUS6U~MakQ300YhQwS6gWgcW-m5yiZ-C~jrCrKlXAodTvfJ4FmDXvHJDEnPLFpoFchy975~-dhbni9YM0y2POYOVy-dpQ6HjJ8KHd9j4gvI-DKQbs7i0ch3ErCWwXkyIvNwSEOutP7Q2c3rHOfqhEfeCgeYG7UkNdXW0aNUWPqARCg__"
                            alt="App Preview"
                        />
                    )}
                </InView>
            </div>
        </div>
    );
};

export default Page8;
