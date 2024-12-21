import React from 'react';
import { InView } from 'react-intersection-observer';

const Page4 = () => {
    return (
        <div className='relative h-full w-[100vw] box-sizing-border-box bg-[url("https://s3-alpha-sig.figma.com/img/d45f/d3de/6f20e70fa75049c9e8140baa6d7e6531?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nB7DC3xGQ9gBvlOW-LcjHooa3aayZM96nXs95RDnZJBy7u7Vw48fU4Uq-jDLO-MvxHgeIu0xJhIDnsb38xgoNJw5SD1cYik5akP-wJiR7Rg28pzR4gkQ4I4~7lsJ~M95JScv15TsWrZd34KOcz4XV~yZx-iNmxctdupEbcuKmFDo3ffZO6ewz9Z3KCGcBCp6E2f9EA743UJEzMbM~lOvLzGpn8DB4Ah9krEZD4rWFpijuJEETM4GwrDdOTXIG5gmFH3HPz3Aec8qcsjr3UaURzwNZRUPuG1f4oEJYsBUQ3pMGLyYFTfBm5WBAmmKkB2qLZxUUVCYigp6Q99WEm3HEw__")] bg-cover bg-center bg-no-repeat'>
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10 flex items-center justify-center min-h-screen w-[100vw] flex-col">

                {/* Header Section with InView */}
                <InView triggerOnce={true} threshold={0.5}>
                    {({ inView, ref }) => (
                        <h1
                            ref={ref}
                            className={`text-white text-5xl font-bold w-[60%] font-serif mb-10 transition-all duration-500 ease-in-out ${inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
                                }`}
                        >
                            Ready to restore harmony in your mind, body and spirit?
                        </h1>
                    )}
                </InView>

                {/* Button Section with InView */}
                <InView triggerOnce={true} threshold={0.5}>
                    {({ inView, ref }) => (
                        <button
                            ref={ref}
                            className={`rounded-md text-xl bg-green-700 py-2 px-4 font-semibold text-white hover:bg-green-600 transition duration-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                        >
                            Book a Consultation
                        </button>
                    )}
                </InView>
            </div>

        </div>
    );
}

export default Page4;
